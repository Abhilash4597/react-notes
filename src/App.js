// * PRACTICING JSX 

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

// import React from 'react'
// import { useState } from 'react';
// import AnimalShow from './Animal-Component/AnimalShow'
// import './Animal-Component/App.css'


// function getRandomAnimals(){
//     const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

//     return animals[Math.floor(Math.random() * animals.length)]
// }

// export default function App() {

//   const[animals,setAnimals]=useState([])

//     const handleClick = ()=>{
//         setAnimals([...animals,getRandomAnimals()]);
//     }

//     const renderAnimals = animals.map((animal,index)=>{
//       return <AnimalShow type={animal} key={index} />
//     })
    
//   return (
//     <div className='app'>
//       <button onClick={handleClick}>Add Animal</button> 
//       <div className='animal_list'>{renderAnimals}</div>
//     </div>
//   )
// }



// * USING API IMAGE PROJECT

import React from 'react'
import searchImages from './API-Components/Api'

searchImages()


export default function App() {
  return (
    <>
      <div>App</div>
    </>
  )
}
