import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Box, Button, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

function Checkout() {
    //**** collegare all'API di checkout by id per avere informazioni e renderizzarli qui
    //prendere tableNumber e id dal url tramite useParams
    const { tableNumber, id } = useParams();

    return (
        <>
            <Navbar />
            <Box sx={{
                width: 450,
                padding: 2,
                border: '1px solid #e0e0e0',
                borderRadius: 2,
                textAlign: 'center',
                cursor: 'pointer'
            }}
            >
                <Typography variant="h6" component="div" sx={{ marginTop: 2 }}>
                    Tavolo: {tableNumber}
                </Typography>
                <div>
                    {/* questo si ripeterà x il numero di ordini */}
                    <p>quantità titolo: ------------------------- €€</p>
                </div>
                <Button variant="outlined" color="primary">
                    Chiudere il tavolo
                </Button>
            </Box>
        </>
    )
}

export default Checkout