@echo off
echo ========================================
echo    Starting EVO Bypass
echo ========================================
echo.

echo [1/2] Starting Backend Server...
start cmd /k "cd server && npm run dev"
timeout /t 3 /nobreak >nul

echo [2/2] Starting Frontend...
start cmd /k "cd frontend && npm run dev"

echo.
echo ========================================
echo    EVO Bypass Started!
echo ========================================
echo.
echo Backend:  http://localhost:3000
echo Frontend: http://localhost:3001
echo.
echo Press any key to exit...
pause >nul
