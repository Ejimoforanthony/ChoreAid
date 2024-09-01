import React from 'react';
import HomePage from './Components/HomePage/HomePage';
import './sass/styles.css'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Services from './Components/Services/ServicesMain';
import HelpCenter from './Components/Help Center/HelpCenterMain';
import MeetOurTeam from './Components/Meet Our Team/MeetOurTeamMain';


const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/HomePage' element={<HomePage/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/HelpCenter" element={<HelpCenter />} />
        <Route path='/MeetOurTeam' element={<MeetOurTeam />}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App