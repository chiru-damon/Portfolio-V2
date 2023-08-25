import React from 'react'

import KeyboardIcon from '@mui/icons-material/Keyboard';
import TerminalIcon from '@mui/icons-material/Terminal';
import { Typography } from '@mui/material';

function Passion() {
  return (
    <div id="PassPage"> 
        <h1>TL;DR?  SELF PROCLAMATIONS:</h1>
             <div id="box">
              <div id="each"><div id="circle"><KeyboardIcon sx={{width:'100px',height:'50px'}}></KeyboardIcon></div>
                <p>Web developer</p>
                <Typography variant='body2'>Design isn't just what a product looks like and feels like on the outside. Design encompasses the internal functionality of a product as well as the overall user experience. I strive to design interfaces and experiences that people can enjoy on all digital mediums.</Typography>
                </div>
                <div id="each"><div id="circle"><TerminalIcon sx={{width:'100px',height:'50px'}}></TerminalIcon></div>
                <p>Web developer</p>
                <Typography variant='body2'>Design isn't just what a product looks like and feels like on the outside. Design encompasses the internal functionality of a product as well as the overall user experience. I strive to design interfaces and experiences that people can enjoy on all digital mediums.</Typography>
                </div>
                <div id="each"><div  id="circle"><KeyboardIcon sx={{width:'100px',height:'50px'}}></KeyboardIcon></div>
                <p>Web developer</p>
                <Typography variant='body2'>Design isn't just what a product looks like and feels like on the outside. Design encompasses the internal functionality of a product as well as the overall user experience. I strive to design interfaces and experiences that people can enjoy on all digital mediums.</Typography>
                </div>
             </div>
    </div>
  )
}

export default Passion