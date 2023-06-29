import React from 'react'
import { Box, Container, Grid, Typography } from "@mui/material";
import Appbar from '../../components/UI/Appbar';
import InquiryForm from './InquiryForm';

const Contact = () => {
  return (
    <Box sx={{display: "flex", flexDirection:"column", alignItems: "space-between", height: "100vh"}}>
      <Appbar/>
      <Container maxWidth="xl" sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Grid container sx={{ boxShadow: 5, backgroundColor: "primary.main", color: "background.default", height: "75vh"}}>
          <Grid item xs={12}><InquiryForm/></Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Contact