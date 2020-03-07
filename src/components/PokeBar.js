import React from "react";
import { Tabs, Tab } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const PokeBar = () => {
	return(
        <AppBar style={{ position: 'relative'}}>
	      <Toolbar>
	      	<Tabs centered value={false}>
	      		<Tab label="Gen I" href="/Pokemon_App" />
	      	</Tabs>
 	      </Toolbar>
	    </AppBar>
  	)
}

export default PokeBar;