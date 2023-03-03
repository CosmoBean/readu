import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from './components/BookList';
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [books, setBooks] = useState([]);
  
  
  //editBookFunction
  const editBookById = (newTitle, bookId)=>{
    const updatedBooks = books.map(book => {
      if(book.id===bookId){
        return {...book, title:newTitle}
      }
      return book
    })
    setBooks(updatedBooks);
  }

  //deleteBookFunction
  const deleteBookById = (bookId) => {
    const updatedBooks1 = books.filter((book) =>{
      return (book.id !== bookId)
    });
    setBooks(updatedBooks1);
  };

  //createBook function
  const createBook= (title)=>{
    const updatedBooks = [
      ...books, 
      {
      id: uuidv4(),
      title,
      }
      ]
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
