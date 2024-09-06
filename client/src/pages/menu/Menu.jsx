import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';// per accedere ai parametri dell'url
import axios from 'axios'
import MenuItem from '../../components/menuItam/MenuItem'
import { Button, Container, Grid2 } from '@mui/material';
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
    const handleAvviaOrdine = () => {
        const orderDetails = {
            tableNumber: tableNumber,
            orders: tableOrder,
        }
        //questi dati vanno salvati dove? prima nello context o direttamente in db
        console.log(orderDetails);   
    }

    //calcolare i piatti del menu e mosrarli 
    const menuComponents = menuItems.map((item, i) => {
        const { _id, name, price, ingredients, image } = item;
        return <MenuItem
            key={i}
            id={_id}
            name={name}
            price={price}
            ingredients={ingredients}
            imgSrc={image}
            callback={callbackFromChildComponent} //passare callback func al componente
        />
    })


    return (
        <>
            <Navbar />
            <Container>
                <Grid2 container spacing={2}>
                    {menuComponents}
                </Grid2>
                <Button onClick={handleAvviaOrdine} variant='outlined' color="success" sx={{ marginTop: 2 }}>
                    Avvia Ordine
                </Button>
            </Container>
        </>
    )
}

export default Menu