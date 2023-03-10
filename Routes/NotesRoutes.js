const express = require("express");
const { authenticate } = require("../Middlewares/authenticate");
const { NoteModel } = require("../Models/NotesModel");
const NotesRouter = express.Router();
const jswt = require("jsonwebtoken");
const cors=require("cors")

NotesRouter.use(express.json());
NotesRouter.use(authenticate);
NotesRouter.use(cors());

NotesRouter.post("/notes", async (req, res) => {
  try {
    let newNote = new NoteModel(req.body);
    await newNote.save();
    res.send({msg:"Notes Added succesfully"});
  } catch (error) {
    res.send("error ");
  }
});
NotesRouter.get("/notes", async (req, res) => {
  const { userId } = req.body;
  try {
    let data = await NoteModel.find({ userId: userId });
    res.send(data);
  } catch (error) {
    res.send({msg:"Error whole"});
  }
});
NotesRouter.delete("/notes/:id", async (req, res) => {
  try {
    await NoteModel.findByIdAndDelete({ _id: req.params.id });
    res.send("Delete Suceesfully");
  } catch (error) {
    res.send({msg:"Error whole"});
  }
});
NotesRouter.patch("/notes/:id", async (req, res) => {
  const item = req.body;
  console.log(item);
  const p = req.params.id;
  try {
    await NoteModel.findByIdAndUpdate(p, item);

    res.send({msg:"Update  Suceesfully"});
  } catch (error) {
    res.send({msg:"Error whole"});
  }
});



module.exports = { NotesRouter };
