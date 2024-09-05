import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MenuItem from '../../components/menuItam/MenuItem'
import { Button, Container, Grid2 } from '@mui/material';
import Navbar from '../../components/navbar/Navbar';

function Menu() {

    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        //get products request
        const fetchDataFromGetAllProductsApi = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products', {});
                setMenuItems(response.data);
            } catch (error) {
                console.error('Error in getAllFriends API: ' + error);
            }
        }
        //fetch menu API
        fetchDataFromGetAllProductsApi();
    }, [])
    //handle add order
    const callbackFromChildComponent = (qty, name) => {
        console.log(qty, name)
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
                <Button>
                    Avvia Ordine
                </Button>
            </Container>
        </>
    )
}

export default Menu