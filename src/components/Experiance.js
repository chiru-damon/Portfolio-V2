import { Button, Typography } from '@mui/material'
import React from 'react'
import c from '../picture/c.png'
import css from '../picture/css.png'
import html from '../picture/html.png'
import java from '../picture/java.png'
import js from '../picture/js.png'
import linux from '../picture/linux.png'
import mongodb from '../picture/mongodb.png'
import node from '../picture/node.png'
import python from '../picture/python.png'
import react from '../picture/react.png'
import wshark from '../picture/wireshark.png'
import Resume from '../picture/BommaChiranjeevi_20JR1A0539.pdf'

function Experiance() {
  return (
    <>
    <Typography variant='h3'>Experiance</Typography>
    <div id="ExperPage">
        <div>
          <Typography variant='h5'>The Skills i have learned through out my Journey</Typography>
        <div id="skills">
         <img id="skill" src={html}></img>
         <img id="skill" src={css}></img>
         <img id="skill" src={js}></img>
         <img id="skill" src={c}></img>
         <img id="skill" src={python}></img>
         <img id="skill" src={java}></img>
         <img id="skill" src={mongodb}></img>
         <img id="skill" src={node}></img>
         <img id="skill" src={react}></img>
         <img id="skill" src={linux}></img>
         <img id="skill" src={wshark}></img>
        </div>
        </div>
        <div id ='resDown' align='center'>
          <Typography variant='h4'>Check out my Resume</Typography>
          <br></br><a href={Resume} download="Chiranjeevi_Bomma" target='_blank'>
          <Button variant='contained' color='secondary'>Grab A Copy</Button>
</a>
        
        </div>
    </div>
    </>
  )
}

export default Experiance