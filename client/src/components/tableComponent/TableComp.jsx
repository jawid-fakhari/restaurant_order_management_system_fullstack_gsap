import React from 'react'
import { Box, Button, Typography } from '@mui/material'

function TableComp({ id, tableNumber, onTableClick }) {
  const cliclkHandler = (e) => {
    const clickTarget = e.target.getAttribute('id');
    if (clickTarget !== 'checkout'){
      console.log('box');
    }else{
      console.log('checkout');
    }
  }

  return (
    <Box sx={{
      width: 250,
      padding: 2,
      border: '1px solid #e0e0e0',
      borderRadius: 2,
      textAlign: 'center',
      cursor: 'pointer'
    }}
      //il box item rindrizza al callback func con onclick listener
      onClick={(e) => cliclkHandler(e)}
    >
      <Typography variant="h6" component="div" sx={{ marginTop: 2 }}>
        Tavolo: {tableNumber}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
        Stato
      </Typography>
      <Typography variant="h6" component="div" sx={{ marginTop: 1 }}>
        €Amount
      </Typography>
      <Button id='checkout' variant="outlined" color="primary">
        Checkout
      </Button>
    </Box>
  )
}

export default TableComp