@echo off
setlocal
cd /d "%~dp0"
set "PORT=%~1"
if "%PORT%"=="" set "PORT=8000"

echo Serving Soroush Mesforush website at http://127.0.0.1:%PORT%/
echo Press Ctrl+C to stop the server.
echo.

where py >nul 2>nul
if %errorlevel%==0 (
  py -3 -m http.server %PORT% --bind 127.0.0.1
  goto :done
)

where python >nul 2>nul
if %errorlevel%==0 (
  python -m http.server %PORT% --bind 127.0.0.1
  goto :done
)

echo Python 3 was not found.
echo Install Python 3 from python.org, then run serve.bat again.
pause
exit /b 1

:done
endlocal
