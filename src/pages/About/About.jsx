import React from 'react'
import { Box, Modal, Fade } from "@mui/material";
import Appbar from '../../components/UI/Appbar';

const About = () => {
  return (
    <Box sx={{display: "flex", flexDirection:"column", alignItems: "space-between", height: "100vh"}}>
      <Appbar/>
    </Box>
  )
}

export default About