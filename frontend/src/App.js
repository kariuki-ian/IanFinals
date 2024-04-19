import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BookList from './Components/bookList';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import AddBook from './Components/addBook';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<BookList/>} />
       <Route path='/create-book' element={<AddBook/>}/>
      </Routes>
      
      </BrowserRouter>
    
      
    </div>
  );
}

export default App;
