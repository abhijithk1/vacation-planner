import { Box, Divider, Drawer } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { navBarPrimaryItems, navbarSecondaryItems } from "./navbarItems";
import { useNavigate } from "react-router-dom";


const NavBar = (props) => {

    const drawerWidth = 300
    const navigate = useNavigate();
    return(
        <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto', m: 2 }}>
          <List>
            {navBarPrimaryItems.map((item) => (
              <ListItem key={item.id}
              onClick={() => {navigate(item.route)}}
              sx={{p: 1}}
              >
                <ListItemButton alignItems='center'>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.element}/>
                </ListItemButton>
              </ListItem>
            ))}
            <Divider />
            {navbarSecondaryItems.map((item) => (
              <ListItem key={item.id}
              onClick={() => {navigate(item.route)}}
              sx={{p: 1}}
              >
                <ListItemButton alignItems='center'>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.element}/>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    )
}

export default NavBar;
