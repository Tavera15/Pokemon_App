import React, {useState} from 'react';
import './PokemonPage.css'
import axios from 'axios';
import Loading from '../LoadingPage/Loading';
import {useParams} from "react-router-dom";
import { Card, CardMedia, Grid, CardContent } from '@material-ui/core';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

const columns = [
  { id: 'name', label: 'Pokemon Moves', minWidth: '100%', }
]


function NewPokemonPage()
{
    const [pokemon, setPokemon] = useState({});
    const { pokemonName } = useParams();

    React.useEffect(() => {
        async function getPokemonData() {
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon/" + pokemonName);
            console.log(res);
            setPokemon(res);
        }

        getPokemonData();
    }, [pokemonName]);

    const useStyles = makeStyles({
        root: {
          width: '100%',
        },
        container: {
          maxHeight: '100%',
        },
      });
  
      const classes = useStyles();
      const [page, setPage] = React.useState(0);
      const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
      const handleChangePage = (event, newPage) => {
          setPage(newPage);
      };
  
      const handleChangeRowsPerPage = event => {
          setRowsPerPage(+event.target.value);
          setPage(0);
      };

    return(
        <div>
            {pokemon.status !== 200 ? <Loading />
                :
                <div>
                    <Grid item justify="center" container lg={12} style={{backgroundColor: 'white', textAlign: 'center', padding: '5%' }}>

                        <Grid container item alignItems="center" lg={3} sm={6} xs={12} style={{display: 'block', margin: '0 auto'}}>
                            <Card style={{margin: '0', height: '100%'}}>
                                <h1 style={{textAlign: 'center'}}>{pokemon.data.name.toUpperCase()}</h1>

                                <CardMedia 
                                    image={pokemon.data.sprites.front_default}
                                    alt={pokemon.data.name}
                                    style={{paddingTop: '100%', backgroundSize:'cover'}}
                                />

                                <CardContent>
                                    {(pokemon.data.types.length === 1) 
                                        ? pokemon.data.types[0].type.name 
                                        : pokemon.data.types[1].type.name + "/" + pokemon.data.types[0].type.name}
                                </CardContent>
                            </Card>
                        </Grid>


                        <Grid container item lg={3} sm={6}>
                            <Paper className={classes.root}>
                                <TableContainer >
                                    <Table style={{width: '100%'}}>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell style={{width: '100%'}} align="center">
                                                    Pokemon Data
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                                <TableRow style={{width: '100%'}}>
                                                    <TableCell>
                                                        <h4 style={{textAlign: 'left', margin: 0}}>
                                                            Pokemon ID:
                                                            <span style={{float: 'right'}}>
                                                                {pokemon.data.id}
                                                            </span>
                                                        </h4>
                                                    </TableCell>
                                                </TableRow>

                                                <TableRow>
                                                    <TableCell>
                                                        <h4 style={{textAlign: 'left', margin: 0}}>
                                                            Weight:
                                                            <span style={{float: 'right'}}>
                                                                {pokemon.data.weight}
                                                            </span>
                                                        </h4>
                                                    </TableCell>
                                                </TableRow>
                                                
                                                <TableRow>
                                                    <TableCell>
                                                        <h4 style={{textAlign: 'left', margin: 0}}>
                                                            Height:
                                                            <span style={{float: 'right'}}>
                                                                {pokemon.data.height}
                                                            </span>
                                                        </h4>
                                                    </TableCell>
                                                </TableRow>
                                                
                                                <TableRow>
                                                    <TableCell>
                                                        <h4 style={{textAlign: 'left', margin: 0}}>
                                                            Base XP:
                                                            <span style={{float: 'right'}}>
                                                                {pokemon.data.base_experience}
                                                            </span>
                                                        </h4>						
                                                    </TableCell>
                                                </TableRow>	
                                                
                                                {pokemon.data.stats.map((stat, i) => (
                                                    <TableRow key={i}>
                                                        <TableCell>
                                                            <h4 style={{textAlign: 'left', margin: 0}}>
                                                                {stat.stat.name}:
                                                                <span style={{float: 'right'}}>
                                                                    {stat.base_stat}
                                                                </span>
                                                            </h4>						
                                                        </TableCell>
                                                    </TableRow>	
                                                ))}

                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Paper>
                        </Grid>
                        
                        <Grid container item lg={6} sm={12}>
                            <Paper className={classes.root}>
                            <TableContainer className={classes.container}>
                                <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                    {columns.map(column => (
                                        <TableCell
                                        key={column.id}
                                        align="center"
                                        style={{ minWidth: column.minWidth }}
                                        >
                                        {column.label}
                                        </TableCell>
                                    ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {pokemon.data.moves.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                                            <TableCell align="center">
                                                {row.move.name}
                                            </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                    rowsPerPageOptions={[10, 25, 100]}
                                    component="div"
                                    count={pokemon.data.moves.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onChangePage={handleChangePage}
                                    onChangeRowsPerPage={handleChangeRowsPerPage}
                            />
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            }
        </div>
    )
}
export default NewPokemonPage;