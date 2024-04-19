const mongoose = require("mongoose");

//Define Schema Class
const bookSchema = mongoose.Schema({    
    title: { type: String, required: true },
    author: { type: String, required: true },   
    description: { type: String}
});

const Books = mongoose.model("bookrecords",bookSchema);
module.exports = Books;