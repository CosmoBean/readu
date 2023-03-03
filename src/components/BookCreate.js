import { useState } from 'react';
export default function BookCreate({createHandler}) {

    const [newBookTitle, setNewBookTitle] = useState('')
    const handleSubmit = (event)=>{
        event.preventDefault();
        createHandler(newBookTitle)
        //clearing the input value after submission
        setNewBookTitle('')
    }
    const handleChange = (event)=>{
        setNewBookTitle(event.target.value)
    }
    return <div className='book-create'> 
        <h3>Add a book!</h3>
        <form onSubmit={handleSubmit}>
            <input className='input' value= {newBookTitle} onChange={handleChange}/>
            <button className='button'>submit</button>
        </form>
    
    </div>
}