import React, {Component} from 'react';
import PokemonCard from './PokemonCard';
import {Grid} from '@material-ui/core';
import './cardList.css';

class CardList extends Component{

	constructor() {
		super();
		this.state = {
			pokemon: []
		};
	}

	shouldComponentUpdate(nextProps, nextState){
		if(this.state.pokemon != nextState.pokemon)
			return true;

		return false;
	}

	componentDidMount(){
		this.fetchPokemon();
	}

	fetchPokemon()
	{
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

	render(){
		return(
			<Grid container spacing={0} className="listContainer">
				{this.state.pokemon.map((poke, i) =>
					<PokemonCard
						key={i+1}
						name={poke.name}
						sprite={poke.sprites.front_default}
						pokeType= {(poke.types.length === 1) 
							? poke.types[0].type.name 
							: poke.types[1].type.name + "/" + poke.types[0].type.name}
					/>
				)}
			</Grid>
		);
	}
}

export default CardList;