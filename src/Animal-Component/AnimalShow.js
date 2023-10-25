import React from 'react'
import bird from './Images/bird.svg'
import cat from './Images/cat.svg'
import cow from './Images/cow.svg'
import dog from './Images/dog.svg'
import gator from './Images/gator.svg'
import heart from './Images/heart.svg'
import horse from './Images/horse.svg'


export default function AnimalShow({ type }) {

    const svgObj = {
        bird,
        cat,
        cow,
        dog,
        gator,
        horse,
    }

    return (
        <>
            <img src={svgObj[type]} alt="animals" />  
        </>
    )
}
