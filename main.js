const { app, BrowserWindow } = require('electron')

var ventana
function createWindow() {
    ventana = new BrowserWindow({
        width: 700,
        height: 650,
        // webPreferences: {
        //     preload: path.join(app.getAppPath(), 'preload.js')
        // }
    })
    ventana.loadFile('principal.html')
}

app.whenReady().then(createWindow)
