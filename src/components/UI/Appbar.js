import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink, Link as ReactLink } from 'react-router-dom';
import { Typography, AppBar, Container, Box, Link, IconButton, Grid, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

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
      <Container maxWidth="xl">
        <Grid container sx={{py:{xs:.5, sm:1.15, md: 1.2, lg: .75 }}}>
          <Grid item xs={4}>
            <Link component={ReactLink} to="/" >
              {/* <Box>
                <Typography variant="body1" sx={{letterSpacing: -.25}} fontWeight={700} fontSize={{lg: 20}} lineHeight={1} color="primary.dark">AYN NICOLI LAQUINDANUM</Typography>
                <Box sx={{display: "flex", alignItems: "center", mx: "auto", width: "100%", justifyContent: "center", mt: .25}} >
                  <Typography variant="body1" lineHeight={1} letterSpacing={.25} fontWeight={300} fontSize={10.5} color="primary.dark">LICENSED ARCHITECT</Typography>
                  <Typography variant="body1" color="primary.dark" mx={1} fontSize={11} lineHeight={1} fontWeight={400}>|</Typography>
                  <Typography variant="body1" lineHeight={1} letterSpacing={.25} fontWeight={300} fontSize={10.5} color="primary.dark">GRAPHIC ARTIST</Typography>
                </Box>
              </Box> */}
            </Link>
          </Grid>
          <Grid 
            item 
            xs={8}              
            sx={{
              ml: { xs:0, md:"auto" }, 
              display:{ xs: "none", md: "flex" }, 
              flexDirection: "row", 
              gap: { md:4, lg: 5,xl: 7.5 },
              alignItems: "flex-end",
              justifyContent: "right"
            }}
          >
            <Link component={NavLink} to="/about" draggable={false}><Typography color="primary.dark" sx={linkStyles}>ABOUT</Typography></Link>
            <Link component={NavLink} to="/contact" draggable={false}><Typography color="primary.dark" sx={linkStyles}>CONTACT</Typography></Link>
          </Grid>
        </Grid>
        <Grid container sx={{pb: .25}}>
          <Grid item xs={4} sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <Button size="small"><Typography color="primary.dark" variant="body2" >ARCHITECTURAL PROJECTS</Typography></Button>
          <Button size="small"><Typography color="primary.dark" variant="body2">GRAPHIC DESIGN PROJECTS</Typography></Button>  
        </Grid>
        </Grid>
      </Container>
    </AppBar>
  )
}

export default Appbar