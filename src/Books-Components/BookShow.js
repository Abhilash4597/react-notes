import React, { useState , useContext  } from 'react';
import BookEdit from './BookEdit'
import BooksContext from '../Context/books';


export default function BookShow() {

  const { books , editBookById , deleteBookById } = useContext(BooksContext)

  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = ()=>{
    deleteBookById(books.id);
  }

  const handleEditClick = ()=>{
    setShowEdit(!showEdit);
  }

  const handleSubmit = (id,newTitle)=>{
    setShowEdit(false);
    editBookById(id,newTitle)
  }

  let content = <h3>{books.title}</h3>

  if(showEdit){
    content = <BookEdit book={books} onSubmit={handleSubmit} />
  }

  return (
    <div className='book-show'>
      <img src={`https://picsum.photos/seed/${books.id}300/200`} alt='Books' />
      <div>{content}</div>
      <div className='actions'>
        <button className='edit' onClick={handleEditClick}>Edit</button>
        <button className='delete' onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  )
}
