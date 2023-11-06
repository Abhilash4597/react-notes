import React from 'react'

export default function BookShow({book}) {
  return (
    <div className='book-show'>
      <h1>{book.title}</h1>
    </div>
  )
}
