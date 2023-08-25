import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function Menu(props) {
  return (
    <Box sx={{ width: '100%',backgroundColor:'black',color:'white',height:'max-content',marginTop:'60px'}}>
     
      <nav>
        <List>
          <ListItem >
            <ListItemButton component="a" href="#about" onClick={()=>{props.clo(false);props.ico(true);}}>
              <ListItemText primary="about" />
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton component="a" href="#pass" onClick={()=>{props.clo(false);props.ico(true)}}>
              <ListItemText primary="Passion" />
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton component="a" href="#exper" onClick={()=>{props.clo(false);props.ico(true)}}>
              <ListItemText primary="Experiance" />
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton component="a" href="#work" onClick={()=>{props.clo(false);props.ico(true)}}>
              <ListItemText primary="Work" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="#contact" onClick={()=>{props.clo(false);props.ico(true)}} >
              <ListItemText primary="Contact" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
