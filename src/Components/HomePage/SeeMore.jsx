// import { useState } from 'react';
// import LeftArrowIcon from '../../images/left-arrow.png';
// import RightArrowIcon from '../../images/right-arrow.png';

// function SeeMoreComponent({ article }) {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const handleSeeMore = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className="flex flex-col items-center">
//       {!isExpanded && (
//         <button
//           onClick={handleSeeMore}
//           className="flex items-center text-blue-500 font-semibold hover:text-blue-700 transition duration-200"
//         >
//           See More
//           <img src={RightArrowIcon} alt="Right Arrow" className="ml-2 w-4 h-4" />
//         </button>
//       )}

//       {isExpanded && (
//         <>
//           <div className="mt-4">{article}</div>
//           <button
//             onClick={handleSeeMore}
//             className="flex items-center text-blue-500 font-semibold hover:text-blue-700 transition duration-200 mt-4"
//           >
//             <img src={LeftArrowIcon} alt="Left Arrow" className="mr-2 w-4 h-4" /> See Less
//           </button>
//         </>
//       )}
//     </div>
//   );
// }

// export default SeeMoreComponent;
