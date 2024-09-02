import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';

function Food({ imgSrc, name, ingredients, price }) {
    return (
        <Box sx={{
            width: 300,
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
                <Button variant="outlined" color="primary">
                    -
                </Button>
                <Button variant="outlined" color="primary">
                    +
                </Button>

            </Stack>
        </Box>

    )
}

export default Food