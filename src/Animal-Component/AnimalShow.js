import React, { useState } from 'react'
import bird from './Images/bird.svg'
import cat from './Images/cat.svg'
import cow from './Images/cow.svg'
import dog from './Images/dog.svg'
import gator from './Images/gator.svg'
import heart from './Images/heart.svg'
import horse from './Images/horse.svg'


export default function AnimalShow({ type }) {

    const [clicks,setClicks] = useState(0);

    const svgObj = {
        bird,
        cat,
        cow,
        dog,
        gator,
        horse,
    }

    function handleClick(){
        setClicks(clicks+1);
    }

    return (
        <>
            <div onClick={handleClick}>
                <img src={svgObj[type]} alt="animals" /> 
                <img src={heart} alt='heart' style={{width: 10 + 10 * clicks + 'px'}} />
            </div>
        </>
    )
}
