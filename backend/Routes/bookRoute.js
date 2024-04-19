//Get the Model
let Books = require("../Models/bookModel");
const router = require('express').Router();

//Get all books
router.route("/")
    .get((req,res)=>{
        Books.find()
        .then((books)=> res.status(200).json(books))
        .catch((err)=> res.status(400).json("Error" +err));

    });

//Get a single book by Id
router.route("/:id")
.get((req,res)=>{
    let id =req.params.id
    Books.findById(id)
    .then((book)=> res.json(book))
    .catch((err)=> res.status(400).json("Error"+err));
});

//Add or Save a Book
router.route("/")
.post(async(req,res)=>{
    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;

    let newBook = await new Books({
       title,
       author,
       description
    });   
    console.log(title);

    console.log(newBook);
     newBook.save()
     .then(()=> res.status(200).json("Book Added"))
     .catch((err)=> res.status(400).json("Error:"+ err));
    
});

//Update a book by Id
router.route('/:id')
.put(async (req,res)=>{
   await Books.findById(req.params.id)
    .then((bookToEdit)=>{       
        bookToEdit.title = req.body.title;
        bookToEdit.author = req.body.author;
        bookToEdit.description = req.body.description; 

        bookToEdit.save()
        .then(()=> res.status(200).json("Book updated"))
        .catch((err)=>res.status(400).json("Error 123"+err));
    })
    .catch((err)=> res.status(400).json("Error345"+ err));    
});

//Delete book by id
router.route("/:id")
.delete((req,res)=>{
    Books.findByIdAndDelete(req.params.id)
    .then(()=>res.json("Deleted Book"))
    .catch((err)=> res.status(400).json("Error"+ err))
});

module.exports = router;