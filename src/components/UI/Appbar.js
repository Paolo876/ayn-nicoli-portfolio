import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink, Link as ReactLink } from 'react-router-dom';
import { Typography, AppBar, Container, Box, Link, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';


const Appbar = () => {
  return (
    <AppBar component="nav" position="fixed" sx={{minHeight: 0, background: "none", boxShadow: 0}}>
      <Container maxWidth="xl">
        <Box sx={{display: "flex", flexDirection: "row", px:{xs:0, sm: .5, md:1.5, lg: 1.5, xl: 3 }, py:{xs:.5, sm:1.15, md: 1.75, xl: 2 }, alignItems: "center"}}>
          <Link component={ReactLink} to="/" >
            <Typography variant="h2" sx={{letterSpacing: .5}} fontWeight={700} fontSize={{lg: 23}}>AYN NICOLI LAQUINDANUM</Typography>
          </Link>
        </Box>
      </Container>
    </AppBar>
  )
}

export default Appbar