import React from 'react'

export default function SearchBar({onSubmit}) {

  const handleClick = ()=>{
    onSubmit('hello')
  }

  return (
    <div>
      <input></input>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}
