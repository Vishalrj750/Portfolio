import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className='contact'>
      <h1>Contact</h1>
      <p>Let's bring new change together. Contact me on any of the platform</p>
      <div className='github2'>
          <div>
            <a href='https://github.com/Vishalrj750' target={'_blank'}><img src="github.png" alt='Github_icon'></img></a>
          </div>
          <div>
            <a href='https://www.linkedin.com/in/vishal-singh-a9b811190/' target={'_blank'}><img src="linkedin.png" alt='Linkedin_icon'></img></a>
          </div>
          {/* <div>
            <a href='https://twitter.com/ManishK62653031'><img src="twitter.png" alt='Twitter_icon'></img></a>
          </div> */}
          <div>
            <a href='https://wa.me/8574031285' target={'_blank'}><img src="whatsapp.png" alt='whatsapp_icon'></img></a>
          </div>
      </div>
    </div>
  )
}

export {Contact}
