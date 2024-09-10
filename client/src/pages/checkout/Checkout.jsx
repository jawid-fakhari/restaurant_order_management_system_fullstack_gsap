import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Box, Button, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function Checkout() {
    //**** collegare all'API di checkout by id per avere informazioni e renderizzarli qui
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

    //render tutti orders nelc checkout
    const tableOrders = orders.map((order, i) => {
        const { name, quantity, price } = order;
        return <div key={i}>
            <p>
                <span>{quantity} </span>
                <span>{name} </span>
                <span> {price} €</span>
            </p>
        </div>
    })

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
                {/* questo si ripeterà x il numero di ordini */}
                    {tableOrders}
                <p>Totale: {amount} €</p>
                <Button variant="outlined" color="primary">
                    Chiudere il tavolo
                </Button>
            </Box>
        </>
    )
}

export default Checkout