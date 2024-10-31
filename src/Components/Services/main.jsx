const Main = () => {
    return (
        <div className="pt-[75px]">
        <div className="relative flex items-center justify-center min-h-[400px]  bg-cover bg-center bg-services">
            <div className="flex items-center w-3/4 max-w-lg p-2 bg-blue-200 rounded-full shadow-lg">
            <input
                type="text"
                placeholder="Search for any service..."
                className="w-full p-2 text-gray-700 bg-blue-200 rounded-l-full focus:outline-none"
            />
            <button className="p-2 text-white bg-blue-500 rounded-full focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M15 11a6 6 0 11-12 0 6 6 0 0112 0z" />
                </svg>
            </button>
            </div>
        </div>
      </div>
    );
  };
  
  export default Main;
  