
import React from 'react';
import BeerContainer from '../containers/BeerContainer';

const BeerDetail = ({selectedBeer}) => {

  return (
      
      <div>
          <h1>{selectedBeer.name}</h1>
          <img src={selectedBeer.image_url} alt={selectedBeer.name}/>
          <p>{selectedBeer.description}</p>
 
      </div>
  )
}

export default BeerDetail;