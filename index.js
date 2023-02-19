const express = require("express");
const {connection}=require("./Configs/db");
const { NotesRouter } = require("./Routes/NotesRoutes");
const { UserRouter } = require("./Routes/UserRoute");
const cors=require("cors")
require("dotenv").config()

const app = express();
app.use(cors())
app.use(express.json());
app.use("/",UserRouter)
app.use("/",NotesRouter)
app.get("/", (req, res) => {
  res.send("Home Page");
});


app.listen(process.env.port, async() => {
  console.log("Server is Started");
  try {
    await connection
    console.log("Data Base  is connected To the Server");
    
  } catch (error) {
 console.log("error ", error);
    
  }
});
