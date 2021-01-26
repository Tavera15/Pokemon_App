import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import CardList from "./components/CardList/CardList";
import NewPokemonPage from './components/NewPokemonPage/NewPokemonPage';
import PokeBar from './components/PokeBar';

function App()
{
	const [pokemonData, setPokemonData] = React.useState([]);
	const [allLoaded, setLoadStatus] = React.useState(false);
	const limit = 151;

	React.useEffect(() => {
		async function getAllPokemonData() 
		{
			const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit='+limit);
			
			const allPokemonData = res.data.results.map(pokemon => {
				return axios.get(pokemon.url)
			});

			await Promise.all(allPokemonData)
			.then(pokemon => setPokemonData(prev => [...prev, pokemon]))
			.finally(e => setLoadStatus(true));
		}

		getAllPokemonData();
	}, [])

	
	function createRoute() {
		return(
			<Router>
				{pokemonData.map((poke, i) => 
					<Route key={i} path = "/Pokemon_App/:pokemonName" children={<NewPokemonPage />}/>
				)}
			</Router>
		);
	}
	
	
	return(
		<div>
			<PokeBar/>
			<Router>
				{createRoute()}
				<Route exact path="/Pokemon_App" component={() => <CardList pokemon={pokemonData[0]} isLoaded = {allLoaded} />} />
			</Router>		
		</div>
	);
	
}


export default App;
