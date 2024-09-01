import React from 'react'
import MainLayout from '../Layout/MainLayout';
import HomePageBot from './HomePageBot';
import HomePageTop from './HomePageTop';

const HomePage = () => {
  return (
    <MainLayout>
        <div>
            <HomePageTop />
            <HomePageBot />
        </div>
    </MainLayout>
  )
}

export default HomePage