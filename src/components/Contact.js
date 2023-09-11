import React from 'react'
import NearMeIcon from '@mui/icons-material/NearMe';
import { Button, Link, Typography } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
function Contact() {
  return (<>
  <div id='last'>
    <NearMeIcon sx={{fontSize:'4rem'}}></NearMeIcon>
    <Typography variant='h4'>GET IN TOUCH</Typography>
    <Typography variant='body2'>Whether you have an idea for a project or just want to chat, feel free to shoot me an email!</Typography>
    <a href = "mailto:bomma.chiru@gmail.com">
      <Button variant='outlined' color='secondary'>Say Hello</Button>
    </a>
  </div>
  <div id="footer">
    <div id='links'>
       <a href="https://www.facebook.com/bomma.chiranjeevi?mibextid=ZbWKwL" ><Button varient='contained' color='primary' sx={{backgroundColor:'#444444',minWidth:'50px',minHeight:'50px',borderRadius:'0',margin:'5px'}}>
            <FacebookIcon></FacebookIcon>
        </Button></a> 
       <a href="https://instagram.com/bomma_chiranjeevi?igshid=NzZhOTFlYzFmZQ==" ></a> <Button varient='contained' color='primary' sx={{backgroundColor:'#444444',minWidth:'50px',minHeight:'50px',borderRadius:'0',margin:'5px'}}>
            <InstagramIcon></InstagramIcon>
        </Button>
       <a href="https://www.linkedin.com/in/chiranjeevi-bomma-36a401235" ></a> <Button varient='contained' color='primary' sx={{backgroundColor:'#444444',minWidth:'50px',minHeight:'50px',borderRadius:'0',margin:'5px'}}>
            <LinkedInIcon></LinkedInIcon>
        </Button>
       <a href="mailto:bomma.chiru@gmail.com" ></a> <Button varient='contained' color='primary' sx={{backgroundColor:'#444444',minWidth:'50px',minHeight:'50px',borderRadius:'0',margin:'5px'}}>
            <MailIcon></MailIcon>
        </Button>
       <a href="https://github.com/chiru-damon/" ></a> <Button varient='contained' color='primary' sx={{backgroundColor:'#444444',minWidth:'50px',minHeight:'50px',borderRadius:'0',margin:'5px'}}>
            <GitHubIcon></GitHubIcon>
        </Button>
    </div><Link href="#head" underline="none">
    <RocketLaunchIcon sx={{transform:'rotate(-45deg)',fontSize:'2.5rem'}}></RocketLaunchIcon>
    </Link>
  </div>
  </>
  )
}

export default Contact