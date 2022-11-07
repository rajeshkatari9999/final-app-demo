import React ,{Component}from 'react';
//import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
//import CardHeader from '@material-ui/core/CardHeader';
//import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import FavoriteIcon from '@material-ui/icons/Favorite';
import GradeIcon from '@material-ui/icons/Grade';
//import MoreIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
//import ShareIcon from '@material-ui/icons/Share';
//import CssBaseline from '@material-ui/core/CssBaseline';
//import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
//import { CardText } from 'material-ui';
//import { Component } from 'react';
//import { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';



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
      maxWidth: "lg",
    },
  },
  Card:{
    minWidth: 120,
    marginBottom:20,
    
  },
  media: {
    height: 165,
    width:320,
  },
  paper: {
    height: 100,
    width: 12,
  },
  Botton:{
    alignContent:'center',
    alignItems:'center',
  },
  
  GradeIcon:{
    marginLeft: theme.spacing(35),
    marginBottom:theme.spacing(4),
     marginTop:theme.spacing(-8),
     alignItems:'Top',
  },
  username:{
    marginLeft: theme.spacing(6),
    marginBottom:theme.spacing(4),
     marginTop:theme.spacing(-6),
     alignItems:'Top',
     //padding: 10,
  },
  
}));

 const Post =()=>{
  const classes = useStyles();

  return (
  
     <>
   
    <div className={classes.root}> 
    
      <Paper   className={classes.Paper} >
      
      <Card  className={classes.Card}>
        
     
      <input type="text" placeholder='Work'/>
            <input type="text" placeholder='location'/> <br/>
            <input type="file" placeholder='Upload images' multiple='true'
             /> <br/>
            <Button type ="submit">Post</Button>
           

     
      </Card>
</Paper>
    </div>
 
    </>
  );
}
export default Post;