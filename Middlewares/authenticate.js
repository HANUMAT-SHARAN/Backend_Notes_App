const jswt=require("jsonwebtoken")

const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  jswt.verify(token,"hanumat",async(error,decoded)=>{
    if(decoded){
        console.log(decoded,"decided ibe")
        req.body.userId=decoded.user._id
        next()
    }else{
        res.send("Login Once Again ")
    }
  })
};

module.exports={authenticate}
// {"title":"i want to learn react native","body":"Soon I will do ti"}
