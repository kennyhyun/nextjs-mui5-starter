import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export const AppBarComponent = ({
  title = 'AppBar Title',
  drawerWidth = 240,
  handleDrawerToggle = (() => undefined) as () => void,
}) => (
  <AppBar
    position='fixed'
    sx={{
      width: { sm: `calc(100% - ${drawerWidth}px)` },
      ml: { sm: `${drawerWidth}px` },
    }}
  >
    <Toolbar sx={{ w: '100%', justifyContent: 'space-between' }}>
      <IconButton
        color='inherit'
        aria-label='open drawer'
        edge='start'
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: 'none' }, }}
      >
        <MenuIcon />
      </IconButton>

      <Typography align='center' variant='h6' noWrap component='div'>
        {title}
      </Typography>
      <IconButton
        color='inherit'
        aria-label='search'
        edge='end'
        sx={{ ml: 2 }}
      >
        <SearchIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default AppBarComponent;
