import { useState } from 'react';

export default function BookEdit({book, onEditSubmit}) {
    const [value, setValue] = useState(book.title);
    const handleSubmit = (event) => {
        event.preventDefault();
        onEditSubmit(value, book.id)
    };
    const handleChange = (event) => {
        setValue(event.target.value)
    }
    return <div>
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>title</label>
            <input  value={value} onChange={handleChange}/>
            <button className="button is-primary">
                save
            </button>

        </form>
    </div>;
}