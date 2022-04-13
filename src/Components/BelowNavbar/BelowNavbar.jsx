import React from 'react'
import "./BelowNavbar.css"

const BelowNavbar = () => {
  return (
    <div className="main">
        <div className='floaterDiv'>
            <h2 className="text">
                Hi,<br></br> I am <span className='highlight'>Vishal Singh</span>.
                <div className="mask">
                    <span data-show>Full-stack developer.</span>
                    <span>MERN stack developer.</span>
                    <span>Front-end developer.</span>
                    <span>Back-end developer.</span>
                </div>
            </h2>

            <div className='github'>
                <h3>Connect me</h3>
                <div>
                  <a href='https://github.com/Vishalrj750'><img src="github.png" alt='Github_icon'></img></a>
                </div>
                <div>
                  <a href='https://www.linkedin.com/in/vishal-singh-a9b811190/'><img src="linkedin.png" alt='Linkedin_icon'></img></a>
                </div>
                {/* <div>
                  <a href='https://twitter.com/ManishK62653031'><img src="twitter.png" alt='Twitter_icon'></img></a>
                </div> */}
            </div>

            <div className='email'>
              <div className='emailDiv'><img src='Email.png' alt='email_logo'></img><div>Email me</div></div>
              <a href='resume.pdf' target={'_blank'}><button className='downloadDiv'>Resume</button></a>
            </div>
        </div>
        <div className='myProfile'>
            <img src="vishal.png" alt="my_profile" />
        </div>
    </div>
  )
}

setInterval(function () {
    const show = document.querySelector('span[data-show]')
    const next = show.nextElementSibling || document.querySelector('span:first-child')
    const up = document.querySelector('span[data-up]')
    
    if (up) {
      up.removeAttribute('data-up')
    }
    
    show.removeAttribute('data-show')
    show.setAttribute('data-up', '')
    
    next.setAttribute('data-show', '')
  }, 3000)

export default BelowNavbar;
