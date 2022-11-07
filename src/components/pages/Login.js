import React from 'react'
import images from '../images/coolie9.png'
//import Paper from 'material-ui/Paper'
import { Grid } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
//import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import {GoogleButton} from 'react-google-button'
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      maxWidth: 345,
      
      margin: theme.spacing(3),
      '& > *': {
      // Object:'fit-content',
        width: theme.spacing(40),
        height: theme.spacing(33),
        maxWidth: 345,
      },
    },
    Card:{
       minHeight:200, 
      minWidth: 120,
      marginBottom:20,
      alignContent:'center',
      
    },  
    Paper: {
      height: 100,
      width: 12,
      elevation :24,
    },
    Botton:{
      alignContent:'center',
      alignItems:'center',
      backgroundColor:'black',
      color:'',
    },
}));
    
const Login =()=> {
    const classes = useStyles();
  return (
    <div>
        
        <Grid align='center' > 
     <div className={classes.root}> 
    
     <Card  className={classes.Card}>
        <GoogleButton/>
        <img src={images}
     alt="logo"/> 
     </Card>   
     </div>
     </Grid>
     <Grid container  
  justify="center"
  alignItems="center"     
 spacing={2}>
  </Grid>  
    </div>
  )
}

export default Login