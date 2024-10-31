import  { useState } from 'react';
import Logo from '../../images/logo-icon.png';
import { RiMenu3Fill } from 'react-icons/ri';
import { MdCancel } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const handleClick = () => {
    setShowNav(!showNav);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="flex items-center justify-between p-4">
        <img src={Logo} alt="Company Name" className="h-10" />
        <div className="flex-1 flex justify-center">
          <ul className="hidden md:flex space-x-10">
            <li>
              <NavLink 
                exact 
                to="/" 
                className={({ isActive }) => 
                  `py-2 text-gray-700 hover:bg-transparent rounded ${isActive ? 'font-bold' : ''}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/Services" 
                className={({ isActive }) => 
                  `py-2 text-gray-700 hover:bg-transparent rounded ${isActive ? 'font-bold' : ''}`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/HelpCenter" 
                className={({ isActive }) => 
                  `py-2 text-gray-700 hover:bg-transparent rounded ${isActive ? 'font-bold' : ''}`
                }
              >
                Help Center
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/MeetOurTeam" 
                className={({ isActive }) => 
                  `py-2 text-gray-700 hover:bg-transparent rounded ${isActive ? 'font-bold' : ''}`
                }
              >
                Meet Our Team
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <NavLink 
            to="/LogIn" 
            className={({ isActive }) => 
              `py-2 px-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200 ${isActive ? 'font-bold' : ''}`
            }
          >
            Sign Up/Log In
          </NavLink>
        </div>
        <RiMenu3Fill className="text-2xl cursor-pointer md:hidden" onClick={handleClick} />
      </div>

      {/* Sidebar Navigation for Mobile */}
      <nav>
        <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out transform ${showNav ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-4">
            <MdCancel className="text-2xl cursor-pointer mb-4" onClick={handleClick} />
            <ul className="flex flex-col space-y-6">
              <li>
                <NavLink 
                  exact 
                  to="/" 
                  className={({ isActive }) => 
                    `py-2 text-gray-700 hover:bg-transparent rounded ${isActive ? 'font-bold' : ''}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/Services" 
                  className={({ isActive }) => 
                    `py-2 text-gray-700 hover:bg-transparent rounded ${isActive ? 'font-bold' : ''}`
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/HelpCenter" 
                  className={({ isActive }) => 
                    `py-2 text-gray-700 hover:bg-transparent rounded ${isActive ? 'font-bold' : ''}`
                  }
                >
                  Help Center
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/MeetOurTeam" 
                  className={({ isActive }) => 
                    `py-2 text-gray-700 hover:bg-transparent rounded ${isActive ? 'font-bold' : ''}`
                  }
                >
                  Meet Our Team
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/LogIn" 
                  className={({ isActive }) => 
                    `py-2 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 transition duration-200 ${isActive ? 'font-bold' : ''}`
                  }
                >
                  Sign Up/Log In
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
