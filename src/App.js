import React from 'react'
import 'bulma/css/bulma.css'
import ProfileCard from './ProfileCard'
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

function App() {
  return (
    <>
      <div>Peronal Digital Assistants</div>

      <ProfileCard title='Alexa' handle='@alexa99' image={AlexaImage} altValue='AlexaImage' />
      <ProfileCard title='Cortana' handle='@cortana32' image={CortanaImage} altValue='CortanaImage' />
      <ProfileCard title='Siri' handle='@siri01' image={SiriImage} altValue='SiriImage' />
    </>
  )
}

export default App