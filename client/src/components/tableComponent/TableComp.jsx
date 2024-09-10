import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function TableComp({ id, tableNumber, onTableClick, amount, status }) {
  //**** devo collegare il checkout button al page di checkout
  const navigate = useNavigate();

  const cliclkHandler = (e) => {
    const clickTarget = e.target.getAttribute('id');

    clickTarget !== 'checkout' ? //se non è btn entra nel menu
      onTableClick(tableNumber) //callback al page Table per entrare nel menu
      : status !== 'Occupato' ? //altriment se non è occupato
        alert('Tavolo è vuoto!') //avvisa che il tavaolo è vuoto
        : navigate(`/checkout/${tableNumber}/${id}/${amount}`); //altrimenti vai al menu page
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
        Stato: {status}
      </Typography>
      <Typography variant="h6" component="div" sx={{ marginTop: 1 }}>
        €{amount}
      </Typography>
      <Button id='checkout' variant="outlined" color="primary">
        Checkout
      </Button>
    </Box>
  )
}

export default TableComp