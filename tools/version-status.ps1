param(
  [switch]$Fetch,
  [switch]$CheckRemote
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

$repoRoot = (Run-Git rev-parse --show-toplevel | Select-Object -First 1).Trim()
Set-Location $repoRoot

if ($Fetch) {
  Run-Git fetch origin | Out-Null
}

$branch = (Run-Git branch --show-current | Select-Object -First 1).Trim()
$head = (Run-Git rev-parse --short HEAD | Select-Object -First 1).Trim()
$version = if (Test-Path -LiteralPath "VERSION") {
  (Get-Content -LiteralPath "VERSION" -TotalCount 1).Trim()
} else {
  "(missing VERSION file)"
}

$readmeVersion = "(missing README current version)"
if (Test-Path -LiteralPath "README.md") {
  $line = Get-Content -LiteralPath "README.md" | Where-Object { $_ -match "^Current version:" } | Select-Object -First 1
  if ($line) {
    $readmeVersion = $line.Trim()
  }
}

$main = (Run-Git rev-parse --short main | Select-Object -First 1).Trim()
$originMain = (Run-Git rev-parse --short origin/main | Select-Object -First 1).Trim()
$counts = (Run-Git rev-list --left-right --count origin/main...HEAD | Select-Object -First 1).Trim() -split "\s+"
$behind = $counts[0]
$ahead = $counts[1]
$dirty = @(Run-Git status --porcelain)

$remoteMain = "(not checked)"
if ($CheckRemote) {
  try {
    $remoteLine = & git ls-remote origin refs/heads/main
    if ($LASTEXITCODE -eq 0 -and $remoteLine) {
      $remoteMain = (($remoteLine -split "\s+")[0]).Substring(0, 7)
    } else {
      $remoteMain = "(unavailable)"
    }
  } catch {
    $remoteMain = "(unavailable)"
  }
}

Write-Host "Version status"
Write-Host "--------------"
Write-Host "Repo:          $repoRoot"
Write-Host "VERSION:       $version"
Write-Host "README:        $readmeVersion"
Write-Host "Current:       $branch @ $head"
Write-Host "Local main:    $main"
Write-Host "origin/main:   $originMain"
Write-Host "GitHub main:   $remoteMain"
Write-Host "Ahead/behind:  ahead $ahead, behind $behind vs origin/main"
Write-Host "Dirty files:   $($dirty.Count)"

if ($dirty.Count -gt 0) {
  Write-Host ""
  $dirty | ForEach-Object { Write-Host "  $_" }
}

Write-Host ""
if ($branch -eq "main") {
  Write-Host "Rule: main is the official local branch. Edit on a codex/vX.Y-* branch, not main."
} else {
  Write-Host "Rule: this is a draft/release branch. Rebase it on origin/main before pushing a PR."
}
