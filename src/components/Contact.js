import React from 'react'
import NearMeIcon from '@mui/icons-material/NearMe';
import { Button, Typography } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import FacebookIcon from '@mui/icons-material/Facebook';
function Contact() {
  return (<>
  <div id='last'>
    <NearMeIcon sx={{fontSize:'4rem'}}></NearMeIcon>
    <Typography variant='h4'>GET IN TOUCH</Typography>
    <Typography variant='body2'>Whether you have an idea for a project or just want to chat, feel free to shoot me an email!</Typography>
    <Button variant='outlined' color='secondary'>Say Hello</Button>
  </div>
  <div id="footer">
    <div id='links'>
        <Button varient='contained' color='primary' sx={{backgroundColor:'#444444',minWidth:'50px',minHeight:'50px',borderRadius:'0',margin:'5px'}}>
            <FacebookIcon></FacebookIcon>
        </Button>
        <Button varient='contained' color='primary' sx={{backgroundColor:'#444444',minWidth:'50px',minHeight:'50px',borderRadius:'0',margin:'5px'}}>
            <FacebookIcon></FacebookIcon>
        </Button>
        <Button varient='contained' color='primary' sx={{backgroundColor:'#444444',minWidth:'50px',minHeight:'50px',borderRadius:'0',margin:'5px'}}>
            <FacebookIcon></FacebookIcon>
        </Button>
        <Button varient='contained' color='primary' sx={{backgroundColor:'#444444',minWidth:'50px',minHeight:'50px',borderRadius:'0',margin:'5px'}}>
            <FacebookIcon></FacebookIcon>
        </Button>
        <Button varient='contained' color='primary' sx={{backgroundColor:'#444444',minWidth:'50px',minHeight:'50px',borderRadius:'0',margin:'5px'}}>
            <FacebookIcon></FacebookIcon>
        </Button>
        <Button varient='contained' color='primary' sx={{backgroundColor:'#444444',minWidth:'50px',minHeight:'50px',borderRadius:'0',margin:'5px'}}>
            <FacebookIcon></FacebookIcon>
        </Button>
    </div>
    <RocketLaunchIcon sx={{transform:'rotate(-45deg)',fontSize:'2.5rem'}}></RocketLaunchIcon>
  </div>
  </>
  )
}

export default Contact