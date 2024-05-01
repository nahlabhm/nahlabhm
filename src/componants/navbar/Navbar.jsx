import React, { useState } from 'react';
import './Navbar.css';
import { FiAlignCenter } from "react-icons/fi";
import MobileNav from '../MobileNav/MobileNav';
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [openMenu , setOpenMenu] = useState(false);

  const toggleMenu =() =>{
    setOpenMenu(!openMenu);
  }
  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className='nav-content'>
            <h2 className='logo'>MyPortfolio.</h2>
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

          <button className="menu-btn" onClick={toggleMenu}>
            <span className="custom-icon"> {/* Ajout de la classe custom-icon */}
             {openMenu ? <MdOutlineClose /> : <FiAlignCenter />}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;