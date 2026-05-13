#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";

const require = createRequire(import.meta.url);

function usage() {
  console.error(
    "Usage: node render_pdf_pages.mjs <pdf-path> <pages> <output-dir> [scale]\n" +
      "Example: node render_pdf_pages.mjs ../Lecture7.pdf 3,6-8 .tmp/lecture7 1.5"
  );
  process.exit(2);
}

function parsePages(spec) {
  const pages = new Set();
  for (const part of spec.split(",")) {
    const trimmed = part.trim();
    if (!trimmed) continue;
    if (trimmed.includes("-")) {
      const [start, end] = trimmed.split("-").map((x) => Number.parseInt(x, 10));
      if (!Number.isInteger(start) || !Number.isInteger(end) || start < 1 || end < start) {
        throw new Error(`Invalid page range: ${trimmed}`);
      }
      for (let page = start; page <= end; page += 1) pages.add(page);
    } else {
      const page = Number.parseInt(trimmed, 10);
      if (!Number.isInteger(page) || page < 1) throw new Error(`Invalid page: ${trimmed}`);
      pages.add(page);
    }
  }
  return [...pages].sort((a, b) => a - b);
}

if (process.argv.length < 5) usage();

const pdfPath = path.resolve(process.argv[2]);
const pageSpec = process.argv[3];
const outputDir = path.resolve(process.argv[4]);
const scale = process.argv[5] ? Number.parseFloat(process.argv[5]) : 1.5;

if (!fs.existsSync(pdfPath)) throw new Error(`PDF not found: ${pdfPath}`);
if (!Number.isFinite(scale) || scale <= 0) throw new Error(`Invalid scale: ${process.argv[5]}`);

const { createCanvas } = require("@napi-rs/canvas");
const pdfjsPath = require.resolve("pdfjs-dist/legacy/build/pdf.mjs");
const pdfjs = await import(pathToFileURL(pdfjsPath).href);

fs.mkdirSync(outputDir, { recursive: true });

const pdf = await pdfjs.getDocument({ url: pdfPath, disableWorker: true }).promise;
const pages = parsePages(pageSpec);

for (const pageNumber of pages) {
  if (pageNumber > pdf.numPages) {
    console.warn(`Skipping page ${pageNumber}: PDF has only ${pdf.numPages} pages`);
    continue;
  }
  const page = await pdf.getPage(pageNumber);
  const viewport = page.getViewport({ scale });
  const canvas = createCanvas(Math.ceil(viewport.width), Math.ceil(viewport.height));
  const context = canvas.getContext("2d");
  await page.render({ canvasContext: context, viewport }).promise;
  const outPath = path.join(outputDir, `page-${String(pageNumber).padStart(3, "0")}.png`);
  fs.writeFileSync(outPath, canvas.toBuffer("image/png"));
  console.log(outPath);
}
