import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const BookList = () => {
    const [books, setBooks] = useState([]);

    const BookCard = ({ book, deleteBook }) => {
        return (
            <div className="card-container">
                <img
                    src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
                    alt="Books"
                    height="200"
                />
                <div className="desc">
                    <h2><a href="/show-book/123id">{book.title}</a></h2>
                    <h3>{book.author}</h3>
                    <p>{book.description} <button onClick={() => {
          deleteBook(book._id);
        }}>X</button></p>
                </div>
               
            </div>
        );

    }

    const deleteBook = (id) => {
        axios
            .delete('https://ian-finals-zzip-dms42wxtu-ian-kariukis-projects.vercel.app/' + id)
            .then((response) => {
                console.log(response.data);
            });

        setBooks(books.filter((el) => el._id !== id));
    };


    useEffect(() => {
        axios
            .get('https://ian-finals-zzip-dms42wxtu-ian-kariukis-projects.vercel.app/')
            .then((res) => {
                setBooks(res.data);
            })
            .catch((err) => {
                console.log('Error from BookList');
            });
    }, []);

    const bookList =
        books.length === 0
            ? 'there is no book record!'
            : books.map((book, k) => <BookCard book={book} key={k}  deleteBook={deleteBook}/>);

    return (
        <div className='BookList'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <br />
                        <h2 className='display-4 text-center'>Books List</h2>
                        <h3 className='text-center'>{books.length}</h3>
                    </div>

                    <div className='col-md-11'>
                        <Link
                            to='/create-book'
                            className='btn btn-info float-right'
                        >
                            + Add New Book
                        </Link>
                        <br />
                        <br />
                        <hr />
                    </div>

                </div>

                <div className='list'>{bookList}</div>
            </div>
        </div>
    );
}

export default BookList;
