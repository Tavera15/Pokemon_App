import React, { lazy, Suspense } from 'react';
import { Grid } from '@material-ui/core';
import './cardList.css';
import Loading from '../LoadingPage/Loading';

const PokemonCard = lazy(() => import('../PokemonCard'));

const CardList = ({pokemon}) => {
	return(
		<Grid container spacing={(window.innerWidth <= 700) ? 0 : 1} className="listContainer">
			<Suspense fallback={<Loading />}>
				{pokemon.map((poke, i) =>
					<PokemonCard
						key={i+1}
						name={poke.name}
						id={poke.id}
						sprite={poke.sprites.front_default}
						pokeType={(poke.types.length === 1) 
							? poke.types[0].type.name 
							: poke.types[1].type.name + "/" + poke.types[0].type.name}
					/>
				)}
			</Suspense>
 		</Grid>
	);
}

export default CardList;