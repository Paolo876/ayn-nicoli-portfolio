import React from 'react'
import { Box, Container, Grid, Typography, Slide, Fade } from '@mui/material';
import { useAuthContext } from '../../hooks/useAuthContext';
import Showcase from './Showcase.jsx';


const ArchitecturalWorks = () => {
  const { architecturalProjects } = useAuthContext();

  const projects = [...architecturalProjects.interior, ...architecturalProjects.exterior ];

  return (
    <Box sx={{position: "relative", height: "100%", backgroundColor: "background.paper"}}>
      <Container maxWidth="xl" sx={{pt: 0, height: "100%"}}>
        <Grid container sx={{height: "100%"}}>
          <Slide direction="down" in={true} mountOnEnter unmountOnExit timeout={800} >
            <Grid item xs={3.2} sx={{zIndex: 2, backgroundColor: "primary.main", display: "flex", flexDirection: "column", justifyContent: "center", p: 2, mb: 5, pb: 20, boxShadow: 2}}>
              <Fade appear={true} in={true} timeout={{ enter: 800, exit: 800 }} style={{ transitionDelay: "700ms" }}>
                <Box align="left">
                  <Typography variant="h2" lineHeight={1.1} fontWeight={700} sx={{opacity: .95}} fontSize={{lg: 42}} color="background.default" ml={.25}>ARCHITECTURAL</Typography>
                  <Typography variant="h3" fontWeight={200} lineHeight={1.1} sx={{opacity: .8}} fontSize={{lg: 42}} letterSpacing={1} color="background.paper">DESIGN</Typography>
                </Box>
              </Fade>
              <Box align="left" sx={{mt: 5}}>
                <Fade appear={true} in={true} timeout={{ enter: 800, exit: 800 }} style={{ transitionDelay: "1200ms" }}>
                  <Typography variant="body1" letterSpacing={3} fontWeight={100} sx={{opacity: .7}} lineHeight={1.8} fontSize={18} color="background.default">INTERIOR VISUALIZATIONS</Typography>
                </Fade>
                <Fade appear={true} in={true} timeout={{ enter: 800, exit: 800 }} style={{ transitionDelay: "1500ms" }}>
                  <Typography variant="body1" letterSpacing={3} fontWeight={100} sx={{opacity: .7}} lineHeight={1.8} fontSize={18} color="background.default">EXTERIOR VISUALIZATIONS</Typography>
                </Fade>
              </Box>
            </Grid>
          </Slide>
          <Grid item xs={8.8} sx={{zIndex: 2, display: "flex", flexDirection: "column", height: "100%", overflow: "auto", width: "100%"}}>
            <Showcase projects={projects}/>
          </Grid>
        </Grid>
      </Container>

    </Box>
  )
}

export default ArchitecturalWorks