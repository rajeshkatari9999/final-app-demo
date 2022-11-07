import React from 'react';
import{Link} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Toolbar } from 'material-ui';
import { getAllByDisplayValue } from '@testing-library/react';
import Divider from '@material-ui/core/Divider';
import Button  from '@material-ui/core/Button';
import Electrician from './Electrician';
//import Painter from './Painter';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

 const categories =() =>{

  return (
   <div>
    <Grid>
    <ul>
    <li>
    <Button variant="contained" color="secondary"
     component={Link} to="/Electrician">Electrician</Button> <Divider/>
    <Button variant="contained" color="secondary"
     component={Link} to="/Electrician">Painter</Button>  <Divider/>  
     <Button variant="contained" color="secondary"
     component={Link} to="/Electrician">Masnory</Button> <Divider/>
    <Button variant="contained" color="secondary"
     component={Link} to="/Electrician">Carpenter</Button> <Divider/>
     <Button variant="contained" color="secondary"
     component={Link} to="/Electrician">House Cleaning</Button> <Divider/>
    <Button variant="contained" color="secondary"
     component={Link} to="/Electrician">Plumber</Button> <Divider/>   
     <Button variant="contained" color="secondary"
     component={Link} to="/Electrician">Driver</Button> <Divider/>
    <Button variant="contained" color="secondary"
     component={Link} to="/Electrician">Mechanic</Button> <Divider/>
     <Button variant="contained" color="secondary"
     component={Link} to="/Electrician">RealEstate</Button> <Divider/>
    <Button variant="contained" color="secondary"
     component={Link} to="/Electrician">Catering</Button>   <Divider/> 
     <Button variant="contained" color="secondary"
     component={Link} to="/Electrician">Cooking Master</Button> <Divider/>
    <Button variant="contained" color="secondary"
     component={Link} to="/Electrician">Computer services</Button> <Divider/>
     <Button variant="contained" color="secondary"
     component={Link} to="/Electrician">A/c,Washing mechines</Button> <Divider/>
    <Button variant="contained" color="secondary"
     component={Link} to="/Electrician">Sales Boys</Button> <br/>   
     <Button variant="contained" color="secondary"
     component={Link} to="/Electrician">Electrician</Button> <Divider/>
    <Button variant="contained" color="secondary"
     component={Link} to="/Electrician">Electrician</Button> 
     
     </li>
     
     </ul>
     </Grid>
     <Grid container  
  direction="column"
  justify="flex-start"
  alignItems="center"
    spacing ={20}>
       </Grid>
    </div>
  );
}
export default categories