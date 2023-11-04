
const {app,BrowserWindow} = require("electron")
require("./ipcEvents")

const createWindow = ()=>{

    const window = new BrowserWindow({
        width:800,
        height:500,
        webPreferences:{
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false,
        }
    })

   
    window.loadURL("http://localhost:3000")
}

app.on("ready",createWindow)

app.on("window-all-closed",()=>{
    if(process.platform!=="darwin")app.quit()
})