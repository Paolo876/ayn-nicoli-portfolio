import React from 'react'
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Appbar from '../../components/UI/Appbar';
import InquiryForm from './InquiryForm';

const Contact = () => {
  return (
    <Box sx={{display: "flex", flexDirection:"column", alignItems: "space-between", height: "100vh"}}>
      <Appbar/>
      <Container maxWidth="xl" sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", pt: 5 }}>
        <Grid container sx={{ boxShadow: 20, backgroundColor: "primary.main", color: "background.default", height: "80vh"}}>
          <Grid item xs={8}>
            <Box>
              <Typography variant="h2">Ayn Laquindanum</Typography>
              <Typography>LICENSED ARCHITECT <Box component="span">|</Box> GRAPHIC DESIGNER</Typography>
            </Box>
            <Box>
              <Button 
                href="mailto:aynslaquindanum@gmail.com" 
                target="_blank" 
                variant="text" 
                color="inherit"
                sx={{
                  textTransform: "none",
                  textDecoration: "underline",
                  fontWeight: 400,
                  lineHeight: 2,
                }}
              >
                aynslaquindanum@gmail.com
              </Button>
            </Box>
          </Grid>
          <Grid item xs={4}><InquiryForm/></Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Contact