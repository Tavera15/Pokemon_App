import React from 'react';
import {Card, CardMedia, CardHeader, Grid} from '@material-ui/core'

function CardStyle()
{
	return(
		{
			root: {
				textAlign: 'center',
			},

			cardImage: {
		        paddingTop: '100%', /*Adjust this number to 'reveal' a percentage of the image*/
		        backgroundSize:'cover'
	      	}
		}
	);
}

const PokemonCard = ({name, pokeType, sprite}) => {
	const classes = CardStyle();

	return(
		<Grid item lg={2} md={4} sm={6} xs={12}>
			<Card variant="outlined" style={classes.root}>
				<CardHeader 
					title={name}
		          	subheader={pokeType}
				/>

				<CardMedia
					alt={name}
					image={sprite}
					style={classes.cardImage}
				/>

			</Card>
		</Grid>
	);
}

export default PokemonCard;