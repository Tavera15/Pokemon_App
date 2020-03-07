import React, { Component } from 'react';
import './App.css';
import CardList from "./components/CardList/CardList";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PokemonPage from './components/PokemonPage/PokemonPage';
import PokeBar from './components/PokeBar';

class App extends Component{
	
	constructor(props) {
		super(props);
		this.state = {
			pokemon: [],
		};
	}

	componentDidMount() {
		this.fetchPokemon();
	}

	fetchPokemon() {
		fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
		.then(res => res.json())
		.then((allPokemon) => {
			allPokemon.results.forEach((poke) => {
				fetch(poke.url)
				.then(data => data.json())
				.then((pokeData) => {
					this.setState({
						pokemon: this.state.pokemon.concat(pokeData)
					});
				});
			})
		})
	}

	createRoute() {
		return(
			<Router>
				{this.state.pokemon.map((poke, i) => 
					<Route key={i} exact path={/Pokemon_App/+poke.id} component={() => 
						<PokemonPage
							name={poke.name} 
							sprite={poke.sprites.front_default}
							moves={poke.moves}
							pokeTypes={poke.types}
							weight={poke.weight}
							height={poke.height}
							id={poke.id}
							baseXP={poke.base_experience}
							key={i+1}
						/>
					}/>
				)}
			</Router>
		);
	}

	render() {
		return(
			<div>
				<PokeBar/>
				<Router>
					{this.createRoute()}
					<Route exact path="/Pokemon_App" component={() => <CardList pokemon={this.state.pokemon} />} />
				</Router>		
			</div>
		);
	}
}


export default App;
