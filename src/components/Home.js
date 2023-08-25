import { Typography } from '@mui/material'
import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Home() {
  return (
    <div id='HomePage'>
      <div styel={{textAlign:'center'}}> 
      <Typography variant='h3'>HI, I'M CHIRANJEEVI</Typography>
      <Typography variant='body2'>Web Developer & Programmer</Typography>
      </div>
      <KeyboardArrowDownIcon  sx={{width:'50px',height:'50px'}}></KeyboardArrowDownIcon>
    </div>
    
  )
}

export default Home