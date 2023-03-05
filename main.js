const {app, BrowserWindow} = require ('electron')

let ventana;
function createWindow(){
    ventana = new BrowserWindow({
        height: 375,
        width: 400
    }); 
    ventana.loadFile('index.html')
}

app.whenReady().then(createWindow)
