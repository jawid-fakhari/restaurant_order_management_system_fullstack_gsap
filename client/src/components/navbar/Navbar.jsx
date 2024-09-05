import * as React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
      <Stack spacing={2} direction="row">
        <Link to="/menu" >
          <Button variant="contained">Menu</Button>
        </Link>
        <Link to="/admin">
          <Button variant="outlined">Admin</Button>
        </Link>
        <Link to="/tables">
          <Button variant="outlined">Tavoli</Button>
        </Link>
      </Stack>
    </Box>
  )
}

export default Navbar