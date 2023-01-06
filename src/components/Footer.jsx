import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <div className='footer'>
      <div>
          <h1>Shortly</h1>
      </div>
      <div className='footer-list'>
       <h1>Features</h1>
       <ul>
           <li>Link Shortening</li>
           <li> Branded Links</li>
           <li>Analytics</li>
       </ul>
      </div>
      <div>
          <h1>Resources</h1>
          <ul>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
          </ul>
      </div>
      <div>
      <h1>Company</h1>
          <ul>
              <li>About</li>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
          </ul>
      </div>
      <div className='icons'>
      <ul className='footer-icons'>
                    <li className='icons'><TwitterIcon/></li>
                    <li className='icons'><InstagramIcon/></li>
                    <li className='icons'><FacebookIcon/></li>
                    <li className='icons'><PinterestIcon/></li>
                </ul>
      </div>
      </div>
    </>
  )
}

export default Footer
