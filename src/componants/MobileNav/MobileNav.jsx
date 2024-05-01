import React from 'react';
import './MobileNav.css'
const MobileNav = ({isOpen, toggleMenu}) => {
  return (
    <>
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}
      onClick={toggleMenu}>
           <div className='mobile-nav-container'>
            <h2 className='logo'></h2>
            <ul>
            <li>
              <a href="#home" className="menu-item" >Home</a>
            </li>
            <li>
              <a href="#experience" className="menu-item"> Experience</a>
            </li>
            <li>
              <a href="#skills" className="menu-item">Skills</a>
            </li>
            <li>
              <a href="#project" className="menu-item">Project</a>
            </li>
        
          </ul>

          </div>
      </div>
    </>
  )
}

export default MobileNav
