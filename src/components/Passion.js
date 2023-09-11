import React from 'react'

import KeyboardIcon from '@mui/icons-material/Keyboard';
import TerminalIcon from '@mui/icons-material/Terminal';
import BugReportIcon from '@mui/icons-material/BugReport';
import { Typography } from '@mui/material';

function Passion() {
  return (
    <div id="PassPage"> 
        <h1>WHAT I DO</h1>
             <div id="box">
              <div id="each"><div id="circle"><KeyboardIcon sx={{width:'100px',height:'50px'}}></KeyboardIcon></div>
                <p>Web developer</p>
                <Typography variant='body2'>
                   With a strong foundation in computer science, I'm passionate about web design and development. As I grow as a developer, I hope to write clean, readable code that can be used by others and leveraged to create beautiful software.
                </Typography>
                </div>
                <div id="each"><div id="circle"><TerminalIcon sx={{width:'100px',height:'50px'}}></TerminalIcon></div>
                <p>Programming</p>
                <Typography variant='body2'>
I am deeply passionate about programming. From the first line of code I ever wrote, I was captivated by the infinite possibilities and problem-solving opportunities that programming offers. This passion drives me to continually expand my knowledge and skills, staying up-to-date with the latest technologies and trends.</Typography>
                </div>
                <div id="each"><div  id="circle"><BugReportIcon sx={{width:'100px',height:'50px'}}></BugReportIcon></div>
                <p>Debugging</p>
                <Typography variant='body2'> I view each debugging challenge as a chance to deepen my understanding of programming languages and systems, ultimately enhancing my expertise. Embracing debugging as a learning opportunity, I am committed to consistently refining my problem-solving abilities and delivering high-quality, error-free software solutions.</Typography>
                </div>
             </div>
    </div>
  )
}

export default Passion