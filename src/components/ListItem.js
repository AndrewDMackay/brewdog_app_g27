
import React from 'react';

const ListItem = ({beer, onBeerClick}) => {

  const handleClick = function(){
    onBeerClick(beer);
  }


  return <div className="list-item" onClick={handleClick}><img src={beer.image_url} alt={beer.name}/><h4>{beer.name}</h4></div>
}

export default ListItem;

