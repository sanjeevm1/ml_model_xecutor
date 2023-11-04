

const pipeline = null

async ()=>{
    const pipe = await import("@xenova/transformers")
}

const getTextGenModel = async (modelName="gpt2")=>{
    return await pipeline("text-generation",modelName)
}

module.exports={
    getTextGenModel:getTextGenModel
}