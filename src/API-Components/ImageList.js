import React from 'react'
import ImageShow from './ImageShow'
import './ImageList.css'

export default function ImageList({images}) {

  const renderedImage = images.map((img)=>{
    return <ImageShow image={img} key={img.id}/>
  })
  
  return (
    <div className='image_list'>
      {renderedImage}
    </div>
  )
}
