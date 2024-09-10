import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Box, Container, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';


function Clients() {

    const tableNumbers = 10;
    const navigate = useNavigate();

    const cliclkHandler = (nt) => {
        // Reindirizza al menu passando il numero del tavolo
        console.log(nt);
        
        navigate(`/menu/${nt}`);
    }
    const tableArray = new Array(tableNumbers).fill().map((tableNumber, i) => {
        tableNumber = i +1;
        return <Box sx={{
            width: 150,
            height: 60,
            padding: 2,
            border: '1px solid #e0e0e0',
            borderRadius: 2,
            textAlign: 'center',
            cursor: 'pointer',
            margin: 5
        }}
        //funzione il box item rindrizza al callback func con onclick listener
            onClick={() => cliclkHandler(tableNumber)}
        >
            <Typography variant="h6" component="div" sx={{ marginTop: 2 }}>
                Tavolo: {tableNumber}
            </Typography>
        </Box>
    });

    return (
        <>
            <Navbar />
            <Container>
                <Typography variant='h5' marginBottom={5}>Scegli il tuo tavolo</Typography>
                {tableArray}
            </Container>
        </>
    )
}

export default Clients