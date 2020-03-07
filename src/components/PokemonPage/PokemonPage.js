import React from 'react';
import { Card, CardMedia, Grid, CardContent } from '@material-ui/core';
import './PokemonPage.css'
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
  { id: 'name', label: 'Pokemon Moves', minWidth: '100%' }
]

const PokemonPage = ({name, sprite, moves, pokeTypes, weight, height, id, baseXP}) => {

	const useStyles = makeStyles({
	  root: {
	    width: '100%',
	  },
	  container: {
	    maxHeight: 440,
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
		<Grid item justify="center" container lg={12} style={{backgroundColor: 'white', textAlign: 'center', padding: '5%' }}>
			<Grid item lg={12} md={12} sm={12} xs={6}>
				<h1 style={{textAlign: 'center'}}>{name.toUpperCase()}</h1>
			</Grid>

			<Grid container item alignItems="center" lg={2} sm={6} xs={12} style={{display: 'block', margin: '0 auto'}}>
				<Card style={{margin: '0', height: '100%'}}>

					<CardMedia 
						image={sprite}
						alt={name}
						style={{paddingTop: '100%', backgroundSize:'cover'}}
					/>

					<CardContent>
						{(pokeTypes.length === 1) 
							? pokeTypes[0].type.name 
							: pokeTypes[1].type.name + "/" + pokeTypes[0].type.name}
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
											        {id}
											    </span>
											</h4>
										</TableCell>
									</TableRow>

									<TableRow>
										<TableCell>
											<h4 style={{textAlign: 'left', margin: 0}}>
											    Weight:
											    <span style={{float: 'right'}}>
											        {weight}
											    </span>
											</h4>
										</TableCell>
									</TableRow>
									
									<TableRow>
										<TableCell>
											<h4 style={{textAlign: 'left', margin: 0}}>
											    Height:
											    <span style={{float: 'right'}}>
											        {height}
											    </span>
											</h4>
										</TableCell>
									</TableRow>
									
									<TableRow>
										<TableCell>
											<h4 style={{textAlign: 'left', margin: 0}}>
											    Base XP:
											    <span style={{float: 'right'}}>
											        {baseXP}
											    </span>
											</h4>						
										</TableCell>
									</TableRow>						
							</TableBody>
						</Table>
					</TableContainer>
				</Paper>
			</Grid>

			<Grid container item lg={7} sm={12}>
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
			            {moves.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => {
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
				        count={moves.length}
				        rowsPerPage={rowsPerPage}
				        page={page}
				        onChangePage={handleChangePage}
				        onChangeRowsPerPage={handleChangeRowsPerPage}
			      />
			    </Paper>
			</Grid>
		</Grid>
	);
}

export default PokemonPage;