import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
const GraphicWorks = () => {
  return (
    <Box sx={{position: "relative", height: "100%", backgroundColor: "background.paper"}}>
      {/* <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", backgroundColor: "secondary.dark", width: "35vw", zIndex: 1}}></Box> */}
      <Container maxWidth="xl" sx={{pt: 0, height: "100%", pb: 10}}>
        <Grid container sx={{height: "100%"}}>
          <Grid item xs={4} sx={{zIndex: 2, backgroundColor: "secondary.main", display: "flex", flexDirection: "column", height: "100%", justifyContent: "center", p: 2, pb: 10}}>
            <Box align="left" sx={{}}>
              <Typography variant="h2" lineHeight={1.1} fontWeight={700} sx={{opacity: .95}} fontSize={{lg: 56}} color="background.default" ml={.35}>GRAPHIC</Typography>
              <Typography variant="h3" fontWeight={200} lineHeight={1.1} sx={{opacity: .8}} letterSpacing={1} color="background.paper">DESIGN</Typography>
            </Box>
            <Box align="left" sx={{mt: 5}}>
              <Typography variant="body1" letterSpacing={4.5} fontWeight={100} sx={{opacity: .7}} lineHeight={1.6} fontSize={23} color="background.default">TYPOGRAPHIES</Typography>
              <Typography variant="body1" letterSpacing={4.5} fontWeight={100} sx={{opacity: .7}} lineHeight={1.6} fontSize={23} color="background.default">DIGITAL ILLUSTRATIONS</Typography>
              <Typography variant="body1" letterSpacing={4.5} fontWeight={100} sx={{opacity: .7}} lineHeight={1.6} fontSize={23} color="background.default">EXTERIOR VISUALIZATION</Typography>
            </Box>
          </Grid>
          <Grid item xs={8} sx={{zIndex: 2}}>
            
          </Grid>
        </Grid>
      </Container>

    </Box>
  )
}

export default GraphicWorks