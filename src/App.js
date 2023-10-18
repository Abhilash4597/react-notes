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

      <div className='container'>
        <section className='section'>   
          <div className='columns'>
            <div className='column is-3'>
              <ProfileCard title='Alexa' handle='@alexa99' image={AlexaImage} altValue='AlexaImage' />
            </div>
            <div className='column is-3'>
              <ProfileCard title='Cortana' handle='@cortana32' image={CortanaImage} altValue='CortanaImage' />
            </div>
            <div className='column is-3'>
              <ProfileCard title='Siri' handle='@siri01' image={SiriImage} altValue='SiriImage' />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App