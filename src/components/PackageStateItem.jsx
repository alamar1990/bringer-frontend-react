import React from 'react';
import './PackageStateItem.css'

const PackageStateItem = ({ item, isFirst }) => {

  const {timestamp, location} = item

  return (
    <div className="carousel-item">
      {!isFirst && <div className="vertical-line"></div>}
      <div className="date">{timestamp}</div>
      <div className="location">{location}</div>
    </div>
  );
};

export default PackageStateItem;
