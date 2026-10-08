@echo off
echo ========================================
echo    Starting EVO Bypass Python Server
echo ========================================
echo.

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Python is not installed!
    echo Please install Python from https://python.org
    pause
    exit /b 1
)

REM Check if virtual environment exists
if not exist "venv" (
    echo [+] Creating virtual environment...
    python -m venv venv
    echo.
)

REM Activate virtual environment
echo [+] Activating virtual environment...
call venv\Scripts\activate.bat

REM Install requirements
echo [+] Installing requirements...
pip install -r requirements.txt --quiet

REM Start server
echo.
echo ========================================
echo    Starting Server...
echo ========================================
echo.
python app.py

pause
