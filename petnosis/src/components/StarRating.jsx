import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const totalStars = 5;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" />);
  }

  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
  }

  while (stars.length < totalStars) {
    stars.push(<FaRegStar key={`empty-${stars.length}`} className="text-yellow-500" />);
  }

  return <div className="flex">{stars}</div>;
};

export default StarRating;
