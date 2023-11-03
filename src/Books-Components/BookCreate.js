import React, { useState } from 'react'

export default function BookCreate( {onCreate} ) {

    const [title, setTitle] = useState('');

    const handleChange = (e)=>{
        setTitle(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        onCreate(title)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input value={title} onChange={handleChange} />
        </form>
    </div>
  )
}
