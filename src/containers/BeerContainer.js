
import React, { useState, useEffect } from 'react';
import BeerList from '../components/BeerList';
import BeerDetail from '../components/BeerDetail';
import BeerFavourites from '../components/BeerFavourites';


const BeerContainer = () => {
    const [beers, setBeers] = useState([]);
    const [selectedBeer, setSelectedBeer, setFavouriteBeer] = useState(null);
    const [favouriteBeers, setFavouriteBeers] = useState([]);

    useEffect(() => {
      getBeers();
    }, [])


    const getBeers = function(){
        fetch('https://api.punkapi.com/v2/beers')
        .then(res => res.json())
        .then(beers => setBeers(beers))
    }


    const onBeerClick = function(beer){
        setSelectedBeer(beer);
    }


    const onClickIndex = function(){
        setSelectedBeer(null);
    }

 
    return (
        <div className="main-container">
            {!selectedBeer ? <BeerList beers={beers} onBeerClick={onBeerClick}/> : null}
            {selectedBeer ? <BeerDetail selectedBeer={selectedBeer} onClickIndex={onClickIndex}/> : null}
            {!selectedBeer ? <BeerFavourites beers={beers}/> : null}
        </div>
    )
}

export default BeerContainer;

