import React from 'react'
import { useState } from 'react'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'
import { BiAlignRight } from 'react-icons/bi'
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }
  console.log(isOpen)

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} alt='sitelogo' />
          </Link>
          <button className='nav-btn' type='btn' onClick={toggleNavbar}>
            <BiAlignRight className='nav-icon' />
          </button>
        </div>
        <ul className={isOpen ? 'nav-links show-nav' : 'nav-links'}>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/rooms'>Rooms</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
