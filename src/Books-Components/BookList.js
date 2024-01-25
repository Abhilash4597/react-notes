import React from 'react'
import BookShow from './BookShow'
import { useContext } from 'react'
import BooksContext from '../Context/books'

export default function BookList() {
  const {books} = useContext(BooksContext);

  const renderedBooks = books.map((book)=>{
    return <BookShow book={book} key={book.id} />
  })
  return (
    
  <div>
      <div className='book-list'>
        {renderedBooks}
      </div>
    </div>
  )
}
