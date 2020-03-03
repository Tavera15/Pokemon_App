import React, { Component, lazy, Suspense } from 'react';
import { Grid } from '@material-ui/core';
import './cardList.css';
import Loading from './Loading';
const PokemonCard = lazy(() => import('./PokemonCard'));


class CardList extends Component{

	constructor(props) {
		super(props);
		this.state = {
			pokemon: [],
		};
	}

	shouldComponentUpdate(nextProps, nextState){
		if(this.state.pokemon !== nextState.pokemon)
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
			<Grid container spacing={(window.innerWidth <= 700) ? 0 : 1} className="listContainer">
				<Suspense fallback={<Loading />}>
					{this.state.pokemon.map((poke, i) =>					
						<PokemonCard
							key={i+1}
							name={poke.name}
							id={poke.id}
							sprite={poke.sprites.front_default}
							pokeType= {(poke.types.length === 1) 
								? poke.types[0].type.name 
								: poke.types[1].type.name + "/" + poke.types[0].type.name}
						/>
					)}
				</Suspense>
			</Grid>
		);
	}
}

export default CardList;