const express = require("express");
const bcrypt = require("bcrypt");
const { UserModel } = require("../Models/UserModel");
const jswt=require("jsonwebtoken")
const UserRouter = express.Router();

UserRouter.use(express.json());

UserRouter.post("/register", async (req, res) => {
  const { password, name, email, age } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        res.send("Some thing Went Wrong");
      } else {
        let newUser = new UserModel({ name, email, password: hash, age });
        await newUser.save();
        res.send("User Registered Succesfully");
      }
      // {"name":"Hanumat","age":19,"password":"Hanumat@123","email":"hanumat071@gmail.com"}
    });
  } catch (error) {
    res.send({ msg: "Some thing Went Wrong", error });
  }
});

UserRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user=await UserModel.find({email})
    if(user.length>0){
        bcrypt.compare(password,user[0].password,async(error,result)=>{
            if(result==true){
                const token=jswt.sign({user:user[0]},"hanumat")
                res.send({msg:"User login Success",token:token})
            }else{
                res.send("error ")
            }
        })
    }else{
        res.send("User Not Found")
    }
   
  } catch (error) {
    res.send("error ", error);
  }
});

module.exports = { UserRouter };
