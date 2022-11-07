//import React, { Component } from 'react'
import InputBase from '@material-ui/core/InputBase';
import React from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
//import { black } from 'material-ui/styles/colors';
//import { white } from 'material-ui/styles/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow:'2',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: (theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: (theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(0),
      width: 'auto',
    
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
   
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:'57%',
    borderRadius:'5px',
    backgroundColor:'#2979ff',

  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(6)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '10ch',
        backgroundColor:'lightgrey',
        borderRadius:'5px',
      },
    },
  },
}));
const SearchBar=() =>{
  const classes = useStyles();
return(
  <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

)
}
export default SearchBar;