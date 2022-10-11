import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='n-wrapper'>
        <div className="n-left">
            <div className="n-name">
               GS
            </div>
            <span>Togggle</span>
        </div>
        <div className="n-right">
            <div className="n-list">
            <ul >
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Services
                </li>
                <li>
                    Contact
                </li>
            </ul>
            </div>
            
                <button className="button n-button">Login</button>
            
        </div>
      
    </div>
  )
}

export default Navbar
