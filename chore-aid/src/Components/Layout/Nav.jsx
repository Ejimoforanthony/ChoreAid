"use client";
import React, { useState } from 'react'
import { RiMenu3Fill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { MdCancel} from 'react-icons/md';

function Nav () {
  const [showNav, setShowNav]= useState(false);

  function handleClick() {
    setShowNav(!showNav);
  }

  return (
    <nav className='nav'>
        <ul className={`nav-items ${showNav ? 'active' : ''}`}>
            <li>
              <NavLink 
                 exact 
                 to='/' 
                 className={({ isActive }) => (isActive ? 'active' : '')}
                >
                 Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/Services' activeClassName='active'>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to='/HelpCenter' activeClassName='active'>
                Help Center
              </NavLink>
              </li>
            <li><NavLink to='/MeetOurTeam' activeClassName='active'>
                 Meet Our Team
              </NavLink>
            </li>
            <li className='nav-items-login'>
              <NavLink to='/LogIn'>
                Sign Up/LogIn
              </NavLink>
              </li>
            <MdCancel className='cancel-icon' onClick={handleClick} />
        </ul>
        <RiMenu3Fill className='menu-icon' onClick={handleClick} />
    </nav>
  );
}

export default Nav