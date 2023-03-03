import BookShow from './BookShow';

export default function BookList({books, onDelete, onEdit}) {
    const rendederedBooks = books.map(book => {
        return <BookShow onDelete={onDelete} onEdit={onEdit} key={book.id} book={book} />;
    })
    return <div className='book-list'>{rendederedBooks} </div>
}