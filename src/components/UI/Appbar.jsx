import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Typography, AppBar, Container, Box, Link, Grid, Button } from '@mui/material';
import { keyframes } from "@emotion/react";

import logo from "../../assets/logo/ayn-logo-100.png";
import Image from 'mui-image';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }`;


const linkStyles = {
  fontSize: { xs: 12, sm: 12, md: 12, lg: 14 },
  fontWeight: 500,
  letterSpacing: .25,
  borderBottom: "2px solid transparent",
  lineHeight: 1.8,
  transition: "all 300ms ease 200ms",
  animation: `${fadeIn} ease-in 800ms forwards`,
  "&:hover": {
    borderColor: "primary.light",
    opacity: 1,
  }
}

const projectLinkStyles = {
  fontWeight: 700,
  lineHeight: 1.1,
  fontSize: {xs: 13, sm: 12.5, md: 13, lg: 14, xl:17},
  letterSpacing: -.5,
  animation: `${fadeIn} ease-in 800ms forwards`,

}

const projectButtonStyles = {
  position: "relative",
  transition: "all 250ms ease",
  "&:hover": {
    opacity: 1,
  }
}

const Appbar = ({ isArchProjActive, setIsArchProjActive }) => {
  const { pathname } = useLocation();

  return (
    <AppBar component="nav" position="fixed" sx={{minHeight: 0, backgroundColor: "background.default", boxShadow: 2}}>
      <Container maxWidth="xl" sx={{position: "relative"}}>
        <Grid container sx={{py:{xs:.5, sm:1.15, md: 1.2, lg: .75 }, minHeight: pathname === "/" ? 65 : {xs: 45, sm: 55, md: 60, lg:65}}}>
          {pathname === "/" &&
            <Grid item xs={12} sm={4.5} md={4.3} lg={3.3} xl={3.2} sx={{display: "flex", justifyContent: "center", alignItems: "center", px: .5, pt: {xs: .5, sm: 0}, gap: {xs: 1, sm: 0}}} order={{xs: 2, sm: 1}}>
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
          }
          <Grid 
            item 
            sx={{
              ml: "auto", 
              display: "flex", 
              flexDirection: "row", 
              gap: { xs: 2.5, sm: 3, md:4, lg: 5,xl: 7.5 },
              alignItems: "center",
              justifyContent: "right",
              minHeight: {xs: 32, sm: "initial"}
            }}
            order={{xs: 1, sm: 2}}
          >
            {pathname !== "/" && <Link component={NavLink} to="/" draggable={false}><Typography color="primary.main" sx={linkStyles}>PROJECTS</Typography></Link>}
            <Link component={NavLink} to="/about" draggable={false}>
              <Typography 
                color="primary.main" 
                sx={{
                  ...linkStyles, 
                  borderColor: pathname === "/about" ? "primary.light" : "transparent",
                  opacity: pathname === "/about" ? 1 : .7,
                  fontWeight: pathname === "/about" ? 700 : 500,
                  letterSpacing: pathname === "/about" ? .75 : .25,
                }}
              >
                ABOUT
              </Typography>
            </Link>
            <Link component={NavLink} to="/contact" draggable={false}>
              <Typography 
                color="primary.main" 
                sx={{
                  ...linkStyles, 
                  borderColor: pathname === "/contact" ? "primary.light" : "transparent",
                  opacity: pathname === "/contact" ? 1 : .7,
                  fontWeight: pathname === "/contact" ? 700 : 500,
                  letterSpacing: pathname === "/contact" ? .75 : .25,
                }}
              >
                CONTACT
              </Typography>
            </Link>
          </Grid>
        </Grid>
        <Box sx={{position: "absolute", top: 0, left: pathname === "/" ? {xs: 35, sm:"50%"} : {xs: 35, sm: 50}, transform: "translateX(-50%)"}}>
          <Button component={NavLink} to="/" draggable={false} sx={{borderRadius: "50%", p:.7, minWidth: 0, minHeight: 0, overflow: "hidden" }} color="primary">
            <Box sx={{height: {xs: 30, sm: 40, md: 45, lg:50}, width: "auto"}}>
              <Image src={logo} fit="cover" duration={0}/>
            </Box>
          </Button>
        </Box>
      </Container>
    </AppBar>
  )
}

export default Appbar