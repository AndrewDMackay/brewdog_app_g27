
import React, { useState, useEffect } from 'react';
import BeerList from '../components/BeerList';
import BeerDetail from '../components/BeerDetail';


const BeerContainer = () => {
    const [beers, setBeers] = useState([]);
    const [selectedBeer, setSelectedBeer] = useState(null);

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

    const onClickFavourite = function(beer){
        const favouriteBeers = [];
        const 
    }

 
    return (
        <div className="main-container">
            {!selectedBeer ?<BeerList beers={beers} onBeerClick={onBeerClick}/> : null}
            {selectedBeer ? <BeerDetail selectedBeer={selectedBeer} onClickIndex={onClickIndex}/> : null}
            {selectedBeer ?<BeerDetail beers={beers} onClickFavourite={onClickFavourite}/> : null}
        </div>
    )
}

export default BeerContainer;

