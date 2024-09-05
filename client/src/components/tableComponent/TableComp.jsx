import React from 'react'
import { Box, Button, Typography } from '@mui/material'

function TableComp({id, tableNumber }) {
  return (
      <Box sx={{
          width: 250,
          padding: 2,
          border: '1px solid #e0e0e0',
          borderRadius: 2,
          textAlign: 'center',
      }}>
          <Typography variant="h6" component="div" sx={{ marginTop: 2 }}>
              Tavolo: {tableNumber}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
              Stato
          </Typography>
          <Typography variant="h6" component="div" sx={{ marginTop: 1 }}>
              €Amount
          </Typography>
          <Button variant="outlined" color="primary">
              Entera
          </Button>
    </Box>
  )
}

export default TableComp