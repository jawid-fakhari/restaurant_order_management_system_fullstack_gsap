import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import TableComp from '../../components/tableComponent/TableComp'
import Navbar from '../../components/navbar/Navbar'
import { Container, Grid2 } from '@mui/material'


function Tables() {
    //**** Collegare al API del checkoutS per ottenere i dati dal db e visualizzare i tavoli con questi dati:  Solo amount, e se c'è amount stato è occupato
    const [tablesData, setTablesData] = useState([]); // Stato per i dati dei tavoli

    //il numero dei tavoli del ristorante e calcolo dei componenti
    const tableNumbers = 10;
    const navigate = useNavigate();
    
    useEffect(() => {
        // Richiedi i dati dall'API
        axios.get('http://localhost:5000/api/checkout')
            .then(response => {
                setTablesData(response.data.checkout);
            })
            .catch(error => {
                console.error('Errore nel recupero dei dati:', error);
            });
    }, []);


    const handleTableClick = (tableNumber) => {
        // Reindirizza al menu passando il numero del tavolo
        navigate(`/menu/${tableNumber}`);
    }

    //calcolare la quantita dei tavoli e renderizzarli
    const tableArray = new Array(tableNumbers).fill().map((_, i) => {
        const tableData = tablesData.find(table => table.tableNumber === i + 1);// Trova i dati per il tavolo
        const amount = tableData ? tableData.totalPrice : 0; // Se non ci sono dati, imposta l'importo a 0
        const status = amount > 0 ? 'Occupato' : 'Libero'; // Se c'è un importo, il tavolo è occupato
        const id = tableData ? tableData._id : -1;
        return <TableComp
            key={i}
            id={id}
            tableNumber={i + 1}
            onTableClick={handleTableClick}//passare callback func al comp.
            amount={amount}
            status={status}
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