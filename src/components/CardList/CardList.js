import React from 'react';
import { Grid } from '@material-ui/core';
import './cardList.css';
import Loading from '../LoadingPage/Loading';
import PokemonCard from '../PokemonCard'

function CardList(props) {
	return(
		<div>
			{!props.isLoaded ? <Loading />
			:
				<Grid container spacing={(window.innerWidth <= 700) ? 0 : 1} className="listContainer">
					{props.pokemon.map((poke, i) =>
						<PokemonCard
							key={i+1}
							name={poke.data.name}
							id={poke.data.id}
							sprite={poke.data.sprites.front_default}
							pokeType={(poke.data.types.length === 1) 
								? poke.data.types[0].type.name 
								: poke.data.types[1].type.name + "/" + poke.data.types[0].type.name}
						/>
					)}
				</Grid>
			}
		</div>
	);
}

export default CardList;