@echo off
echo ========================================
echo    Git Push Helper - Zen Bypass
echo ========================================
echo.

REM Check if git is initialized
git status >nul 2>&1
if errorlevel 1 (
    echo [!] Git not initialized. Initializing...
    git init
    echo [+] Git initialized!
    echo.
)

REM Show current status
echo Current changes:
git status --short
echo.

REM Add all files
echo [+] Adding all files...
git add .
echo.

REM Get commit message
set /p message="Enter commit message: "
if "%message%"=="" set message="Update project"

REM Commit
echo.
echo [+] Committing changes...
git commit -m "%message%"
echo.

REM Check if remote exists
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo.
    echo [!] No remote repository configured!
    echo.
    echo Please create a GitHub repository first, then enter the URL:
    echo Example: https://github.com/username/Examples.git
    echo.
    set /p repo="GitHub repo URL: "
    git remote add origin %repo%
    echo [+] Remote added!
    echo.
)

REM Push to GitHub
echo [+] Pushing to GitHub...
git branch -M main
git push -u origin main

if errorlevel 1 (
    echo.
    echo [!] Push failed. Please check:
    echo   1. GitHub repository exists
    echo   2. You have access to the repository
    echo   3. Your credentials are correct
    echo.
) else (
    echo.
    echo ========================================
    echo    Successfully Pushed to GitHub!
    echo ========================================
    echo.
)

pause
