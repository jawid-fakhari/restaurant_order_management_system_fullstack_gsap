import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';// per accedere ai parametri dell'url
import axios from 'axios'
import MenuItem from '../../components/menuItam/MenuItem'
import { Button, Container, Grid2, Typography } from '@mui/material';
import Navbar from '../../components/navbar/Navbar';

function Menu() {
    //prendi il numero del tavolo dall'url
    const { tableNumber } = useParams();
    //i piatti del menu
    const [menuItems, setMenuItems] = useState([]);

    //salvare i dati di ordinazione di ogni tavolo
    const [tableOrder, setTableOrder] = useState([]);

    //collegarsi al database per avere data del menu page
    useEffect(() => {
        //get products request
        const fetchDataFromGetAllProductsApi = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products', {});
                setMenuItems(response.data);
            } catch (error) {
                console.error('Error in get all products API: ' + error);
            }
        }
        //fetch menu API
        fetchDataFromGetAllProductsApi();
    }, [])

    //handle add order
    const callbackFromChildComponent = (orderData) => {
        setTableOrder((prevOrder) => [...prevOrder, orderData])
    }

    //handle avvia ordine
    const handleAvviaOrdine = async () => {
        const orderDetails = {
            tableNumber: tableNumber,
            orders: tableOrder,
        }
        //mandare orderDetails al postCheckout 
        await axios.post('http://localhost:5000/api/checkout', orderDetails, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => alert('I tuoi ordini sono stati accolti!'))
            .catch((error) => console.log(error));
    }

    //mostrare tutti i piatti nel menu
    const menuComponents = menuItems.map((item, i) => {
        const { _id, name, price, ingredients, image } = item;
        return (
            <Grid2 xs={12} sm={6} md={4} key={i}>
                <MenuItem
                    key={i}
                    id={_id}
                    name={name}
                    price={price}
                    ingredients={ingredients}
                    imgSrc={image}
                    callback={callbackFromChildComponent} //passare callback func al componente
                />
            </Grid2>
        )
    })


    return (
        <>
            <Navbar />
            <Container sx={{ marginTop: 4 }}>
                <Typography variant="h4" align="left" gutterBottom>
                    Menu
                </Typography>
                <Container sx={{ border: "1px solid red", display: "flex", justifyItems: "center" }}>

                    <Grid2 container spacing={3}>
                        {menuComponents}
                    </Grid2>
                </Container>
                <Button
                    onClick={handleAvviaOrdine}
                    variant='outlined'
                    color="success"
                    sx={{
                        marginTop: 3,
                        width: '100%',
                        height: '60px',
                        fontSize: '1.25rem',
                        fontWeight: 'bold',
                        borderRadius: '8px',
                        boxShadow: 3,
                        marginBottom: 2
                    }}
                >
                    Avvia Ordine
                </Button>
            </Container>
        </>
    )
}

export default Menu