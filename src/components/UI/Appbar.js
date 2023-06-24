import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink, Link as ReactLink } from 'react-router-dom';
import { Typography, AppBar, Container, Box, Link, IconButton } from '@mui/material'
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
        <Box sx={{display: "flex", flexDirection: "row", px:{xs:0, sm: .5, md:1.5, lg: 1.5, xl: 3 }, py:{xs:.5, sm:1.15, md: 1.2, lg: 1.25 }, alignItems: "center"}}>
          <Link component={ReactLink} to="/" >
            <Typography variant="body1" sx={{letterSpacing: -.5}} fontWeight={700} fontSize={{lg: 23}} lineHeight={1} color="primary.dark">AYN NICOLI LAQUINDANUM</Typography>
            <Box sx={{display: "flex", alignItems: "center", mx: "auto", width: "100%", justifyContent: "center", mt: .25}} >
              <Typography variant="body1" lineHeight={1} letterSpacing={.25} fontWeight={300} fontSize={12} color="primary.dark">LICENSED ARCHITECT</Typography>
              <Typography variant="body1" color="primary.dark" mx={1} fontSize={16} lineHeight={1} fontWeight={400}>|</Typography>
              <Typography variant="body1" lineHeight={1} letterSpacing={.25} fontWeight={300} fontSize={12} color="primary.dark">GRAPHIC ARTIST</Typography>
            </Box>
          </Link>
          <Box 
            sx={{
              ml: { xs:0, md:"auto" }, 
              display:{ xs: "none", md: "flex" }, 
              flexDirection: "row", 
              gap: { md:4, lg: 5,xl: 7.5 },
              alignItems: "flex-end",
            }}
            >
            <Link component={NavLink} to="/about" draggable={false}><Typography color="primary.dark" sx={linkStyles}>ABOUT</Typography></Link>
            <Link component={NavLink} to="/contact" draggable={false}><Typography color="primary.dark" sx={linkStyles}>CONTACT</Typography></Link>
          </Box>
        </Box>
      </Container>
    </AppBar>
  )
}

export default Appbar