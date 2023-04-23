import React, { useState } from "react";

const Rating = ({ initialRating, lenght }) => {
  let sum = initialRating.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  sum = sum / lenght;
  const [rating, setRating] = useState(sum);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };

  const handleMouseEnter = (value) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    let starClass = "text-gray-200";
    if (i <= rating || i <= hoverRating) {
      starClass = "text-yellow-400";
    }
    stars.push(
      <span
        key={i}
        className={`text-sm mt-1 cursor-pointer ml-1 ${starClass}`}
        onClick={() => handleClick(i)}
        onMouseEnter={() => handleMouseEnter(i)}
        onMouseLeave={() => handleMouseLeave()}
      >
        <i className="fa-solid fa-star"></i>
      </span>
    );
  }

  return <div className="flex ml-[2px] items-center">{stars}</div>;
};

export default Rating;
