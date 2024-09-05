import React from 'react'
import TableComp from '../../components/tableComponent/TableComp'
import Navbar from '../../components/navbar/Navbar'
import { Container, Grid2 } from '@mui/material'


function Tables() {
    // const tables = [1,2,3,4];
    const tableArray = new Array(10).fill().map((_, i) => {
        return <TableComp 
        key={i}
        id={i}
        tableNumber={i +1}
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