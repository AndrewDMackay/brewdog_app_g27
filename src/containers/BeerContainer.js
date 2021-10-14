
import React, { useState, useEffect } from 'react';
import BeerList from '../components/BeerList';


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

    const onBeerSelected = function(beer){
        setSelectedBeer(beer);
    }

    return (
        <div className="main-container">
            <BeerList beers={beers} onBeerSelected={onBeerSelected} />
        </div>
    )
}

export default BeerContainer;

