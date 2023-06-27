import React from 'react'
import { Box, Modal, Fade, Container, Grid, Typography } from "@mui/material";
import Appbar from '../../components/UI/Appbar';

const About = () => {
  return (
    <Box sx={{display: "flex", flexDirection:"column", alignItems: "space-between", height: "100vh"}}>
      <Appbar/>
      <Container maxWidth="xl" sx={{pt: 10}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{width:  "100%", height: 210, backgroundColor: "rgba(0,0,0,0.2)"}}>header</Box>
          </Grid>
          <Grid item xs={2.5}>
            <Box sx={{width:  "100%", height: 400, backgroundColor: "rgba(0,0,0,0.2)"}}>
              image
            </Box>
          </Grid>
          <Grid item xs={7}>
            <Box sx={{px: 3.2}}>
              <Typography variant="h2">Hi there!</Typography>
              <Typography variant="body1" sx={{fontWeight: 200, lineHeight: 1.3, fontSize: 32}} mt={7}>I'm Ayn, an Architect and a Graphic Designer. I've been in the industry of designing and creating since 2017.</Typography>
              <Typography variant="body1" sx={{fontWeight: 200, lineHeight: 1.3, fontSize: 32}} mt={3}>I am a passionate creative that has a good eye for design. For years, I've designed several types of projects, be it - Residential, Commercial, Offices.</Typography>
            </Box>
          </Grid>
          <Grid item xs={2.5}></Grid>

        </Grid>
      </Container>

    </Box>
  )
}

export default About