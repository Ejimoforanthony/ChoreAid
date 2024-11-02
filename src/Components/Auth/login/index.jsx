import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../../images/login-image.png';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      
      {/* Form Section */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-4 bg-gray-50">
        
        {/* Header Text */}
        <div className="text-center md:text-left mb-6 md:ml-8">
          <h2 className="text-3xl font-bold">Welcome Back!!!</h2>
          <p className="mt-2">ChoreAid helps you source trusted workers!</p>
        </div>

        {/* Image Section for Mobile */}
        <div className="md:hidden mb-6 flex justify-center">
          <img src={Image} alt="Welcome" className="w-3/4" />
        </div>

        {/* Form */}
        <div className="w-full max-w-[32rem] md:ml-8">
          <form onSubmit={handleSubmit} className="p-4">
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

            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center text-gray-700">
                <input type="checkbox" className="mr-2" />
                Remember Me
              </label>
              <a href="#" className="text-blue-500 text-sm">Forget Password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition"
            >
              Log In
            </button>
          </form>

          <p className="text-center mt-4">
            Don’t have an account? <a href="/register" className="text-blue-500">Sign Up</a>
          </p>
        </div>
      </div>

      {/* Image Section for Large Screens */}
      <div className="hidden md:flex w-1/2 bg-blue-100 justify-center items-center">
        <img src={Image} alt="Welcome" className="max-w-xs md:max-w-md" />
      </div>
    </div>
  );
};

export default LoginPage;
