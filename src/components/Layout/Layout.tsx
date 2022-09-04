import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';

import AppBar from './AppBar';
import Drawer from './Drawer';

type LayoutProps = {
  title: string;
  drawerContent: React.ReactNode;
  chidren: React.ReactNode;
};

export const Layout: React.FunctionComponent<LayoutProps> = ({
  title = 'Site Title',
  drawerContent,
  children,
}) => {
  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar {...{ handleDrawerToggle, drawerWidth, title }} />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer {...{ mobileOpen, handleDrawerToggle, drawerWidth }}>{drawerContent}</Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: { sm: 0, md: 3 },
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
