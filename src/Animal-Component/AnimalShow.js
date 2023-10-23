import React from 'react'

export default function AnimalShow({type, alt }) {

    return (
        <>
            <img src={type} alt={alt} />  
        </>
    )
}
