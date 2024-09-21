import React, { useState } from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';


function Food({ id, imgSrc, name, ingredients, price, callback }) {

    const [quantity, setQuantity] = useState(0);
    const orderData = {
        name: name,
        quantity: quantity,
        price: price
    }

    const handleDecrement = () => {
        if (quantity > 0)
            setQuantity(prevCount => prevCount - 1)
    }
    const handleIncrement = () => {
        setQuantity(prevCount => prevCount + 1)
    }
    // onclick button, chiama callback function e manda i dati che vogliamo
    const handleAddBtn = () => {
        if (quantity >= 1) {
            callback(orderData)
        }
        //send to server GET checkout API
    }


    return (
        <Box sx={{
            width: 230,
            padding: 3,
            border: '1px solid #e0e0e0',
            borderRadius: 2,
            textAlign: 'center',
            backgroundColor: 'background.paper',
            boxShadow: 3,
            transition: 'all 0.3s ease',
            '&:hover': {
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                transform: 'scale(1.02)',
            }
        }}
        >
            <Box sx={{
                width: 'auto',
                height: '110px',
                overflow: 'hidden',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
            }}>
                <img
                    src={imgSrc}
                    alt={name}
                    style={{ width: '110%' }}
                />
            </Box>
            <Typography variant="h6" component="div" sx={{ marginTop: 2, fontWeight: 'bold' }}>
                {name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                {ingredients}
            </Typography>
            <Typography variant="h6" component="div" sx={{ marginTop: 1, fontWeight: 'bold' }}>
                €{price.toFixed(2)}
            </Typography>
            <Stack
                direction="row"
                spacing={2}
                justifyContent="space-between"
                alignItems="center"
                sx={{ marginTop: 2 }}>
                <Button onClick={handleDecrement} variant="outlined" color="primary">
                    -
                </Button>
                <Typography variant="body1" sx={{ width: '40px', textAlign: 'center' }}>
                    {quantity}
                </Typography>
                <Button onClick={handleIncrement} variant="outlined" color="primary">
                    +
                </Button>

            </Stack>
            <Button onClick={handleAddBtn} variant="outlined" color="secondary" sx={{ marginTop: 2, width: '100%' }}>
                Add
            </Button>
        </Box>
    )
}

export default Food