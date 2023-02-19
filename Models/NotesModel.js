const mongoose=require("mongoose")

const noteModelSchema=mongoose.Schema({
    title:{required:true,type:String},
    body:{required:true,type:String},
    userId:{required:true,type:String}
})

const NoteModel=mongoose.model("note",noteModelSchema)


module.exports={NoteModel}