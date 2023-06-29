import React from 'react'
import { Box, Container, Grid, Typography } from "@mui/material";
import Appbar from '../../components/UI/Appbar';

const Contact = () => {
  return (
    <Box sx={{display: "flex", flexDirection:"column", alignItems: "space-between", height: "100vh"}}>
      <Appbar/>
      <Container maxWidth="xl" sx={{pt: 10}}>
        <Grid container>
          <Grid xs={12} align="center"><Typography variant="h3">Contact Me</Typography></Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Contact