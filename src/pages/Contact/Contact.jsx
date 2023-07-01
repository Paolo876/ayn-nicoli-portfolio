import React from 'react'
import { Box, Button, Container, Grid, Typography, Fade, Slide } from "@mui/material";
import logo from "../../assets/logo/ayn-logo-100-grey.png"
import Appbar from '../../components/UI/Appbar';
import InquiryForm from './InquiryForm';
import EmailIcon from '@mui/icons-material/Email';
import Image from 'mui-image';


const Contact = () => {
  return (
      <Box sx={{display: "flex", flexDirection:"column", alignItems: "space-between", height: "100vh"}}>
        <Appbar/>
        {/* <Fade appear={true} in={true} timeout={{ enter: 1000, exit: 800 }} style={{ transitionDelay: "50ms" }}> */}
        <Slide direction="down" in={true} mountOnEnter unmountOnExit timeout={800} >
          <Container maxWidth="xl" sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", pt: 5 }}>
            <Grid container sx={{ boxShadow: 20, backgroundColor: "primary.main", color: "background.default", height: "80vh"}}>
              <Grid item xs={7} py={3} px={2} sx={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                <Box>
                  <Typography variant="h1" lineHeight={1.2} letterSpacing={.5}>Let's Work Together</Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
                  <Box sx={{height: 80, width: "auto"}}>
                    <Image src={logo} fit="cover"/>
                  </Box>
                  <Box>
                    <Typography variant="h3" lineHeight={1.05} letterSpacing={.25}>Ayn Laquindanum</Typography>
                    <Typography letterSpacing={.5} variant="body2">LICENSED ARCHITECT <Box component="span">|</Box> GRAPHIC DESIGNER</Typography>
                  </Box>
                </Box>
                <Box ml={1}>
                  <Button 
                    href="mailto:aynslaquindanum@gmail.com" 
                    target="_blank" 
                    variant="text" 
                    color="inherit"
                    size="large"
                    startIcon={<EmailIcon/>}
                    sx={{
                      textTransform: "none",
                      fontWeight: 300,
                      lineHeight: 2,
                      letterSpacing: .15,
                      fontSize: 25,
                    }}
                  >
                    aynslaquindanum@gmail.com
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={5} sx={{backgroundColor: "secondary.main"}}><InquiryForm/></Grid>
            </Grid>
          </Container>
        {/* </Fade> */}
        </Slide>
      </Box>
  )
}

export default Contact