import React, { useState } from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';


function Food({ id, imgSrc, name, ingredients, price, callback }) {
    
    const [quantity, setQuantity] = useState(0);

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
            callback(quantity, name)
        }

    }


    return (
        <>
            <Box sx={{
                width: 250,
                padding: 2,
                border: '1px solid #e0e0e0',
                borderRadius: 2,
                textAlign: 'center',
            }}
            >
                <img
                    src={imgSrc}
                    alt={name}
                    style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                />
                <Typography variant="h6" component="div" sx={{ marginTop: 2 }}>
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                    {ingredients}
                </Typography>
                <Typography variant="h6" component="div" sx={{ marginTop: 1 }}>
                    €{price.toFixed(2)}
                </Typography>
                <Stack direction="row" spacing={2} justifyContent="center" sx={{ marginTop: 2 }}>
                    <Button onClick={handleDecrement} variant="outlined" color="primary">
                        -
                    </Button>
                    <span>{quantity}</span>
                    <Button onClick={handleIncrement} variant="outlined" color="primary">
                        +
                    </Button>

                    <Button onClick={handleAddBtn} variant="outlined" color="primary">
                        Add
                    </Button>


                </Stack>
            </Box>
        </>

    )
}

export default Food