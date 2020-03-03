import React from 'react';
import { Card, CardMedia, CardHeader, Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

function CardStyle()
{
	return(
		{
			root: {
				textAlign: 'center',
				background: 'linear-gradient(175deg, rgba(255,0,0,1) 24%, rgba(0,0,0,1) 25%, rgba(240,240,240,1) 26%)',
			},

			cardImage: {
		        paddingTop: '100%',
		        backgroundSize:'cover'
	      	}
		}
	);
}

const PokemonCard = ({name, id, pokeType, sprite}) => {
	const classes = CardStyle();
	return(
		<Grid item lg={2} md={4} sm={4} xs={12}>
			<Card variant="outlined" style={classes.root}>
				<CardHeader 
					title={name.toUpperCase()}
		          	subheader={pokeType}
		          	avatar={<Avatar>{id}</Avatar>}
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