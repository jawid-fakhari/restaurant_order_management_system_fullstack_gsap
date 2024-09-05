import React from 'react'
import TableComp from '../../components/tableComponent/TableComp'
import Navbar from '../../components/navbar/Navbar'
import { Container, Grid2 } from '@mui/material'
function Tables() {
    return (
        <>
            <Navbar />
            <Container>
                <Grid2 container spacing={2}>
                    <TableComp />
                </Grid2>
            </Container>
        </>
    )
}

export default Tables