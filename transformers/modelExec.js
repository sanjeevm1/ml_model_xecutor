
const { getTextGenModel } = require("./models") 

const generateText = async (text)=>{
      
    var model = await getTextGenModel();
    return await model(text)
}

module.exports={
    generateText:generateText
}