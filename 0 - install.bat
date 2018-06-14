

cls
@echo off
@echo ========================================================================================================
@echo             Setting up the project, this might take awhile.
@echo  (if npm is not found, make sure you install nodejs: https://nodejs.org) 
@echo =========================================================================================================

REM # clean compontents folder
call rmdir "./node_modules" /s /q
call rmdir "./bower_components" /s /q

SET LOCK="0 - install.lock"

if exist %LOCK% (
    echo installation is currently running
    GOTO :EXIT
)

(echo lock file while "0 - install.bat" is running) > %LOCK%

if /i [%1]==[] GOTO :INSTALL
if /i [%1]==[i] GOTO :INSTALL
if /i [%1]==[g] GOTO :GENERATORS

:INSTALL
    @echo install
    @echo - npm
    if not exist %APPDATA%\npm\gulp (
        call npm install gulp
        call npm install -g gulp
    )
    
    call npm set progress=false
    call npm -s install
    call npm set progress=true

    GOTO :DONE
    
:DONE
    del /q %LOCK% >nul 2>&1
    @echo done!
    
:EXIT