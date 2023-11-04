
const { ipcMain } = require("electron")
const { generateText } = require("./transformers/modelExec")

ipcMain.on("gen_text",async (event,req)=>{
    console.log(req)
    var data = await generateText(req.text)
    event.sender.send("gen_text_success",{text:data})
    
})