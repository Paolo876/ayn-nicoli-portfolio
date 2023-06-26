import { useState, useEffect } from 'react'
import { Box, Container, Grid, Typography, Slide, Fade, ButtonBase } from '@mui/material';
import { useAuthContext } from '../../hooks/useAuthContext';
import Showcase from './Showcase.jsx';


const ArchitecturalWorks = ({ setShowModal }) => {
  const { architecturalProjects } = useAuthContext();
  const [ activeProjects, setActiveProjects ] = useState(null);

  useEffect(() => {
    if(architecturalProjects) setActiveProjects({id: "all", projects : [...architecturalProjects.interior, ...architecturalProjects.exterior ]})
  }, [architecturalProjects])
  
  const handleClick = (id) => {
    setActiveProjects(null)
    if(id === "all") setTimeout(() => setActiveProjects({id: "all", projects : [...architecturalProjects.interior, ...architecturalProjects.exterior ]}), 50)
    if(id === "interior") setTimeout(() => setActiveProjects({id: "interior", projects : architecturalProjects.interior}), 50)
    if(id === "exterior") setTimeout(() => setActiveProjects({id: "exterior", projects : architecturalProjects.exterior}), 50)
  }


  return (
    <Fade appear={true} in={true} timeout={{ enter: 1000, exit: 800 }} style={{ transitionDelay: "200ms" }}>
      <Box sx={{position: "relative", height: "100%", backgroundColor: "background.default"}}>
        <Container maxWidth="xl" sx={{pt: 0, height: "100%"}}>
          <Grid container sx={{height: "100%"}}>
            <Slide direction="down" in={true} mountOnEnter unmountOnExit timeout={800} >
              <Grid item sm={3.75} md={4} lg={3.2} sx={{zIndex: 2, backgroundColor: "primary.main", display: "flex", flexDirection: "column", px: {sm:1, md:2}, maxHeight: {sm: "60vh", md: "70vh", lg: "75vh"}, py: 30, boxShadow: 2}}>
                <Fade appear={true} in={true} timeout={{ enter: 800, exit: 800 }} style={{ transitionDelay: "700ms" }} mountOnEnter>
                  <ButtonBase 
                    disableRipple
                    onClick={() => handleClick("all")}
                    sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "left", }}
                  >
                    <Box sx={{ transition: "all 250ms ease 50ms", transform: activeProjects && activeProjects.id === "all" ? "scale(1.025)" : "scale(1)" }} align="left" >
                      <Typography variant="h2" lineHeight={1.1} fontWeight={700} sx={{opacity: .95}} fontSize={{sm: 19, md: 29, lg: 32, xl: 42}} color="background.default" ml={{md:.25}}>ARCHITECTURAL</Typography>
                      <Typography variant="h3" fontWeight={200} lineHeight={1.1} sx={{opacity: .8}} fontSize={{sm: 18, md: 29, lg: 32, xl: 42}} letterSpacing={1} color="background.paper">DESIGN</Typography>
                    </Box>
                  </ButtonBase>
                </Fade>
                <Box align="left" sx={{mt: 5, display: "flex", flexDirection: "column", textAlign:"left", alignItems: "flex-start"}}>
                  <Fade appear={true} in={true} timeout={{ enter: 800, exit: 800 }} style={{ transitionDelay: "1200ms" }}>
                    <ButtonBase disableRipple onClick={() => handleClick("interior")} sx={{ml: .5}}>
                      <Typography 
                        align="left"
                        fontSize={{sm: 10.5, md: 14, lg: 14, xl:18}}
                        variant="body1" 
                        letterSpacing={{md: 2, lg:3}} 
                        sx={{
                          transition: "all 250ms ease 25ms", 
                          fontWeight: activeProjects && activeProjects.id === "interior" ? 400 : 200,
                          opacity: activeProjects && activeProjects.id === "interior" ? .95 : .7, 
                          transform: activeProjects && activeProjects.id === "interior" ? "scale(1.03)" : "scale(1)" 
                        }} 
                        lineHeight={2.1} 
                        color="background.default"
                      >
                        INTERIOR VISUALIZATIONS
                      </Typography>
                    </ButtonBase>
                  </Fade>
                  <Fade appear={true} in={true} timeout={{ enter: 800, exit: 800 }} style={{ transitionDelay: "1500ms" }}>
                    <ButtonBase disableRipple onClick={() => handleClick("exterior")} sx={{ml: .5}}>
                      <Typography 
                        variant="body1" 
                        letterSpacing={{md: 2, lg:3}} 
                        sx={{
                          transition: "all 250ms ease 25ms", 
                          fontWeight: activeProjects && activeProjects.id === "exterior" ? 400 : 200,
                          opacity: activeProjects && activeProjects.id === "exterior" ? .95 : .7, 
                          transform: activeProjects && activeProjects.id === "exterior" ? "scale(1.03)" : "scale(1)" 
                        }} 
                        lineHeight={2.1}
                        align="left"
                        fontSize={{sm: 10.5, md: 14, lg: 14, xl:18}}
                        color="background.default"
                      >
                        EXTERIOR VISUALIZATIONS
                      </Typography>
                    </ButtonBase>                
                  </Fade>
                </Box>
              </Grid>
            </Slide>
            <Fade appear={activeProjects !== null} in={activeProjects !== null} timeout={{ enter: 1200, exit: 800 }} style={{ transitionDelay: "2000ms" }} unmountOnExit mountOnEnter>
              <Grid item sm={8.25} md={8} lg={8.8} sx={{zIndex: 2, display: "flex", flexDirection: "column", height: "100%", overflow: "auto", width: "100%"}}>
                {activeProjects && <Showcase projects={activeProjects.projects} setShowModal={setShowModal}/>}
              </Grid>
            </Fade>
          </Grid>
        </Container>
      </Box>
    </Fade>
  )
}

export default ArchitecturalWorks