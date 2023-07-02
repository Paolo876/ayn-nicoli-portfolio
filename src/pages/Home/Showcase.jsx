import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Image from 'mui-image'
import { Grid, Box, ButtonBase } from '@mui/material'


const Showcase = ({ projects, setShowModal }) => {
  const updatedProjects = projects.map(item => {
    let domain = new URL(item);
    const newUrl = `https://ik.imagekit.io/q5892cimh/tr:w-1100/${domain.pathname}${domain.search}`;
    return newUrl
  })


  return (
    <Box sx={{pt: 10, height: "100%", width: "100%", pl: 1, pr: .5}}>
      <Carousel
        autoPlay={false}
        sx={{mb:2}}
        indicators={false}
        navButtonsAlwaysInvisible={true}
      >
        <Grid container sx={{display: "flex", justifyContent:"center", alignItems: 'center'}} rowSpacing={{xs: 1, sm: 3, md: 6, lg:9}} columnSpacing={{xs: 1, md:2, lg: 2, xl:3}} align="center" py={2} pb={8} mb={2} ml="auto">
          {updatedProjects.map((item, index) => <Grid item xs={6} lg={4} key={item}>
            <ButtonBase onClick={() => setShowModal({isVisible: true, src: projects[index]})}>
              <Box sx={{ aspectRatio: "1 / 1" }}>
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