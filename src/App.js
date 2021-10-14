
import React from 'react';
import BeerContainer from './containers/BeerContainer';

function App() {
  return (

    <div className="App">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap" rel="stylesheet"></link>
      </head>
      <h1>BREWDOG</h1>
     <BeerContainer />
    </div>
  );
}

export default App;

