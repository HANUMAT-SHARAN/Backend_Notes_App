const mongoose=require("mongoose")

const userModelSchema=mongoose.Schema({
    name:{required:true,type:String},
    email:{required:true,type:String},
    password:{required:true,type:String},
    age:{required:true,type:Number}
})

const UserModel=mongoose.model("user",userModelSchema)


module.exports={UserModel}