import React from 'react';
import {  AppBar, Toolbar, Typography,} from "@material-ui/core";

function Navbar (){
    return(
        <div>
        <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Todo-App
          </Typography>
        </Toolbar>
      </AppBar>
        </div>
    )
}
export default Navbar;
