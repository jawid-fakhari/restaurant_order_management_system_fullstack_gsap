import * as React from 'react';
import Box from '@mui/material/Box';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

function Navbar() {
  const navigate = useNavigate();

  function goToHome() {
    navigate('/');
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: '100%',
      }}
      marginBottom={5}
    >
      <AppBar position="static" sx={{ backgroundColor: '#ea8116' }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: 'Onsen Japan Demo',
              cursor: 'pointer',
              color: '#000',
            }}
            onClick={goToHome}
          >
            Sakura
          </Typography>
          <Button
            variant="text"
            component={Link}
            to="/clients"
            sx={{
              color: '#000',
              '&:hover': {
                backgroundColor: '#f5f5f5',
                color: '#ea8116',
              },
            }}
          >
            Clienti
          </Button>
          {/* <Button
            variant="text"
            component={Link}
            to="/admin"
            sx={{
              color: '#000', 
              '&:hover': {
                backgroundColor: '#f5f5f5',
                color: '#ea8116',
              },
            }}
          >
            Admin
          </Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
