
import React, { useState, useEffect } from 'react';
import BeerList from '../components/BeerList';
import BeerDetail from '../components/BeerDetail';
import BeerSelector from '../components/BeerSelect';
import './BeerContainer.css';

const BeerContainer = () => {
    const [munros, setBeers] = useState([]);
    const [selectedBeers, setSelectedBeer] = useState(null);

    useEffect(() => {
      getBeer();
    }, [])

    const getBeers = function(){
        fetch('https://api.punkapi.com/v2/beers')
        .then(res => res.json())
        .then(beers => setBeers(beers))
    }

    const onBeerClick = function(beer){
        setSelectedBeer(beer);
    }

    const onBeerSelected = function(beer){
        setSelectedBeer(beer);
    }

    return (
        <div className="main-container">
            <BeerList beers={beers} onBeerClick={onBeerClick} />
            {/* <MunroSelector munros={munros} onMunroSelected={onMunroSelected} />
            {selectedMunro ? <MunroDetail selectedMunro={selectedMunro} /> : null} */}
            
        </div>
    )
}

export default MunroContainer;
