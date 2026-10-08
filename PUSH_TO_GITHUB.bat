@echo off
echo ========================================
echo    Pushing to GitHub - Evo Bypass
echo ========================================
echo.

REM Initialize git if needed
git status >nul 2>&1
if errorlevel 1 (
    echo [+] Initializing Git...
    git init
    echo.
)

REM Configure git (update with your details)
echo [+] Configuring Git...
git config user.name "akatsukixpain12-stack"
git config user.email "your-email@example.com"
echo.

REM Add all files
echo [+] Adding all files...
git add .
echo.

REM Commit
echo [+] Creating commit...
git commit -m "Complete Evo Bypass: Server + Tools + Green Screen Remover"
echo.

REM Add remote (your GitHub repo)
echo [+] Adding remote repository...
git remote remove origin 2>nul
git remote add origin https://github.com/akatsukixpain12-stack/Evo-Bypass.git
echo.

REM Push to GitHub
echo [+] Pushing to GitHub...
git branch -M main
git push -u origin main --force

if errorlevel 1 (
    echo.
    echo [!] Push failed. You may need to authenticate.
    echo.
    echo Please enter your GitHub credentials when prompted.
    echo Username: akatsukixpain12-stack
    echo Password: Use a Personal Access Token (not your password)
    echo.
    echo Get token from: https://github.com/settings/tokens
    echo.
    pause
    git push -u origin main --force
)

echo.
echo ========================================
echo    Successfully Pushed to GitHub!
echo ========================================
echo.
echo View your repo at:
echo https://github.com/akatsukixpain12-stack/Evo-Bypass
echo.
pause
