
import React from 'react';

const ListItem = ({beer, onBeerClick}) => {

  const handleClick = function(){
    onBeerClick(beer);
  }


  return <div class="list-item" onClick={handleClick}><img src={beer.image_url} alt={beer.name}/><h2>{beer.name}</h2></div>
}

export default ListItem;

