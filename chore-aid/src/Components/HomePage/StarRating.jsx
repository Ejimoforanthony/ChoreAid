import React, { useState } from 'react';

function StarRating() {
  const [rating, setRating] = useState(0); // Initial rating is 0
  const [hover, setHover] = useState(0);   // Initial hover state is 0

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
            style={{
              cursor: 'pointer',
              fontSize: '3rem',
              backgroundColor: 'transparent',
              border: 'none',
              color: index <= (hover || rating) ? "#ffc107" : "#e4e5e9"
            }}
          >
            <span className='star'>★</span>
          </button>
        );
      })}
    </div>
  );
}

export default StarRating;
