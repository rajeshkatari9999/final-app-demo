import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import'./App.css'
import { ThemeProvider as MuiThemeProvider  } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

//components
import Drawer from'./components/Drawer'
import Home from'./components/pages/Home';
import profile from './components/pages/profile'
import categories from './components/pages/Categories/categories'
import Login from './components/pages/Login'
import Addpost from './components/pages/Addpost'
import firebase from 'firebase'
//Categories//

let theme = createMuiTheme({
  palette: {
    
      primary: {
        light: '#fAF0DC',
        main: '#fff',
        dark: '#fff',
        contrastText: '#fff',
      },
      secondary: {
        light: 'red',
        main: '#ba000d',
        dark: '#ba000d',
        contrastText: '#fff',
      },
    },
    
    text: {
      // Some CSS
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
  });
      
    const App =()=>{    
    return ( 
      
      //login signup setup
     
      <MuiThemeProvider theme ={theme}>
         
         <div className="App">
        
           <>  
 <div className="container">
   
<Router>
  <Drawer/>
    <Switch>
        <Route exact path="/"component={Home}/>
        <Route exact path="/categories"component={categories}/>        
        <Route exact path="/profile"component={profile}/> 
        <Addpost/> 
        <Login/> 

        
    </Switch>
</Router>
       </div>   
    </>
         
</div>      
</MuiThemeProvider>     
);
};
export default App;