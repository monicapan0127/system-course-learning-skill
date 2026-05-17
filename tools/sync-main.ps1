param(
  [string]$Remote = "origin",
  [switch]$RebaseCurrent
)

$ErrorActionPreference = "Stop"

function Run-Git {
  param([Parameter(ValueFromRemainingArguments = $true)][string[]]$GitArgs)
  & git @GitArgs
  if ($LASTEXITCODE -ne 0) {
    throw "git $($GitArgs -join ' ') failed"
  }
}

$repoRoot = (& git rev-parse --show-toplevel).Trim()
if ($LASTEXITCODE -ne 0) {
  throw "Not inside a git repository."
}
Set-Location $repoRoot

$current = (& git branch --show-current).Trim()
$dirty = @(& git status --porcelain)

Run-Git fetch $Remote

if ($current -eq "main") {
  if ($dirty.Count -gt 0) {
    throw "You are on main with local changes. Commit/stash first, then rerun."
  }
  Run-Git merge --ff-only "$Remote/main"
} else {
  Run-Git branch -f main "$Remote/main"
}

if ($RebaseCurrent -and $current -ne "main") {
  if ($dirty.Count -gt 0) {
    throw "Current branch has local changes. Commit/stash before rebasing."
  }
  Run-Git rebase "$Remote/main"
}

Write-Host "Local main is aligned to $Remote/main."
if ($RebaseCurrent -and $current -ne "main") {
  Write-Host "$current has been rebased onto $Remote/main."
} elseif ($current -ne "main") {
  Write-Host "Current branch $current was not rebased. Rerun with -RebaseCurrent when ready."
}
