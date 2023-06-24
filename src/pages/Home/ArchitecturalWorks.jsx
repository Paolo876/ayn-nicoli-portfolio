import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
const ArchitecturalWorks = () => {
  return (
    <Box sx={{position: "relative", height: "100%", backgroundColor: "background.paper"}}>
      {/* <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", backgroundColor: "primary.main", width: "35vw", zIndex: 1}}></Box> */}
      <Container maxWidth="xl" sx={{pt: 0, height: "100%", pb: 10}}>
        <Grid container sx={{height: "100%"}}>
          <Grid item xs={4} sx={{zIndex: 2, backgroundColor: "primary.main", display: "flex", flexDirection: "column", height: "100%", justifyContent: "center", p: 2}}>
            <Box align="left" sx={{}}>
              <Typography variant="h2" lineHeight={1.2} fontWeight={700} sx={{opacity: .95}} fontSize={{lg: 55}} color="background.default">ARCHITECTURAL</Typography>
              <Typography variant="h3" fontWeight={200} lineHeight={1.2} sx={{opacity: .8}} letterSpacing={1} color="background.paper">DESIGN</Typography>
            </Box>
            <Box align="left" sx={{mt: 5}}>
              <Typography variant="h5" letterSpacing={5} fontWeight={200} sx={{opacity: .7}} lineHeight={1.5} fontSize={23} color="background.default">3D MODELING</Typography>
              <Typography variant="h5" letterSpacing={5} fontWeight={200} sx={{opacity: .7}} lineHeight={1.5} fontSize={23} color="background.default">INTERIOR VISUALIZATION</Typography>
              <Typography variant="h5" letterSpacing={5} fontWeight={200} sx={{opacity: .7}} lineHeight={1.5} fontSize={23} color="background.default">EXTERIOR VISUALIZATION</Typography>
            </Box>
          </Grid>
          <Grid item xs={8} sx={{zIndex: 2}}>

          </Grid>
        </Grid>
      </Container>

    </Box>
  )
}

export default ArchitecturalWorks