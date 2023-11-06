import React from 'react'
import BookShow from './BookShow'

export default function BookList({books}) {
  const renderedBooks = books.map((book)=>{
    return <BookShow book={book} key={book.id}/>
  })
  return (
    <div className='book-list'>{renderedBooks}</div>
  )
}
