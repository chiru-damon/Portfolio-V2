import React from 'react'
import "./styles/App.css"
import Nav from "./Nav"
import Home from "./components/Home"

import { createTheme, ThemeProvider } from '@mui/material/styles';
import About from './components/About';
import Passion from './components/Passion';
import Experiance from './components/Experiance';
import { Box } from '@mui/material';
import Work from './components/Work';
import Contact from './components/Contact';

const theme = createTheme({
  palette: {
    primary: {
      main :"#fff"
    },
    secondary: {
      main:"#000",
      light:'#5b5b5b'},
      palette: {
        mode: 'dark',
      },
  },
});

function App() {


  return (<>
    <ThemeProvider theme={theme}>
        
      <Box class="container" sx={{}}>
      <Nav ></Nav>
      <span id="back"></span>
        <section id='head'><Home></Home></section>
        <section id="about"><About></About></section>
        <section id="pass"><Passion></Passion></section>
        <section id="exper"><Experiance></Experiance></section>
        <section id="work"><Work></Work></section>
        <section id="contact"><Contact></Contact></section>
      </Box>
    </ThemeProvider>
  </>
  )
}

export default App