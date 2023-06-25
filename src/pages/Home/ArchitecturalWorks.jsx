import { useState, useEffect } from 'react'
import { Box, Container, Grid, Typography, Slide, Fade, ButtonBase } from '@mui/material';
import { useAuthContext } from '../../hooks/useAuthContext';
import Showcase from './Showcase.jsx';


const ArchitecturalWorks = () => {
  const { architecturalProjects } = useAuthContext();
  const [ activeProjects, setActiveProjects ] = useState(null);

  useEffect(() => {
    if(architecturalProjects) setActiveProjects([...architecturalProjects.interior, ...architecturalProjects.exterior ])
  }, [architecturalProjects])
  
  console.log(activeProjects)
  if(activeProjects) return (
    <Fade appear={true} in={true} timeout={{ enter: 1000, exit: 800 }} style={{ transitionDelay: "200ms" }}>
      <Box sx={{position: "relative", height: "100%", backgroundColor: "background.default"}}>
        <Container maxWidth="xl" sx={{pt: 0, height: "100%"}}>
          <Grid container sx={{height: "100%"}}>
            <Slide direction="down" in={true} mountOnEnter unmountOnExit timeout={800} >
              <Grid item xs={3.2} sx={{zIndex: 2, backgroundColor: "primary.main", display: "flex", flexDirection: "column", justifyContent: "center", p: 2, mb: 5, pb: 20, boxShadow: 2}}>
                <Fade appear={true} in={true} timeout={{ enter: 800, exit: 800 }} style={{ transitionDelay: "700ms" }}>
                  <ButtonBase 
                    onClick={() => setActiveProjects([...architecturalProjects.interior, ...architecturalProjects.exterior ])}
                    align="left" 
                    sx={{display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "left"}}
                  >
                    <Typography variant="h2" lineHeight={1.1} fontWeight={700} sx={{opacity: .95}} fontSize={{lg: 42}} color="background.default" ml={.25}>ARCHITECTURAL</Typography>
                    <Typography variant="h3" fontWeight={200} lineHeight={1.1} sx={{opacity: .8}} fontSize={{lg: 42}} letterSpacing={1} color="background.paper">DESIGN</Typography>
                  </ButtonBase>
                </Fade>
                <Box align="left" sx={{mt: 5, display: "flex", flexDirection: "column", textAlign:"left", alignItems: "flex-start"}}>
                  <Fade appear={true} in={true} timeout={{ enter: 800, exit: 800 }} style={{ transitionDelay: "1200ms" }}>
                    <ButtonBase onClick={() => setActiveProjects(architecturalProjects.interior)}>
                      <Typography variant="body1" letterSpacing={3} fontWeight={100} sx={{opacity: .7}} lineHeight={1.8} fontSize={18} color="background.default">INTERIOR VISUALIZATIONS</Typography>
                    </ButtonBase>
                  </Fade>
                  <Fade appear={true} in={true} timeout={{ enter: 800, exit: 800 }} style={{ transitionDelay: "1500ms" }}>
                    <ButtonBase>
                      <Typography variant="body1" letterSpacing={3} fontWeight={100} sx={{opacity: .7}} lineHeight={1.8} fontSize={18} color="background.default">EXTERIOR VISUALIZATIONS</Typography>
                    </ButtonBase>                
                  </Fade>
                </Box>
              </Grid>
            </Slide>
            <Fade appear={true} in={true} timeout={{ enter: 800, exit: 800 }} style={{ transitionDelay: "2000ms" }}>
              <Grid item xs={8.8} sx={{zIndex: 2, display: "flex", flexDirection: "column", height: "100%", overflow: "auto", width: "100%"}}>
                <Showcase projects={activeProjects}/>
              </Grid>
            </Fade>
          </Grid>
        </Container>
      </Box>
    </Fade>
  )
}

export default ArchitecturalWorks