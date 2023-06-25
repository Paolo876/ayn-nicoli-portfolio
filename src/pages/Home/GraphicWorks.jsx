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
              <Grid item xs={3.2} sx={{zIndex: 2, backgroundColor: "secondary.main", display: "flex", flexDirection: "column", justifyContent: "center", p: 2, mb: 5, pb: 20, boxShadow: 2}}>
                <Fade appear={true} in={true} timeout={{ enter: 800, exit: 800 }} style={{ transitionDelay: "700ms" }}>
                  <ButtonBase 
                    onClick={() => handleClick("all")}
                    align="left" 
                    sx={{display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "left"}}
                  >                
                    <Typography variant="h2" lineHeight={1.1} fontWeight={700} sx={{opacity: .95}} fontSize={{lg: 48}} color="background.default">GRAPHIC</Typography>
                    <Typography variant="h3" fontWeight={200} lineHeight={1.1} sx={{opacity: .8}} fontSize={{lg: 48}} letterSpacing={1} color="background.paper">DESIGN</Typography>
                  </ButtonBase>
                </Fade>

                <Box align="left" sx={{mt: 5, display: "flex", flexDirection: "column", textAlign:"left", alignItems: "flex-start"}}>
                  <Fade appear={true} in={true} timeout={{ enter: 800, exit: 800 }} style={{ transitionDelay: "1200ms" }}>
                    <ButtonBase onClick={() => handleClick("illustrations")}> 
                      <Typography variant="body1" letterSpacing={3} fontWeight={100} sx={{opacity: .7}} lineHeight={1.8} fontSize={18} color="background.default">DIGITAL ILLUSTRATIONS</Typography>
                    </ButtonBase>
                  </Fade>
                  <Fade appear={true} in={true} timeout={{ enter: 800, exit: 800 }} style={{ transitionDelay: "1500ms" }}>
                    <ButtonBase onClick={() => handleClick("logo")}>
                      <Typography variant="body1" letterSpacing={3} fontWeight={100} sx={{opacity: .7}} lineHeight={1.8} fontSize={18} color="background.default">LOGO DESIGNS</Typography>
                    </ButtonBase>
                  </Fade>
                  <Fade appear={true} in={true} timeout={{ enter: 800, exit: 800 }} style={{ transitionDelay: "1800ms" }}>
                    <ButtonBase onClick={() => handleClick("typographies")}>
                    <Typography variant="body1" letterSpacing={3} fontWeight={100} sx={{opacity: .7}} lineHeight={1.8} fontSize={18} color="background.default">TYPOGRAPHIES</Typography>

                    </ButtonBase>
                  </Fade>
                  <Fade appear={true} in={true} timeout={{ enter: 800, exit: 800 }} style={{ transitionDelay: "2200ms" }}>
                    <ButtonBase onClick={() => handleClick("print")}>
                      <Typography variant="body1" letterSpacing={3} fontWeight={100} sx={{opacity: .7}} lineHeight={1.8} fontSize={18} color="background.default">PRINT DESIGNS</Typography>
                    </ButtonBase>
                  </Fade>
                </Box>
              </Grid>
            </Slide>
            <Fade appear={activeProjects !== null} in={activeProjects !== null} timeout={{ enter: 1200, exit: 800 }} style={{ transitionDelay: "2600ms" }}>
              <Grid item xs={8.8} sx={{zIndex: 2, display: "flex", flexDirection: "column", height: "100%", overflow: "auto", width: "100%"}}>
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