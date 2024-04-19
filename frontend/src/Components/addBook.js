import React, { useState } from 'react';
import axios from 'axios';
const AddBook = ()=>{
    const [book, setBooks] = useState({});

    const onSubmit = (e) => {
        e.preventDefault();  
    
        axios
          .post('https://ian-finals-zzip-dms42wxtu-ian-kariukis-projects.vercel.app/', book)
          .then((res) => {
            window.location = '/';
          });
      };

  // Handle form input changes
   const handleChange = (e) => {
    setBooks({ ...book, [e.target.name]: e.target.value });
  };

  return(
    <div className="CreateBook">
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <br /><a className="btn btn-info float-left" href="/">Show BooK List</a>
        </div>
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Add Book</h1>
          <p className="lead text-center">Create new book</p>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Title of the Book"
                name="title"
                className="form-control"
                value={book.title || ''}
                onChange={handleChange}
                spellcheck="false"
                data-ms-editor="true"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Author"
                name="author"
                className="form-control"
                value={book.author || ''}
                onChange={handleChange}
                spellcheck="false"
                data-ms-editor="true"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Describe this book"
                name="description"
                className="form-control"
                value={book.description || ''}
                onChange={handleChange}
                spellcheck="false"
                data-ms-editor="true"
              />
            </div>
            <input type="submit" className="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
  );

    
};

export default AddBook;
