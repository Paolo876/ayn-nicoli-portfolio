import React from 'react'
import { Box, Modal, Fade, Container, Grid } from "@mui/material";
import Appbar from '../../components/UI/Appbar';

const About = () => {
  return (
    <Box sx={{display: "flex", flexDirection:"column", alignItems: "space-between", height: "100vh"}}>
      <Appbar/>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12}>header</Grid>
          <Grid item xs={4}>image container</Grid>
          <Grid item xs={8}>

          </Grid>
        </Grid>
      </Container>

    </Box>
  )
}

export default About