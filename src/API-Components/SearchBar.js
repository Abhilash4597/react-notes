import React, { useState } from 'react'
import './SearchBar.css'

export default function SearchBar({onSubmit}) {

  const [term, setTerm] = useState('');

  const handleFormSubmit = (e)=>{
    e.preventDefault();
    onSubmit(term)
  }

  const handleChange = (e)=>{
    setTerm(e.target.value);
  }


  return (
    <div className='search_bar'>
      <form onSubmit={handleFormSubmit}>
        <label>Search Any Image</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  )
}
