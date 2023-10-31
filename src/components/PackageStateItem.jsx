import React from 'react';
import './PackageStateItem.css'

const PackageStateItem = ({ date, description, location, isFirst }) => {
  return (
    <div className="carousel-item">
      {!isFirst && <div className="vertical-line"></div>}
      <div className="date">{date}</div>
      <div className="description">{description}</div>
      <div className="location">{location}</div>
    </div>
  );
};

export default PackageStateItem;
