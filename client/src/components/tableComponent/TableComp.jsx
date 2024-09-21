import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function TableComp({ id, tableNumber, onTableClick, amount, status }) {
  //**** devo collegare il checkout button al page di checkout
  const navigate = useNavigate();

  const cliclkHandler = (e) => {
    navigate(`/checkout/${tableNumber}/${id}/${amount}`); //altrimenti vai al menu page
  }

  return (
    <Box
      sx={{
        width: 230,
        padding: 3,
        border: '1px solid #e0e0e0',
        borderRadius: 2,
        textAlign: 'center',
        cursor: 'pointer',
        backgroundColor: status === 'Occupato' ? '#ffe0cc' : '#f0f4c3',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          transform: 'scale(1.02)',
        },
      }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{
          marginTop: 2,
          color: status === 'Occupato' ? '#d32f2f' : '#388e3c',
        }}
        >
        Tavolo: {tableNumber}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          marginTop: 2,
          color: status === 'Occupato' ? '#d32f2f' : '#388e3c',
        }}
      >
        Stato: {status}
      </Typography>
      <Typography
        variant="h6"
        component="div"
        sx={{ marginTop: 1}}
      >
        €{amount}
      </Typography>
      <Button
        id='checkout'
        variant="outlined"
        sx={{
          marginTop: 2,
          width: '100%',
          backgroundColor: '#ea8116',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc6e14',
          },
        }}
        onClick={(e) => cliclkHandler(e)}
      >
        Checkout
      </Button>
    </Box>
  )
}

export default TableComp