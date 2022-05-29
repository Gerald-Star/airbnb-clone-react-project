import React from 'react'
import './NavBar.css'
import Logo from '../images/airbnb-logo.png'


/* Building Navbar component*/


export default function NavBar() {
  return (
      <div>
          
          <nav className='nav-logo'>
              <img src={Logo} alt="Logo" className='nav_logo'/>
          </nav>
    </div>
  )
}
