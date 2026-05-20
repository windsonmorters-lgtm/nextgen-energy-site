@echo off
REM Energy Products - Installation Script
REM This script installs dependencies for both frontend and backend

echo.
echo ========================================
echo Energy Products - Dependency Installer
echo ========================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    echo Then run this script again.
    pause
    exit /b 1
)

echo Node.js is installed: 
node --version

echo.
echo Installing frontend dependencies...
cd frontend
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Frontend installation failed!
    pause
    exit /b 1
)
cd ..

echo.
echo Installing backend dependencies...
cd backend
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Backend installation failed!
    pause
    exit /b 1
)
cd ..

echo.
echo ========================================
echo Installation Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Open two PowerShell windows
echo 2. In window 1: cd frontend && npm run dev
echo 3. In window 2: cd backend && npm run dev
echo.
echo Frontend: http://localhost:5173
echo Backend: http://localhost:5000
echo.
pause
