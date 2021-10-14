
import React from 'react';
import BeerContainer from '../containers/BeerContainer';

const BeerDetail = ({selectedBeer, onClickIndex}) => {


    const handleClick = function(){
        onClickIndex();
    }

    const handleFavourite = function(){
        onClickFavourite();
    }

  return (
      
      <div>
          <h1>{selectedBeer.name}</h1>
          <img src={selectedBeer.image_url} alt={selectedBeer.name}/>
          <p>{selectedBeer.description}</p>
          <p onClick={handleFavourite}><strong>FAVOURITE</strong></p>
          <p onClick={handleClick}><strong>BACK TO BEERS..</strong></p>
      </div>
  )
}

export default BeerDetail;