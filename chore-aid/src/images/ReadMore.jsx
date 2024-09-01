import React, { useState } from 'react';
import LeftArrowIcon from '../images/left-arrow.png'; // Update the path accordingly
import RightArrowIcon from '../images/right-arrow.png'; // Update the path accordingly

function ReadMoreComponent({ title, content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>
        {isExpanded ? content : content.substring(0, 100) + '...'}
      </p>
      <button onClick={handleReadMore} className='servicelink'>
        {isExpanded ? (
          <>
            <img src={LeftArrowIcon} alt="Left Arrow" className="arrow-icon" /> Read Less
          </>
        ) : (
          <>
            Read More <img src={RightArrowIcon} alt="Right Arrow" className="arrow-icon" />
          </>
        )}
      </button>
    </div>
  );
}

export default ReadMoreComponent;

