import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
const ArchitecturalWorks = () => {
  return (
    <Box sx={{position: "relative"}}>
        <Container maxWidth="xl" >
            <Typography variant="h4" letterSpacing={1.25}>ARCHITECTURAL <Box component="span" fontWeight={200}>DESIGN</Box></Typography>

        </Container>
        <Box sx={{position: "absolute", background: "red", height: 450, width: "100vw", left: 0}}>

        </Box>
    </Box>
  )
}

export default ArchitecturalWorks