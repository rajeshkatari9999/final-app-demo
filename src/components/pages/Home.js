import React,{useState,useEffect,useStyles,Component} from 'react';
import Tooltip from '@material-ui/core/Tooltip';

//import Post from './pages/Post';
import {Grid} from '@material-ui/core';
import { Subheader } from 'material-ui';
import SearchBar from './SearchBar'
import images from '../images/coolie9.png'


 class Home extends Component {
   componentDidMount(){
     
   }
  render() {
    return (
      <div>
      <Grid align='center' > 
     <img src={images}
     alt="logo"/> 
          <SearchBar/>  
     </Grid>    
  <Grid container  
  justify="center"
  alignItems="center"     
 spacing={2}>
  </Grid>  
  
  <br/>
  </div>
  

)}
    }

export default Home;