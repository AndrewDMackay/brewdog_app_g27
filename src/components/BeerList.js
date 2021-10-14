
import React from 'react';
import ListItem from './ListItem';

const BeerList = ({beers, onBeerClick}) => {

    const beersItems = beers.map((beer, index) => {
      return <ListItem beer={beer} key={index} onBeerClick={onBeerClick} />
    })

    return (
        <div className="flexbox">
        <div className="flexbox-container">
        {beersItems}
        </div>
    </div>
    )
}

export default BeerList;

