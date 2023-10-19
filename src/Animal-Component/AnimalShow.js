import React, { useState } from 'react'

export default function AnimalShow() {

    const[animalCount,setAnimalCount]=useState(0)

    const handleClick = ()=>{
        setAnimalCount(animalCount+1)
    }


    return (
        <>
            <button onClick={handleClick}>Add Animal</button>
            <br />
            Animals to show:{animalCount}
        </>
    )
}
