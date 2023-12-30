import React from 'react'
import BookShow from './BookShow'
// import { useContext } from 'react'
// import BooksContext from '../Context/books'

export default function BookList({books,onDelete,onEdit}) {
  //* Practicing the Createcontext
  // const {count, incrementCount} = useContext(BooksContext);
  //* Practicing the Createcontext
  const renderedBooks = books.map((book)=>{
    return <BookShow book={book} key={book.id} onDelete={onDelete} onEdit={onEdit} />
  })
  return (
    /*     
    //* Practicing the Createcontext
    {count}
    <button onClick={incrementCount}>Click</button> 
    //* Practicing the Createcontext
    */
  <div>
      <div className='book-list'>
        {renderedBooks}
      </div>
    </div>
  )
}
