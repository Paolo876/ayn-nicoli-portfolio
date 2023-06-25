import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Image from 'mui-image'
import { Paper, Button, Grid, Box, ButtonBase } from '@mui/material'

const chunkArray = (arr, chunkSize) => {
  return arr.reduce((all,one,i) => {
    const ch = Math.floor(i/chunkSize); 
    all[ch] = [].concat((all[ch]||[]),one); 
    return all
 }, [])
}

const Showcase = ({ projects }) => {

  return (
    <Box sx={{pt: 8, height: "100%", width: "100%", pl: 1,}}>
      <Carousel
        autoPlay={false}
        sx={{mb:2}}
        indicators={false}
        navButtonsAlwaysInvisible={false}
      >
        <Grid container sx={{display: "flex", justifyContent:"center", alignItems: 'center'}} rowSpacing={5} columnSpacing={0} align="center" py={2} pb={8} mb={2}>
          {projects.map(item => <Grid item xs={4} key={item}>
            <ButtonBase sx={{}}><Image src={item} width={320} height={300} fit="cover" duration={800}/></ButtonBase>
          </Grid>)}
        </Grid>
      </Carousel>
    </Box>

  )
}

export default Showcase