import { Box, Typography } from '@mui/material'
import React from 'react'
import me from './me.JPG'
import KeyboardIcon from '@mui/icons-material/Keyboard';
import TerminalIcon from '@mui/icons-material/Terminal';

function About() {
  return (
    <Box  sx={{display:'flex',justifyContent:'center',alignItems:'center',maxWidth:'800px'}} height="100%">
      <div id="AboutPage">
        <Typography variant='h5'>A LITTLE BIT ABOUT ME</Typography>
        <img src={me}></img>
        <p> Hey! My name is Chiranjeevi and I'm a web developer with a passion for fullstack development. I'm currently a final year student at Kkr & Ksr Institute of Technology and Scieces pursuing a Bachelor degree in Computer Sceince and Engineering. I aspire toward a career that will allow me to channel my creativity through crafting beautiful software and engaging experiences.
        </p>
        <Typography variant='body2'>When I'm not on the computer, I enjoy exercise, painting and petting cats.</Typography>
        {/* <div id="box">
            <h3>TL;DR?  SELF PROCLAMATIONS:</h3>
             <div style={{display:'flex',justifyContent:'space-evenly'}}>
              <div><KeyboardIcon sx={{width:'100px',height:'50px'}}></KeyboardIcon>
                <p>Web developer</p></div>
                <div><TerminalIcon sx={{width:'100px',height:'50px'}}></TerminalIcon>
                <p>Web developer</p></div>
                <div><KeyboardIcon sx={{width:'100px',height:'50px'}}></KeyboardIcon>
                <p>Web developer</p></div>
             </div>
        </div> */}
      </div>
    </Box>
  )
}

export default About