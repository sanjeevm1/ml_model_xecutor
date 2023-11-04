
const { ipcRenderer } = window.require("electron")

export const generateText = async (text)=>{
     
    ipcRenderer.send("gen_text",{text:text})

    return new Promise((resolve,reject)=>{

        ipcRenderer.on("gen_text_success",(event,resp)=>{
             resolve(resp.text)
        })

        ipcRenderer.on("gen_text_failure",(event,resp)=>{
            reject(resp.text)
       })
    })
}
