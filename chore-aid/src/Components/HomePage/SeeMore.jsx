import React, { useState } from 'react';
import LeftArrowIcon from '../../images/left-arrow.png'; // Update the path accordingly
import RightArrowIcon from '../../images/right-arrow.png'; // Update the path accordingly

function SeeMoreComponent({ article }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSeeMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {!isExpanded && (
        <button onClick={handleSeeMore} className='see-more'>
          See More <img src={RightArrowIcon} alt="Right Arrow" className="arrow-icon" />
        </button>
      )}

      {isExpanded && (
        <>
          {article}
          <button onClick={handleSeeMore} className='see-more'>
            <img src={LeftArrowIcon} alt="Left Arrow" className="arrow-icon" /> See Less 
          </button>
        </>
      )}
    </div>
  );
}

export default SeeMoreComponent;

