import React, { useState } from 'react'
import {AppBar,Typography,Toolbar,Box, Modal} from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Menu from './Menu';
import {Link} from '@mui/material';

function Nav() {

  const [menu,setMenu]=useState(false);
  const [icon,setIcon]=useState(true)

  const openMenu=(e)=>{
    menu?setMenu(false):setMenu(true);  
    icon?setIcon(false):setIcon(true);
    console.log("hii")
  } 

  return (
    <div style={{position:"absolute"}}>
        <div >
          <AppBar color="secondary">
            <Toolbar display="flex" sx={{justifyContent:"space-between"}}>
              <Box display="flex">
                <CatchingPokemonIcon sx={{marginTop:"20px"}}></CatchingPokemonIcon>
                <Typography variant='h5' padding={2} >Chiranjeevi</Typography>
              </Box >
              <Box sx={{display:{xs:"none",md:"flex"}}}>
                <Typography variant='body1' padding={2} ><Link href="#about" underline="none">About</Link> </Typography>
                <Typography variant='body1' padding={2} ><Link href="#pass" underline="none">Passion</Link></Typography>
                <Typography variant='body1' padding={2} ><Link href="#exper" underline="none">Experiance</Link></Typography>
                <Typography variant='body1' padding={2} ><Link href="#work" underline="none">Work</Link></Typography>
                <Typography variant='body1' padding={2} ><Link href="#contact" underline="none">Contact</Link></Typography>
              </Box>
              <Box sx={{display:{xs:"block",md:"none"}}}>
              <div onClick={openMenu}>{icon?<MenuIcon></MenuIcon>:<CloseRoundedIcon></CloseRoundedIcon>}</div>
              </Box>
            </Toolbar>
            <div>
          {menu?
          <Modal sx={{display:{xs:"block",md:"none"}}} open={menu} onClose={openMenu}>
            <Menu clo={setMenu} ico={setIcon}></Menu>
          </Modal>
          :
          <></>}
        </div>
          </AppBar>
        </div>
       
    </div>
  )
}

export default Nav;