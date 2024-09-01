import React from 'react'
import Header from './Header';
import Footer from './Footer';

const MainLayout = ({children}) => {
  return (
    <div className='layout'>
        <Header />
        <div>{children}</div>
        <Footer />
    </div>
  )
}

export default MainLayout