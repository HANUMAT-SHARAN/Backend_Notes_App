const mongoose = require("mongoose");

const connection = mongoose.connect(
  `mongodb+srv://hanumat:hanumat@cluster0.gfxecfo.mongodb.net/notesapp?retryWrites=true&w=majority`
);
module.exports={connection}