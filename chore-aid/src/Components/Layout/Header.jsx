import React from 'react'
import Nav from './Nav';

const Header = () => {
  return (
    <header className='header'>
        <h1 className='header-title'><a href='./' target='self'>ChoreAid</a></h1>
        <Nav />
    </header>
  )
}

export default Header