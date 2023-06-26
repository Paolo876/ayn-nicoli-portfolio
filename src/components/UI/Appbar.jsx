import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink, Link as ReactLink } from 'react-router-dom';
import { Typography, AppBar, Container, Box, Link, IconButton, Grid, Button, ButtonBase } from '@mui/material'
import logo from "../../assets/logo/ayn-logo-100.png"
import Image from 'mui-image';


const linkStyles = {
  fontSize: { sm: 12, md: 13, lg: 15 },
  fontWeight: 500,
  letterSpacing: .25,
  borderBottom: "2px solid transparent",
  lineHeight: 1.8,
  opacity: .7,
  transition: "all 500ms ease 200ms",
  "&:hover": {
    borderColor: "primary.light",
    opacity: 1,
  }
}

const projectLinkStyles = {
  fontWeight: 700,
  lineHeight: 1.1,
  fontSize: {sm: 12.5, md: 13, lg: 14, xl:17},
  letterSpacing: -.5,

}

const projectButtonStyles = {
  position: "relative",
  transition: "all 250ms ease",
  "&:hover": {
    opacity: 1,
  }
}

const Appbar = ({ isArchProjActive, setIsArchProjActive }) => {
  
  return (
    <AppBar component="nav" position="fixed" sx={{minHeight: 0, backgroundColor: "background.default", boxShadow: 2}}>
      <Container maxWidth="xl" sx={{position: "relative"}}>
        <Grid container sx={{py:{xs:.5, sm:1.15, md: 1.2, lg: .75 }, minHeight: 65}}>
          <Grid item sm={4.5} md={4.3} lg={3.3} xl={3.2} sx={{display: "flex", justifyContent: "center", alignItems: "center", px: .5}}>
            <Button 
              onClick={() => setIsArchProjActive(true)}
              sx={{...projectButtonStyles, transform: isArchProjActive ? "scale(1.05)" : "none", opacity: !isArchProjActive ? 1: .85, minWidth: 0, px: {sm:0, md: 1}}}
            >
              <Typography 
                color={isArchProjActive ? "primary.dark" : "primary.light"} 
                variant="h6" 
                sx={projectLinkStyles}
              >
                ARCHITECTURAL <Box component="span" fontWeight={400}>DESIGN</Box>
              </Typography>
              {isArchProjActive && <Box sx={{height: 2, width: "75%", position: "absolute", bottom: 1, backgroundColor: "primary.light", transition: "all 500ms ease"}}></Box>}
            </Button>

            <Box sx={{height: 6, width: 6, borderRadius: "50%", backgroundColor: "text.disabled", display: {sm: "none", md: "initial"}}}></Box>

            <Button 
              onClick={() => setIsArchProjActive(false)}
              sx={{...projectButtonStyles, transform: !isArchProjActive ? "scale(1.05)" : "none", opacity: !isArchProjActive ? 1: .85}}
            >
              <Typography 
                color={!isArchProjActive ? "secondary.dark" : "secondary.light"} 
                variant="h6" 
                sx={projectLinkStyles}
              >
                GRAPHIC <Box component="span" fontWeight={400}>DESIGN</Box>
              </Typography>
              {!isArchProjActive && <Box sx={{height: 2, width: "75%", position: "absolute", bottom: 1, backgroundColor: "secondary.light", transition: "all 500ms ease"}}></Box>}
            </Button>  
          </Grid>
          <Grid 
            item 
            sx={{
              ml: "auto", 
              display: "flex", 
              flexDirection: "row", 
              gap: { sm: 2, md:4, lg: 5,xl: 7.5 },
              alignItems: "center",
              justifyContent: "right"
            }}
          >
            <Link component={NavLink} to="/about" draggable={false}><Typography color="primary.dark" sx={linkStyles}>ABOUT</Typography></Link>
            <Link component={NavLink} to="/contact" draggable={false}><Typography color="primary.dark" sx={linkStyles}>CONTACT</Typography></Link>
          </Grid>
        </Grid>
        <Box sx={{position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", p:.25}}>
          <Button component={NavLink} to="/" draggable={false} sx={{borderRadius: "50%", p:.7, minWidth: 0, minHeight: 0, overflow: "hidden" }} color="primary">
            <Image src={logo} fit="cover" height={50} width={50}/>
          </Button>
        </Box>
      </Container>
    </AppBar>
  )
}

export default Appbar