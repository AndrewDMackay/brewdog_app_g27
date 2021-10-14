
import React from 'react';
import BeerContainer from '../containers/BeerContainer';

const BeerDetail = ({selectedBeer, onClickIndex, onClickFavourite}) => {


    const handleClick = function(){
        onClickIndex();
    }

    const handleFavourite = function(){
        onClickFavourite();
    }

  return (
      
      <div>
          <h2>{selectedBeer.name}</h2>
          <img src={selectedBeer.image_url} alt={selectedBeer.name}/>
          <div className="beer-description-container">
          <p>{selectedBeer.description}</p>
          </div>
          <button onClick={handleFavourite}><strong>FAVOURITE..</strong></button>
          <h3 onClick={handleClick}><strong>BACK TO BEERS..</strong></h3>
      </div>
  )
}

export default BeerDetail;

