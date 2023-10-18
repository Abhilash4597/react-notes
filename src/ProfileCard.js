import React from 'react'

export default function ProfileCard({title,handle,image,altValue}) {
  return (
    <>
        <img src={image} alt={altValue} />
        <div>Title is {title}</div>
        <div>Handle is {handle}</div>
    </>
  )
}
