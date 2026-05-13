#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";

const require = createRequire(import.meta.url);

function usage(exitCode = 2) {
  console.error(
    "Usage: node extract_pdf_text.mjs <pdf-path> [pages] [--json] [--max-chars N]\n" +
      "Example: node extract_pdf_text.mjs \"C:\\\\path with spaces\\\\Lecture 7.pdf\" 1-5 --json\n" +
      "Pages are 1-based and can be comma/range specs such as 1,3-5. Omit pages for all pages."
  );
  process.exit(exitCode);
}

function parsePages(spec, maxPage) {
  if (!spec) return Array.from({ length: maxPage }, (_, index) => index + 1);

  const pages = new Set();
  for (const part of spec.split(",")) {
    const trimmed = part.trim();
    if (!trimmed) continue;
    if (trimmed.includes("-")) {
      const [start, end] = trimmed.split("-").map((x) => Number.parseInt(x, 10));
      if (!Number.isInteger(start) || !Number.isInteger(end) || start < 1 || end < start) {
        throw new Error(`Invalid page range: ${trimmed}`);
      }
      for (let page = start; page <= Math.min(end, maxPage); page += 1) pages.add(page);
    } else {
      const page = Number.parseInt(trimmed, 10);
      if (!Number.isInteger(page) || page < 1) throw new Error(`Invalid page: ${trimmed}`);
      if (page <= maxPage) pages.add(page);
    }
  }
  return [...pages].sort((a, b) => a - b);
}

function normalizeText(text) {
  return text.replace(/\s+/g, " ").trim();
}

function firstUsefulLine(text) {
  return text
    .split(/\r?\n/)
    .map((line) => normalizeText(line))
    .find((line) => line.length >= 4) ?? "";
}

function detectRisk(text) {
  const normalized = normalizeText(text);
  const risks = [];
  if (normalized.length < 80) risks.push("very little extracted text");
  if (/[�]/.test(normalized)) risks.push("replacement characters");
  if (/(Ã|Â|â€|â€™|â€œ|â€\u009d|鍛|宕|濂|涓|鎺|缁|璁)/.test(normalized)) {
    risks.push("possible mojibake / garbled text");
  }
  if (/(formula|diagram|table|figure|chart|screenshot|code|equation)/i.test(normalized)) {
    risks.push("may depend on visual content");
  }
  return risks;
}

function parseArgs(argv) {
  if (argv.includes("--help") || argv.includes("-h")) usage(0);
  if (argv.length < 3) usage();

  const pdfPath = path.resolve(argv[2]);
  let pagesSpec = "";
  let json = false;
  let maxChars = 1200;

  for (let index = 3; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--json") {
      json = true;
    } else if (arg === "--max-chars") {
      const value = Number.parseInt(argv[index + 1], 10);
      if (!Number.isInteger(value) || value < 1) throw new Error(`Invalid --max-chars: ${argv[index + 1]}`);
      maxChars = value;
      index += 1;
    } else if (!pagesSpec) {
      pagesSpec = arg;
    } else {
      throw new Error(`Unexpected argument: ${arg}`);
    }
  }

  return { pdfPath, pagesSpec, json, maxChars };
}

async function main() {
  const { pdfPath, pagesSpec, json, maxChars } = parseArgs(process.argv);
  if (!fs.existsSync(pdfPath)) throw new Error(`PDF not found: ${pdfPath}`);

  const pdfjsPath = require.resolve("pdfjs-dist/legacy/build/pdf.mjs");
  const pdfjs = await import(pathToFileURL(pdfjsPath).href);
  const pdf = await pdfjs.getDocument({ url: pdfPath, disableWorker: true }).promise;
  const pages = parsePages(pagesSpec, pdf.numPages);
  const results = [];

  for (const pageNumber of pages) {
    const page = await pdf.getPage(pageNumber);
    const content = await page.getTextContent();
    const lines = [];
    let lastY = null;
    let currentLine = [];

    for (const item of content.items) {
      const y = Math.round(item.transform?.[5] ?? 0);
      if (lastY !== null && Math.abs(y - lastY) > 3 && currentLine.length > 0) {
        lines.push(currentLine.join(" "));
        currentLine = [];
      }
      currentLine.push(item.str);
      lastY = y;
    }
    if (currentLine.length > 0) lines.push(currentLine.join(" "));

    const text = lines.map(normalizeText).filter(Boolean).join("\n");
    const risks = detectRisk(text);
    results.push({
      page: pageNumber,
      title: firstUsefulLine(text),
      charCount: normalizeText(text).length,
      status: risks.length > 0 ? "needs visual inspection" : "text-extracted",
      risks,
      text: text.length > maxChars ? `${text.slice(0, maxChars)}...` : text,
    });
  }

  if (json) {
    console.log(JSON.stringify({ pdfPath, pageCount: pdf.numPages, pages: results }, null, 2));
    return;
  }

  console.log(`PDF: ${pdfPath}`);
  console.log(`Pages: ${pdf.numPages}`);
  for (const result of results) {
    console.log("");
    console.log(`Page ${result.page} | ${result.status} | chars=${result.charCount}`);
    if (result.title) console.log(`Title/key phrase: ${result.title}`);
    if (result.risks.length > 0) console.log(`Risks: ${result.risks.join("; ")}`);
    if (result.text) console.log(result.text);
  }
}

main().catch((error) => {
  if (error.code === "MODULE_NOT_FOUND" && String(error.message).includes("pdfjs-dist")) {
    console.error("Missing pdfjs-dist. In Codex, call load_workspace_dependencies and run with bundled NODE_PATH.");
  }
  console.error(error.message);
  process.exit(1);
});
