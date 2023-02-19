const express = require("express");
const {connection}=require("./Configs/db");
const { NotesRouter } = require("./Routes/NotesRoutes");
const { UserRouter } = require("./Routes/UserRoute");

const app = express();
app.use(express.json());
app.use("/",UserRouter)
app.use("/",NotesRouter)
app.get("/", (req, res) => {
  res.send("Home Page");
});


app.listen(8080, async() => {
  console.log("Server is Started");
  try {
    await connection
    console.log("Data Base  is connected To the Server");
    
  } catch (error) {
 console.log("error ", error);
    
  }
});