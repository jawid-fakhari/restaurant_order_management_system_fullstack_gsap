import React from 'react'
import { useNavigate } from 'react-router-dom'
import TableComp from '../../components/tableComponent/TableComp'
import Navbar from '../../components/navbar/Navbar'
import { Container, Grid2 } from '@mui/material'


function Tables() {
    //il numero dei tavoli del ristorante e calcolo dei componenti
    const tableNumbers = 10
    const navigate = useNavigate();

    const handleTableClick = (tableNumber) => {
        // Reindirizza al menu passando il numero del tavolo
        navigate(`/menu/${tableNumber}`);
    }

    //calcolare la quantita dei tavoli
    const tableArray = new Array(tableNumbers).fill().map((_, i) => {
        return <TableComp 
        key={i}
        id={i}
        tableNumber={i +1}
        onTableClick = {handleTableClick}//passare callback func al comp.
        />
    });
    
    return (
        <>
            <Navbar />
            <Container>
                <Grid2 container spacing={2}>
                    {tableArray}
                </Grid2>
            </Container>
        </>
    )
}

export default Tables