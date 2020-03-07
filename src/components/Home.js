import React from 'react';
import '../App.css';
import CardList from "./CardList/CardList";

function Home({listedPoke}) {
  return(
    <div>
    	<CardList pokemon={listedPoke}/>
    </div>
  );
}

export default Home;
