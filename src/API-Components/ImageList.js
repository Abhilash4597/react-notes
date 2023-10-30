import React from 'react'
import ImageShow from './ImageShow'

export default function ImageList({images}) {

  const renderedImage = images.map((img)=>{
    return <ImageShow image={img} key={img.id}/>
  })
  return (
    <div>
      {renderedImage}
    </div>
  )
}
