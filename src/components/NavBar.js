import React from 'react'
import './NavBar.css'
// import Logo from '../images/airbnb-logo.png'


/* Building Navbar component*/


export default function NavBar() {
  return (
      <div>
          
          <nav className='nav-logo'>
              <img src='../images/airbnb-logo.png' alt="Logo" className='nav-logo-image'/>
          </nav>
    </div>
  )
}
