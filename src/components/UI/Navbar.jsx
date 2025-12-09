import React from 'react'
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Typography, AppBar, Container, Box, Link, Grid, Button, IconButton } from '@mui/material';
import logo from "../../assets/logo/ayn-logo-100.png";
import Image from 'mui-image';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';

const containerProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  mx: { xs: 2, xl: 5},
  mt: {lg: 2}
}

const linkContainerProps = {
  display: "flex",
  gap: 4
}

const linkTextProps = {
  fontWeight: 600,
  letterSpacing: 1.25,
  color: "#333",
  fontSize: {xl: 17}
}

const iconButtonProps = {

}

const iconProps = {

}

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <AppBar component="nav" position="fixed" sx={{minHeight: 0, backgroundColor: "background.default", boxShadow: 0}}>
      <Box sx={containerProps}>
        <Box>
          <Button component={NavLink} to="/" draggable={false} sx={{borderRadius: "50%", p:.7, minWidth: 0, minHeight: 0, overflow: "hidden" }} color="primary">
            <Box sx={{height: {xs: 30, sm: 40, md: 45, lg:85}, width: "auto"}}>
              <Image src={logo} fit="cover" duration={0}/>
            </Box>
          </Button>
        </Box>
        <Box sx={linkContainerProps}>
          <Link component={NavLink} to="/about" draggable={false}>
            <Typography 
              color="primary.main" 
              sx={{
                ...linkTextProps, 
                // borderColor: pathname === "/about" ? "primary.light" : "transparent",
                // opacity: pathname === "/about" ? 1 : .7,
                // fontWeight: pathname === "/about" ? 700 : 500,
                // letterSpacing: pathname === "/about" ? .75 : .25,
              }}
              variant='h6'
            >
              ABOUT
            </Typography>
          </Link>
          <Link component={NavLink} to="/contact" draggable={false}>
            <Typography 
              color="primary.main" 
              sx={{
                ...linkTextProps, 
                // borderColor: pathname === "/contact" ? "primary.light" : "transparent",
                // opacity: pathname === "/contact" ? 1 : .7,
                // fontWeight: pathname === "/contact" ? 700 : 500,
                // letterSpacing: pathname === "/contact" ? .75 : .25,
              }}
              variant='h6'
            >
              CONTACT
            </Typography>
          </Link>
        </Box>
        <Box>
          <IconButton sx={iconButtonProps}><LinkedInIcon sx={iconProps}/></IconButton>
          <IconButton sx={iconButtonProps}><GoogleIcon sx={iconProps}/></IconButton>
        </Box>
      </Box>
    </AppBar>
  )
}

export default Navbar