import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Box, Button, Container, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

function Checkout() {
    const navigate = useNavigate();

    //prendere tableNumber e id dal url tramite useParams
    const { tableNumber, id, amount } = useParams();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const fetchDataFromGetCheckoutById = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/checkout/${id}`, {});
                setOrders(response.data.orders)
            } catch (error) {
                console.error('Error in get checkout by id API: ' + error);
            }
        }
        fetchDataFromGetCheckoutById();
    }, []);

    //render tutti orders in checkout page
    const tableOrders = orders.map((order, i) => {
        const { name, quantity, price } = order;
        return (
            <Box key={i} sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 }}>
                <Typography variant="body1">{quantity} x {name}</Typography>
                <Typography variant="body1">{price.toFixed(2)} €</Typography>
            </Box>
        )
    })

    //button handlers
    async function closeBtn() {
        if (window.confirm("Vuoi chiudere il tavolo? ")) {
            await axios.delete(`http://localhost:5000/api/checkout/${id}`, {})
                .then(response => {
                    alert('Il tavolo è stato chiuso correttamente');
                    navigate('/tables');
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    return (
        <>
            <Navbar />
            <Container maxWidth="sm" sx={{ marginTop: 4 }}>
                <Box sx={{
                    padding: 3,
                    border: '1px solid #e0e0e0',
                    borderRadius: 2,
                    textAlign: 'center',
                    boxShadow: 3
                }}
                >
                    <Typography variant="h6" component="div" sx={{ marginBottom: 2 }}>
                        Tavolo: {tableNumber}
                    </Typography>
                    {tableOrders}
                    <Typography variant="h6" sx={{ marginTop: 2 }}>
                        Totale: {amount} €
                    </Typography>
                    <Button
                        onClick={closeBtn}
                        variant="outlined"
                        color="error"
                        sx={{ marginTop: 3, width: '100%' }}
                    >
                        Chiusura
                    </Button>
                </Box>
            </Container>
        </>
    )
}

export default Checkout