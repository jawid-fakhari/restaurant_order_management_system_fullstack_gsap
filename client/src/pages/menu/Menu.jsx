import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MenuItem from '../../components/menuItam/MenuItem'
import { Button, Container, Grid2 } from '@mui/material';
import Navbar from '../../components/navbar/Navbar';

function Menu() {

    const [menuItems, setMenuItems] = useState([]);

    //salvare i dati di ordinazione di ogni tavolo
    const [tableOrder, setTableOrder] = useState([]);



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
        let newOrder = tableOrder
        newOrder.push(orderData)
        setTableOrder(newOrder)
    }
    
    //handle avvia ordine
    const handleAvviaOrdine = (tableOrder) => {
        console.log(tableOrder);
    }


    return (
        <>
            <Navbar />
            <Container>
                <Grid2 container spacing={2}>
                    {menuItems.map((item, i) => {
                        const id = item._id;
                        const name = item.name;
                        const price = item.price;
                        const ingredients = item.ingredients;
                        const imgSrc = item.image;
                        return <MenuItem
                            key={i}
                            id={id}
                            name={name}
                            price={price}
                            ingredients={ingredients}
                            imgSrc={imgSrc}
                            callback={callbackFromChildComponent}
                        />
                    })}
                </Grid2>
                <Button onClick={handleAvviaOrdine(tableOrder)}>
                    Avvia Ordine
                </Button>
            </Container>
        </>
    )
}

export default Menu