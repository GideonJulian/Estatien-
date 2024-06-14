import React from 'react'
import "../css/Navbar.css"
import logoIcon from '../assets/fave.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <div id='nav-section'>
     <div className='nav-container'>
        <div className="logo">
            <img src={logoIcon} alt="" />
            <h3>Estatien</h3>
        </div>
        <ul className='nav-links'>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/about'}>About</Link>
            </li>
            <li>
                <Link>Properties</Link>
            </li>
            <li>
                <Link>Services</Link>
            </li>
        </ul>
        <button className="navBtn">Contact us</button>
    </div>
   </div>
  )
}

export default Navbar