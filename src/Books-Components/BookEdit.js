import React, { useState , useContext } from 'react'
import BooksContext from '../Context/books';


export default function BookEdit() {

  const { books , editBookById } = useContext(BooksContext)

  const [title, setTitle] = useState(books.title);

  const handleChange = (e)=>{
    setTitle(e.target.value);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    editBookById(books.id, title);
  }

  return (
    <form className='book-edit' onSubmit={handleSubmit}>
      <label>Title</label>
      <input className='input' value={title} onChange={handleChange} />
      <button className='button is-primary'>Save</button>
    </form>
  )
}
