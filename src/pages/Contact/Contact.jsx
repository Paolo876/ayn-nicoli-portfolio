import React from 'react'
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Appbar from '../../components/UI/Appbar';
import InquiryForm from './InquiryForm';
import EmailIcon from '@mui/icons-material/Email';


const Contact = () => {
  return (
    <Box sx={{display: "flex", flexDirection:"column", alignItems: "space-between", height: "100vh"}}>
      <Appbar/>
      <Container maxWidth="xl" sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", pt: 5 }}>
        <Grid container sx={{ boxShadow: 20, backgroundColor: "primary.main", color: "background.default", height: "80vh"}}>
          <Grid item xs={12}>
            <Typography variant="h1" fontSize={{lg: 60}}>Let's Work Together</Typography>
          </Grid>
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
                size="large"
                startIcon={<EmailIcon/>}
                sx={{
                  textTransform: "none",
                  textDecoration: "underline",
                  fontWeight: 300,
                  lineHeight: 2,
                  letterSpacing: .15,
                  fontSize: 18,
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