import React from 'react';
import "./Footer.css";
/* eslint-disable jsx-a11y/anchor-is-valid */

const Footer = () => {
  return (
    <div className='footer'>
      <div className='myLogo'>
        <a href='#'><img src="Vishal_singh.gif" alt="my_logo" /></a>
      </div>
      <div className='rights'>
          <h2>© 2022. All Rights Reserved</h2>
      </div>
      <div className='github'>
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
    </div>
  )
}

export {Footer};
