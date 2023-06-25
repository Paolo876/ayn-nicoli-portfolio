import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { useAuthContext } from '../../hooks/useAuthContext';
import Showcase from './Showcase.jsx';


const GraphicWorks = () => {
  const { graphicProjects } = useAuthContext();

  const projects = [...graphicProjects.illustrations, ...graphicProjects.typographies, ...graphicProjects.print, ...graphicProjects.logo ];
  console.log(projects)
  return (
    <Box sx={{position: "relative", height: "100%", backgroundColor: "background.paper"}}>
      <Container maxWidth="xl" sx={{pt: 0, height: "100%"}}>
        <Grid container sx={{height: "100%"}}>
          <Grid item xs={3.2} sx={{zIndex: 2, backgroundColor: "secondary.main", display: "flex", flexDirection: "column", justifyContent: "center", p: 2, mb: 5, pb: 20, boxShadow: 2}}>
            <Box align="left" sx={{}}>
              <Typography variant="h2" lineHeight={1.1} fontWeight={700} sx={{opacity: .95}} fontSize={{lg: 48}} color="background.default">GRAPHIC</Typography>
              <Typography variant="h3" fontWeight={200} lineHeight={1.1} sx={{opacity: .8}} fontSize={{lg: 48}} letterSpacing={1} color="background.paper">DESIGN</Typography>
            </Box>
            <Box align="left" sx={{mt: 5}}>
              <Typography variant="body1" letterSpacing={3} fontWeight={100} sx={{opacity: .7}} lineHeight={1.8} fontSize={18} color="background.default">DIGITAL ILLUSTRATIONS</Typography>
              <Typography variant="body1" letterSpacing={3} fontWeight={100} sx={{opacity: .7}} lineHeight={1.8} fontSize={18} color="background.default">TYPOGRAPHIES</Typography>
              <Typography variant="body1" letterSpacing={3} fontWeight={100} sx={{opacity: .7}} lineHeight={1.8} fontSize={18} color="background.default">LOGO DESIGNS</Typography>
              <Typography variant="body1" letterSpacing={3} fontWeight={100} sx={{opacity: .7}} lineHeight={1.8} fontSize={18} color="background.default">PRINT DESIGNS</Typography>
            </Box>
          </Grid>
          <Grid item xs={8.8} sx={{zIndex: 2, display: "flex", flexDirection: "column", height: "100%", overflow: "auto", width: "100%"}}>
            <Showcase projects={projects}/>
          </Grid>
        </Grid>
      </Container>

    </Box>
  )
}

export default GraphicWorks