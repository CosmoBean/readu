import { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from './components/BookList';
//import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
function App() {
  const [books, setBooks] = useState([]);

  //fetch books
  const fetchBooks = async()=> {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);

  };
  useEffect(()=>{
    fetchBooks();
  },[])
  
  //editBookFunction
  const editBookById = async(newTitle, bookId)=>{
    const response = await axios.put(`http://localhost:3001/books/${bookId}`,{title:newTitle})
    const updatedBooks = books.map(book => {
      if(book.id===bookId){
        return {...book, ...response.data}
      }
      return book
    })
    setBooks(updatedBooks);
  }

  //deleteBookFunction
  const deleteBookById = async(bookId) => {
    const response = await axios.delete(`http://localhost:3001/books/${bookId}`);
    const updatedBooks1 = books.filter((book) =>{
      return (book.id !== bookId)
    });
    setBooks(updatedBooks1);
  };

  //createBook function
  const createBook= async (bookTitle)=>{
    const response = await axios.post('http://localhost:3001/books',{title:bookTitle});
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
    
  };
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate createHandler={createBook} />
    </div>
  );
}

export default App;
