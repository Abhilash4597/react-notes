import React from 'react'

export default function AnimalShow({type}) {

    return (
        <>
            <img src={type} alt={type} />   
        </>
    )
}
