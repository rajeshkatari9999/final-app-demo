import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import './Appbar.css'
//material ui staff
import clsx from 'clsx';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import AppBar2 from'./pages/AppBar2';
 import CategoryIcon from '@material-ui/icons/Category';
 import Fab from '@material-ui/core/Fab';
 import PropTypes from 'prop-types';
 import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
 

 const drawerWidth = 170;

 const useStyles = makeStyles((theme) => ({
 root: {
    display: 'flex',
    position:'fixed',
    zIndex:100,
  },
  appBar: {
   transition: theme.transitions.create(['margin', 'bottom'], {
     easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
   }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
     easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    
  },
  toolbar: {
    minHeight:2,
    margin:'left',
  
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
    alignItems: 'left',
  },
   sectionDesktop: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: '',
      
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: '',
    },
  },
 
  
  hide: {
    display: 'none',

  },
  drawer: {
    width: drawerWidth,
    flexShrink: 1,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
 
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: theme.spacing(2),
    marginLeft:-drawerWidth,
  },
 
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    appBar: {
      top: 'auto',
      bottom: 0,
    
      
    },
    
    
  },
}));


 function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
 const handleDrawerOpen = () => {
    setOpen(true);
  };
const handleDrawerClose = () => {
    setOpen(false);
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (  
    
    <div className={classes.root}  className={classes.sectionMobile} className={classes.sectionDesktop}>
      <CssBaseline />
      <AppBar position="fixed" color="secondary" className="Appbar">
           <Toolbar className={classes.toolbar}>
         
       <IconButton
            color="primary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          ><MenuIcon />
          </IconButton>
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs"  variant="contained">
          <Tab icon={<HomeIcon color="primary" />} aria-label="home"  component={Link} to="/"{...a11yProps(0)} />
          <Tab icon={<AccountCircleIcon  color="primary"/>} aria-label="profile"  component={Link} to="/profile" {...a11yProps(1)} />
          <Tab icon={<CategoryIcon color="primary" />} aria-label="favorite"  component={Link} to="/categories"{...a11yProps(2)} />
          <Tab  icon={<AddIcon  variant="contained" color="primary"/>} aria-label="post"  component={Link} to="/AddPost" {...a11yProps(3)} />
          
        </Tabs>
        
          </Toolbar>
         
     </AppBar>
    
     
     <TabPanel  value={value} index={HomeIcon}>
      
      </TabPanel>
      <TabPanel value={value} index={1}>
        
      </TabPanel>
      <TabPanel value={value} index={2}>
        
      </TabPanel>
      <TabPanel value={value} index={3}>
        
      </TabPanel>
     
      <Drawer
        className={classes.drawer}
        variant='temperory'
        anchor="left"
        color="#ffef62"
        open={open}
        onClose={()=> setOpen(false)}
        classes={{
          paper: classes.drawerPaper,
        }}
       
      >
         
        <div className={classes.drawerHeader}>
        
          <IconButton onClick={handleDrawerClose} > 
          {theme.direction === 'rtr' ? <CloseIcon/> : <CloseIcon />}
          </IconButton>
         </div>
       
      
     
        <List>
       
       <Divider/>
       <List><Button  variant="contained"color=" primary" component={Link} to="/Login">Login</Button></List>
       <Divider/>
       <List><Button variant="contained" color=" primary" component={Link} to="/signup">Signup</Button></List>
       <Divider/> 
       <Button variant="contained" color=" primary" component={Link} to="/Aboutus">About us</Button>
       <Divider/> 
       <Button variant="contained" color=" primary" component={Link} to="/">Privacy&polacy</Button>
       <Divider/> 
       <Button variant="contained" color=" primary" component={Link} to="/Logout">Logout</Button>
       <Divider/>  
       </List>  
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography paragraph>
          </Typography>
      </main>
    </div>
  );
      };
export default PersistentDrawerLeft;