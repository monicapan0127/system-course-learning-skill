param(
  [Parameter(Mandatory = $true)][string]$Version,
  [string]$Title = "",
  [switch]$AllowDirty
)

$ErrorActionPreference = "Stop"

function Run-Git {
  param([Parameter(ValueFromRemainingArguments = $true)][string[]]$GitArgs)
  $output = & git @GitArgs
  if ($LASTEXITCODE -ne 0) {
    throw "git $($GitArgs -join ' ') failed"
  }
  return $output
}

if ($Version -notmatch "^v?\d+\.\d+(\.\d+)?$") {
  throw "Version must look like v1.5, 1.5, v1.5.1, or 1.5.1."
}

if (-not $Version.StartsWith("v")) {
  $Version = "v$Version"
}

$repoRoot = (Run-Git rev-parse --show-toplevel | Select-Object -First 1).Trim()
Set-Location $repoRoot

$dirty = @(Run-Git status --porcelain)
if ($dirty.Count -gt 0 -and -not $AllowDirty) {
  throw "Working tree is dirty. Commit/stash first, or rerun with -AllowDirty."
}

$display = if ($Title.Trim().Length -gt 0) { "$Version $($Title.Trim())" } else { $Version }

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText((Join-Path $repoRoot "VERSION"), $Version, $utf8NoBom)

$readmePath = "README.md"
if (-not (Test-Path -LiteralPath $readmePath)) {
  throw "README.md not found."
}

$readmeFullPath = (Resolve-Path -LiteralPath $readmePath).Path
$readme = [System.IO.File]::ReadAllText($readmeFullPath, [System.Text.Encoding]::UTF8)
$currentLine = "Current version: **$display**"

if ($readme -match "(?m)^Current version:\s+\*\*.*?\*\*\s*$") {
  $readme = [regex]::Replace($readme, "(?m)^Current version:\s+\*\*.*?\*\*\s*$", $currentLine, 1)
} else {
  $readme = [regex]::Replace($readme, "(?m)^(# .+)$", "`$1`n`n$currentLine", 1)
}

$versionHeadingPattern = "(?m)^###\s+$([regex]::Escape($Version))\b"
if ($readme -notmatch $versionHeadingPattern) {
  $titleText = if ($Title.Trim().Length -gt 0) { $Title.Trim() } else { "TODO" }
  $newSection = @"
### ${Version}: $titleText

- TODO: summarize this version before release.

"@
  $readme = [regex]::Replace($readme, "(?m)^## What's New\s*$", "## What's New`n`n$newSection", 1)
}

[System.IO.File]::WriteAllText($readmeFullPath, $readme, $utf8NoBom)

Write-Host "Updated VERSION and README.md to $display"
Write-Host "Next: review README.md, then commit on a codex/$Version-* branch."
