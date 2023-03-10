import { useState } from 'react';
import BookEdit from './BookEdit';
export default function BookShow({book, onDelete, onEdit}) {
    const [showEdit, setShowEdit] = useState(false);
    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }
    const handleDeleteClick = ()=>{
        onDelete(book.id);
    };
    const handleSubmit = (newTitle, bookId) => {
        onEdit(newTitle, bookId);
        setShowEdit(false);
    }
    let content = <h3>{book.title}</h3>
    if(showEdit){
        content = <BookEdit book={book} onEditSubmit={handleSubmit}/>
    }
    return <div className="book-show"> 
        <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
        {content}
        <div className="actions">
            <button className ='edit' onClick = {handleEditClick}> edit</button>
            <button className= "delete" onClick={handleDeleteClick}>Delete</button>
        </div>
    </div>
}