import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Box, Container, Grid2, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Clients() {

    const tableNumbers = 10;
    const navigate = useNavigate();

    const cliclkHandler = (tableNumber) => {
        // Reindirizza al menu passando il numero del tavolo    
        navigate(`/menu/${tableNumber}`);
    }

    const tableArray = new Array(tableNumbers).fill().map((tableNumber, i) => {
        tableNumber = i + 1;
        return (
            <Box
                key={i}
                sx={{
                    width: 150,
                    height: 100,
                    padding: 2,
                    border: '2px solid #ea8116',
                    borderRadius: 4,
                    textAlign: 'center',
                    cursor: 'pointer',
                    margin: 2,
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.2s, background-color 0.3s',
                    '&:hover': {
                        backgroundColor: '#ffe0cc',
                        transform: 'scale(1.05)',
                    },
                }}
                onClick={() => cliclkHandler(tableNumber)}
            >
                <Typography variant="h6" component="div" sx={{ marginTop: 2, color: '#333' }}>
                    Tavolo: {tableNumber}
                </Typography>
            </Box>
        );
    });

    return (
        <>
            <Navbar />
            <Container>
                <Typography
                    variant='h4'
                    align="center"
                    sx={{ marginBottom: 4, color: '#ea8116', fontWeight: 'bold' }}
                >
                    Scegli il tuo tavolo
                </Typography>
                <Grid2
                    container
                    spacing={3}
                    justifyContent="center"
                    alignItems="center"
                >
                    {tableArray}
                </Grid2>
            </Container>
        </>
    );
}

export default Clients;
