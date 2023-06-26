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

const Showcase = ({ projects, setShowModal }) => {

  return (
    <Box sx={{pt: 10, height: "100%", width: "100%", px: .5,}}>
      <Carousel
        autoPlay={false}
        sx={{mb:2}}
        indicators={false}
        navButtonsAlwaysInvisible={false}
      >
        <Grid container sx={{display: "flex", justifyContent:"center", alignItems: 'center'}} rowSpacing={{xs: 1, sm: 3, md: 6, lg:9}} columnSpacing={0} align="center" py={2} pb={8} mb={2}>
          {projects.map(item => <Grid item sm={6} md={4} key={item}>
            <ButtonBase onClick={() => setShowModal({isVisible: true, src: item})}>
              <Box sx={{width: {sm: 175, md: 185, lg: 270, xl: 330}, height: {sm: 140, md: 150, lg: 240, xl:300}}}>
                <Image 
                  src={item} 
                  fit="cover" 
                  duration={1000}
                />
              </Box>

            </ButtonBase>
          </Grid>)}
        </Grid>
      </Carousel>
    </Box>

  )
}

export default Showcase