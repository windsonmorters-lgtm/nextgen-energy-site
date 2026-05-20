# Push NextGen site to your GitHub profile
# Run once in PowerShell:  .\push-to-github.ps1

$env:Path = "C:\Program Files\Git\cmd;C:\Program Files\GitHub CLI;C:\Program Files\nodejs;" + $env:Path

Set-Location $PSScriptRoot

Write-Host "Checking GitHub login..." -ForegroundColor Cyan
gh auth status 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "`nLog in to GitHub (browser will open):" -ForegroundColor Yellow
    gh auth login -h github.com -p https -w
}

$repoName = "nextgen-energy-site"
Write-Host "`nCreating public repo: $repoName" -ForegroundColor Cyan
gh repo create $repoName --public --source=. --remote=origin --push --description "NextGen - lithium battery company website (React + Node.js)"

if ($LASTEXITCODE -eq 0) {
    gh repo view --web
    Write-Host "`nDone! Repository pushed to your GitHub profile." -ForegroundColor Green
} else {
    Write-Host "`nIf the repo already exists, try:" -ForegroundColor Yellow
    Write-Host "  git remote add origin https://github.com/YOUR_USERNAME/$repoName.git"
    Write-Host "  git branch -M main"
    Write-Host "  git push -u origin main"
}
