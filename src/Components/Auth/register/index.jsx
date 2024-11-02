import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../../images/register_placeholder.png';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState({ month: '', day: '', year: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      
      {/* Form Section */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-4 bg-gray-50">
        
        {/* Header Text with Image */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-6 md:ml-8">
          <div className="flex items-center space-x-4 mb-4">
            {/* Adjusted to place the header and image in a flex container */}
            <h2 className="md:text-3xl text-2xl font-bold">Create An Account!!!</h2>
            <img
              src={Image}
              alt="User Placeholder"
              className="w-16 h-16 md:hidden rounded-full border-2 border-gray-200"
            />
          </div>
          <div className="flex items-center ">
            {/* Move the paragraph below the image and header */}
            <p className="mt-2 text-center">ChoreAid helps you source trusted workers!</p>
          </div>
        </div>

        {/* Form */}
        <div className="w-full max-w-[32rem] md:ml-8">
          <form onSubmit={handleSubmit} className="p-4">
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-semibold">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-semibold">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Date of Birth:</label>
              <div className="flex space-x-2 mt-2">
                <input
                  type="text"
                  placeholder="Month"
                  value={dob.month}
                  onChange={(e) => setDob({ ...dob, month: e.target.value })}
                  className="w-1/3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Day"
                  value={dob.day}
                  onChange={(e) => setDob({ ...dob, day: e.target.value })}
                  className="w-1/3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Year"
                  value={dob.year}
                  onChange={(e) => setDob({ ...dob, year: e.target.value })}
                  className="w-1/3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition"
            >
              Create Account
            </button>
          </form>

          <p className="text-center mt-4">
            Already have an account? <a href="/login" className="text-blue-500">Log In</a>
          </p>
        </div>
      </div>

      {/* Image Section for Large Screens */}
      <div className="hidden md:flex w-1/2 bg-blue-100 justify-center items-center">
        <img src={Image} alt="User Placeholder" className="max-w-xs md:max-w-md" />
      </div>
    </div>
  );
};

export default SignupPage;
