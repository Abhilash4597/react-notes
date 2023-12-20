import React from 'react'
import BookShow from './BookShow'
import { useContext } from 'react'
import BooksContext from '../Context/books'

export default function BookList({books,onDelete,onEdit}) {

  const value = useContext(BooksContext);

  const renderedBooks = books.map((book)=>{
    return <BookShow book={book} key={book.id} onDelete={onDelete} onEdit={onEdit} />
  })
  return (
    <div className='book-list'>
      {value}
      {renderedBooks}
      </div>
  )
}
