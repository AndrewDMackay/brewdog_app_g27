
import React from 'react';
import ListItem from './ListItem';

const BeerFavourites = ({beers, onBeerClick}) => {

    const beersFavourites = beers.map((beer, index) => {
      return <ListItem beer={beer} key={index} onBeerClick={onBeerClick} />
    })

    return (
        <div className="flexbox">
            <div className="flexbox-container">
                <h1 className="favourite-beer-heading">FAVOURITE BEERS</h1>
                {beersFavourites}
            </div>
        </div>
    )
}

export default BeerFavourites;
