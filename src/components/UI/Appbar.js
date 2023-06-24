import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink, Link as ReactLink } from 'react-router-dom';
import { Typography, AppBar, Container, Box, Link, IconButton, Grid, Button, ButtonBase } from '@mui/material'
import logo from "../../assets/logo/ayn-logo-100.png"

const linkStyles = {
  fontSize: { md: 15, lg: 15, },
  fontWeight: 500,
  letterSpacing: .5,
  borderBottom: "2px solid transparent",
  lineHeight: 1.8,
  opacity: .7,
  transition: "all 500ms ease 200ms",
  "&:hover": {
    borderColor: "primary.light",
    opacity: 1,
  }
}
const Appbar = () => {
  return (
    <AppBar component="nav" position="fixed" sx={{minHeight: 0, backgroundColor: "background.default", boxShadow: 5}}>
      <Container maxWidth="xl" sx={{position: "relative"}}>
        <Grid container sx={{py:{xs:.5, sm:1.15, md: 1.2, lg: .75 }, minHeight: 60}}>
          <Grid item xs={4} sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Button size="medium"><Typography color="primary.dark" variant="h6" sx={{fontWeight: 700, lineHeight: 1, fontSize: 20, letterSpacing: -.5}}>ARCHITECTURAL <Box component="span" fontWeight={400}>DESIGN</Box></Typography></Button>
            <Box sx={{height: 6, width: 6, borderRadius: "50%", backgroundColor: "text.disabled"}}></Box>
            <Button size="medium"><Typography color="primary.dark" variant="h6" sx={{fontWeight: 700, lineHeight: 1, fontSize: 20, letterSpacing: -.5}}>GRAPHIC <Box component="span" fontWeight={400}>DESIGN</Box></Typography></Button>  
          </Grid>
          <Grid 
            item 
            sx={{
              ml: { xs:0, md:"auto" }, 
              display:{ xs: "none", md: "flex" }, 
              flexDirection: "row", 
              gap: { md:4, lg: 5,xl: 7.5 },
              alignItems: "center",
              justifyContent: "right"
            }}
          >
            <Link component={NavLink} to="/about" draggable={false}><Typography color="primary.dark" sx={linkStyles}>ABOUT</Typography></Link>
            <Link component={NavLink} to="/contact" draggable={false}><Typography color="primary.dark" sx={linkStyles}>CONTACT</Typography></Link>
          </Grid>
        </Grid>
        <Box sx={{position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", p:.25}}>
          <ButtonBase component={NavLink} to="/" draggable={false} sx={{border:1, borderRadius: "50%", borderColor: "text.disabled", p:.25}}><img src={logo} fit="cover" height={50} width={50}/></ButtonBase>
        </Box>
      </Container>
    </AppBar>
  )
}

export default Appbar