const Main = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-6  p-8 pt-24 py-10 h-[550px]">
            <p className="text-4xl font-extrabold text-gray-800 text-center">
                Become one of the providers on ChoreAid to <br /> help provide services to clients in need of your services.<br />
            </p>

            <div className="flex items-center w-3/4 max-w-lg p-2 bg-blue-200 rounded-full shadow-lg">
                <input
                    type="text"
                    placeholder="Search for any service..."
                    className="w-full p-2 text-gray-700 bg-blue-200 rounded-l-full focus:outline-none"
                />
                <button className="p-2 text-white bg-blue-500 rounded-full focus:outline-none" aria-label="Search">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M15 11a6 6 0 11-12 0 6 6 0 0112 0z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Main;
