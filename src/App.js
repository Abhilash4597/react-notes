// * PRACTICED JSX 

// import React from 'react'
// import 'bulma/css/bulma.css'
// import ProfileCard from './ProfileCard'
// import AlexaImage from './images/alexa.png'
// import CortanaImage from './images/cortana.png'
// import SiriImage from './images/siri.png'

// export default function App() {
//   return (
//     <>
//       <section class="hero is-primary">
//         <div class="hero-body">
//           <p class="title">
//             Peronal Digital Assistants
//           </p>
//         </div>
//       </section>

//       <div className='container'>
//         <section className='section'>   
//           <div className='columns'>
//             <div className='column is-3'>
//               <ProfileCard title='Alexa' handle='@alexa99' image={AlexaImage} altValue='AlexaImage' description='Alexa was created by Amazon and helps you buy things.' />
//             </div>
//             <div className='column is-3'>
//               <ProfileCard title='Cortana' handle='@cortana32' image={CortanaImage} altValue='CortanaImage' description='Cortana was made by Microsoft. Who knows what it does?' />
//             </div>
//             <div className='column is-3'>
//               <ProfileCard title='Siri' handle='@siri01' image={SiriImage} altValue='SiriImage' description='Siri was made by Apple and is being phased out' />
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   )
// }




// * SMALL ANIMAL PROJECT

import React from 'react'
import { useState } from 'react';
import AnimalShow from './Animal-Component/AnimalShow'
import birdImage from './Animal-Component/Images/bird.svg'
import catImage from './Animal-Component/Images/cat.svg'
import cowImage from './Animal-Component/Images/cow.svg'
import dogImage from './Animal-Component/Images/dog.svg'
import gatorImage from './Animal-Component/Images/gator.svg'
import horseImage from './Animal-Component/Images/horse.svg'


function getRandomAnimals(){
    const animals = [birdImage, catImage, cowImage, dogImage, gatorImage, horseImage];

    return animals[Math.floor(Math.random() * animals.length)]
}

export default function App() {

  const[animals,setAnimals]=useState([])

    const handleClick = ()=>{
        setAnimals([...animals,getRandomAnimals()]);
    }

    const renderAnimals = animals.map((animal,index)=>{
      return <AnimalShow type={animal} key={index} alt={animals} />
    })
    
  return (
    <>
      <button onClick={handleClick}>Add Animal</button> 
      <div>{renderAnimals}</div>
    </>
  )
}
