import { useState, useEffect } from 'react'
import { Box, Container, Grid, Typography, Slide, Fade, ButtonBase } from '@mui/material';
import { useAuthContext } from '../../hooks/useAuthContext';
import Showcase from './Showcase.jsx';


const GraphicWorks = ({ setShowModal }) => {
  const { graphicProjects } = useAuthContext();
  const [ activeProjects, setActiveProjects ] = useState(null);

  useEffect(() => {
    if(graphicProjects) setActiveProjects({id: "all", projects : [...graphicProjects.illustrations, ...graphicProjects.typographies, ...graphicProjects.print, ...graphicProjects.logo ]})
  }, [graphicProjects])

  const handleClick = (id) => {
    setActiveProjects(null)
    if(id === "all") setTimeout(() => setActiveProjects({id: "all", projects : [...graphicProjects.illustrations, ...graphicProjects.typographies, ...graphicProjects.print, ...graphicProjects.logo ]}), 50)
    if(id === "illustrations") setTimeout(() => setActiveProjects({id: "illustrations", projects : graphicProjects.illustrations}), 50)
    if(id === "typographies") setTimeout(() => setActiveProjects({id: "typographies", projects : graphicProjects.typographies}), 50)
    if(id === "print") setTimeout(() => setActiveProjects({id: "print", projects : graphicProjects.print}), 50)
    if(id === "logo") setTimeout(() => setActiveProjects({id: "logo", projects : graphicProjects.logo}), 50)
  }


  return (
    <Fade appear={true} in={true} timeout={{ enter: 1000, exit: 800 }} style={{ transitionDelay: "200ms" }}>
      <Box sx={{position: "relative", height: "100%", backgroundColor: "background.default"}}>
        <Container maxWidth="xl" sx={{pt: 0, height: "100%"}}>
          <Grid container sx={{height: "100%"}}>
            <Slide direction="down" in={true} mountOnEnter unmountOnExit timeout={800} >
              <Grid item sm={3.75} md={4} lg={3.2} sx={{zIndex: 2, backgroundColor: "secondary.main", display: "flex", flexDirection: "column", px: {sm:1, md:2}, maxHeight: {sm: "60vh", md: "70vh", lg: "75vh"}, py: 30, boxShadow: 2}}>
                <Fade appear={true} in={true} timeout={{ enter: 800, exit: 800 }} style={{ transitionDelay: "700ms" }}>
                  <ButtonBase 
                    disableRipple
                    onClick={() => handleClick("all")}
                    sx={{display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "left"}}
                  >    
                    <Box sx={{ transition: "all 250ms ease 50ms", transform: activeProjects && activeProjects.id === "all" ? "scale(1.025)" : "scale(1)" }} align="left" >
                      <Typography variant="h2" lineHeight={1.1} fontWeight={700} sx={{opacity: .95}} fontSize={{sm: 27, md: 36, lg: 38, xl: 48}} color="background.default">GRAPHIC</Typography>
                      <Typography variant="h3" fontWeight={200} lineHeight={1.1} sx={{opacity: .8}} fontSize={{sm: 27, md: 36, lg: 38, xl: 48}} letterSpacing={1} color="background.paper">DESIGN</Typography>
                    </Box>
                  </ButtonBase>
                </Fade>

                <Box align="left" sx={{mt: 5, display: "flex", flexDirection: "column", textAlign:"left", alignItems: "flex-start"}}>
                  <Fade appear={true} in={true} timeout={{ enter: 800, exit: 800 }} style={{ transitionDelay: "1200ms" }}>
                    <ButtonBase disableRipple onClick={() => handleClick("illustrations")} sx={{ml: .5}}> 
                      <Typography 
                        variant="body1" 
                        letterSpacing={{md: 2, lg:3}} 
                        sx={{
                          transition: "all 250ms ease 25ms", 
                          fontWeight: activeProjects && activeProjects.id === "illustrations" ? 400 : 200,
                          opacity: activeProjects && activeProjects.id === "illustrations" ? .95 : .7, 
                          transform: activeProjects && activeProjects.id === "illustrations" ? "scale(1.03)" : "scale(1)" 
                        }} 
                        lineHeight={2} 
                        align="left"
                        fontSize={{sm: 11, md: 14, lg: 14, xl:18}}
                        color="background.default"
                      >
                        DIGITAL ILLUSTRATIONS
                      </Typography>
                    </ButtonBase>
                  </Fade>
                  <Fade appear={true} in={true} timeout={{ enter: 800, exit: 800 }} style={{ transitionDelay: "1500ms" }}>
                    <ButtonBase disableRipple  onClick={() => handleClick("logo")} sx={{ml: .5}}>
                      <Typography 
                        variant="body1" 
                        letterSpacing={{md: 2, lg:3}} 
                        sx={{
                          transition: "all 250ms ease 25ms", 
                          fontWeight: activeProjects && activeProjects.id === "logo" ? 400 : 200,
                          opacity: activeProjects && activeProjects.id === "logo" ? .95 : .7, 
                          transform: activeProjects && activeProjects.id === "logo" ? "scale(1.03)" : "scale(1)" 
                        }} 
                        lineHeight={2} 
                        align="left"
                        fontSize={{sm: 11, md: 14, lg: 14, xl:18}}
                        color="background.default"
                      >
                        LOGO DESIGNS
                      </Typography>
                    </ButtonBase>
                  </Fade>
                  <Fade appear={true} in={true} timeout={{ enter: 800, exit: 800 }} style={{ transitionDelay: "1800ms" }}>
                    <ButtonBase disableRipple onClick={() => handleClick("typographies")} sx={{ml: .5}}>
                      <Typography 
                        variant="body1" 
                        letterSpacing={{md: 2, lg:3}} 
                        sx={{
                          transition: "all 250ms ease 25ms", 
                          fontWeight: activeProjects && activeProjects.id === "typographies" ? 400 : 200,
                          opacity: activeProjects && activeProjects.id === "typographies" ? .95 : .7, 
                          transform: activeProjects && activeProjects.id === "typographies" ? "scale(1.03)" : "scale(1)" 
                        }} 
                        lineHeight={2} 
                        align="left"
                        fontSize={{sm: 11, md: 14, lg: 14, xl:18}}
                        color="background.default"
                      >
                        TYPOGRAPHIES
                      </Typography>
                    </ButtonBase>
                  </Fade>
                  <Fade appear={true} in={true} timeout={{ enter: 800, exit: 800 }} style={{ transitionDelay: "2200ms" }}>
                    <ButtonBase disableRipple onClick={() => handleClick("print")} sx={{ml: .5}}>
                      <Typography 
                        variant="body1" 
                        letterSpacing={{md: 2, lg:3}} 
                        sx={{
                          transition: "all 250ms ease 25ms", 
                          fontWeight: activeProjects && activeProjects.id === "print" ? 400 : 200,
                          opacity: activeProjects && activeProjects.id === "print" ? .95 : .7, 
                          transform: activeProjects && activeProjects.id === "print" ? "scale(1.03)" : "scale(1)" 
                        }} 
                        lineHeight={2} 
                        align="left"
                        fontSize={{sm: 11, md: 14, lg: 14, xl:18}}
                        color="background.default"
                      >
                        PRINT DESIGNS
                      </Typography>
                    </ButtonBase>
                  </Fade>
                </Box>
              </Grid>
            </Slide>
            <Fade appear={activeProjects !== null} in={activeProjects !== null} timeout={{ enter: 1200, exit: 800 }} style={{ transitionDelay: "2600ms" }}>
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

export default GraphicWorks