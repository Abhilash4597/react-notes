import React from 'react'

export default function ImageShow({image}) {
  return (
    <div>
      {console.log(image)}
      <p>{image.alt_description}</p>
      <img src={image.urls.full} alt={image.alt_description} />
    </div>
  )
}
