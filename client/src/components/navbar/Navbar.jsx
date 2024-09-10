import * as React from 'react'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }} marginBottom={5}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MIO RISTORANTE
          </Typography>
          <Button variant='secondary' component={Link} to="/tables">Tavoli</Button>
          <Button variant='secondary' component={Link} to="/admin">Admin</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar