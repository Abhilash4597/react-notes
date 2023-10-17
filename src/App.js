import React from 'react'
import ProfileCard from './ProfileCard'

function App() {
  return (
    <>
      <div>Peronal Digital Assistants</div>

      <ProfileCard title='Alexa' handle='@alexa99' />
      <ProfileCard title='Cortana' handle='@cortana32' />
      <ProfileCard title='Siri' handle='@siri01' />
    </>
  )
}

export default App