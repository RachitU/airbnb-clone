import React from 'react';
import './Lower.css';
import LocationCard from './LocationCard';
export const Lower = () => {
  return (
      <div className="below-banner">
          <div className="below-banner-header">
              <h1><b></b>Inspiration for your next trip<b/></h1>
              <div className="below-banner-cards">
                  <LocationCard text="Goa" content="650 kilometers away." imageUrl="https://cdn.discordapp.com/attachments/785776583502856193/936241545374494730/unknown.png"/>
                  <LocationCard text="Mumbai" content="1000 kilometers away." imageUrl="https://cdn.discordapp.com/attachments/785776583502856193/936241545374494730/unknown.png"/>
                  <LocationCard text="Hyderabad" content="600 kilometers away." imageUrl="https://cdn.discordapp.com/attachments/785776583502856193/936241545374494730/unknown.png"/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  
              </div>
          </div>
      </div>
  )
};
