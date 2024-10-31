import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Services from './Components/Services/ServicesMain';
import HelpCenter from './Components/HelpCenter/HelpCenterMain';
import MeetOurTeam from './Components/MeetOurTeam/MeetOurTeamMain';
import Profile from './Components/Profiles';
import './app.css'


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/services" element={<Services />} />
        <Route path="/HelpCenter" element={<HelpCenter />} />
        <Route path='/MeetOurTeam' element={<MeetOurTeam />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
