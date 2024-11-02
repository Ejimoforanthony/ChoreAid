import { useState, useRef, useEffect } from 'react';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import Faith from '../../images/FaithIgwe.jpeg';
import Micheal from '../../images/MichealNgah.jpeg';
import Isaac from '../../images/IsaacAliu.jpeg';
import Sandra from '../../images/SandraIkem.jpeg';

const services = [
    {
        img: Faith,
        name: "Faith Igwe",
        description: "A professional babysitter, dedicated and hardworking",
        price: "20,000 NGN Per hour",
    },
    {
        img: Micheal,
        name: "Micheal Ngah",
        description: "A professional chef, dedicated and hardworking",
        price: "30,000 NGN Per hour",
    },
    {
        img: Isaac,
        name: "Isaac Aliu",
        description: "A trusted cleaner, dedicated and hardworking",
        price: "10,000 NGN Per hour",
    },
    {
        img: Sandra,
        name: "Sandra Ikem",
        description: "A nurse and babysitter, dedicated and hardworking",
        price: "25,000 NGN Per hour",
    },
];

const StarRating = () => (
    <div className="flex items-center mt-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-yellow-300 mr-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      ))}
      <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
    </div>
);

const CustomButton = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
  >
    {children}
  </button>
);

export default function Component() {
    const [visibleItems, setVisibleItems] = useState(3);
    const [translateX, setTranslateX] = useState(0);
    const [isForward, setIsForward] = useState(true);
    const containerRef = useRef(null);

    const handleDirectionToggle = () => {
        setVisibleItems((prevItems) => {
            let newVisibleItems;
            if (isForward) {
                newVisibleItems = prevItems + 3;
                if (newVisibleItems >= services.length) {
                    setIsForward(false); // Switch to backward
                    return services.length;
                }
            } else {
                newVisibleItems = prevItems - 3;
                if (newVisibleItems <= 3) {
                    setIsForward(true); // Switch to forward
                    return 3;
                }
            }
            return newVisibleItems;
        });
    };

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                const itemWidth = containerWidth / 3;
                setTranslateX(-itemWidth * (visibleItems - 3));
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [visibleItems]);

    return (
      <div className="container mx-auto px-4 py-8 overflow-hidden">
        <div ref={containerRef} className="relative">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-none w-full sm:w-1/2 lg:w-1/3 p-4"
                style={{ minWidth: `${100 / 3}%` }}
              >
                <div className="border rounded-lg shadow-lg p-6 flex flex-col items-center">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="w-full h-48 object-cover mb-4"
                  />
                  <div className="text-center">
                    <h2 className="text-lg font-semibold">{service.name}</h2>
                    <p className="text-sm text-gray-600">{service.description}</p>
                    <p className="mt-2 font-bold text-blue-500">{service.price}</p>
                    <StarRating />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <CustomButton onClick={handleDirectionToggle}>
            {isForward ? 'See More' : 'See Less'}
            {isForward ? <IoArrowForward className="ml-2 h-4 w-4" /> : <IoArrowBack className="ml-2 h-4 w-4" />}
          </CustomButton>
        </div>
      </div>
    );
}
