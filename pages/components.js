import Head from 'next/head'
import Link from 'next/link'
import React from 'react';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div >
      
    <Head>
      <title>Nitrohm_Shop</title>
    </Head>
  <main>
  <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      
    </IconButton>
    <Typography variant="h6" className={classes.title}>
    <Link href="/"><a>Home</a></Link> | 
    <Link href="/about"><a>about</a></Link> | 
    <Link href="/service"><a>service</a></Link> |
    <Link href="/components"><a>components</a></Link> |
    <Link href="/products/P002"><a>products</a></Link> |
    </Typography>
    
    
  </Toolbar>
</AppBar>

   <h1> <center>Components</center></h1>
  </main>  
    </div>
  )
}