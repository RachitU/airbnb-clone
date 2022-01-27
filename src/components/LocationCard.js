import React from 'react';
import './LocationCard.css';
const LocationCard = ({text,imageUrl, content}) => {
  return (
    <div className="card">
              <img src={imageUrl} />
              <div className="card-footer">
                <h3>{text}</h3>
                <p>{content}</p>
              </div>
    </div>
    
  )
};

export default LocationCard;
