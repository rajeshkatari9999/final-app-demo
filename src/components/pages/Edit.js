import React from 'react'
import './Pages.css'
import { Grid } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
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
       minHeight:400, 
      minWidth: 320,
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
      color:'primary',
    },
    
}));
    

const Edit = () => {
    const classes = useStyles();
  return (
    <div>
     <Grid align='center' > 
     <div className={classes.root}>
     <Card  className={classes.Card}>
        <center>
        <from className='from'>
            <input type="text" placeholder='Work'/>
            <input type="text" placeholder='location'/> <br/>
            <input type="file" placeholder='Upload images' multiple='true'/> <br/>
            <Button type ="edit">Edit</Button>
        </from>
        </center>
     </Card>
     </div>
     </Grid>
     
     <Grid container  
  justify="center"
  alignItems="center">
  </Grid>
     
     </div>
    
  )
}

export default Edit