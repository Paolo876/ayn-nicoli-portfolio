import React from 'react'
import { Box, Container, Grid, Typography } from "@mui/material";
import Appbar from '../../components/UI/Appbar';

const Contact = () => {
  return (
    <Box sx={{display: "flex", flexDirection:"column", alignItems: "space-between", height: "100vh"}}>
      <Appbar/>
    </Box>
  )
}

export default Contact