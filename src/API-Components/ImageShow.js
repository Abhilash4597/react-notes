import React from 'react'

export default function ImageShow({image}) {
  return (
    <div>
      <p>{image.alt_description}</p>
      <img src={image.urls.regular} alt={image.alt_description} />
    </div>
  )
}
