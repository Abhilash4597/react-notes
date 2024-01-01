import React, { useState , useContext  } from 'react'
import BooksContext from '../Context/books';

export default function BookCreate() {

    const { createBook } = useContext(BooksContext)

    const [title, setTitle] = useState('');

    const handleChange = (e)=>{
        setTitle(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        createBook(title)
        setTitle('')
    }

  return (
    <div className='book-create'>
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input value={title} className='input' onChange={handleChange} />
            <button className='button'>Create</button>
        </form>
    </div>
  )
}
