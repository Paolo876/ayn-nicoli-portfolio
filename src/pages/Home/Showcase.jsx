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
    <Box sx={{pt: 10, height: "100%", width: "100%", px: .5,}}>
      <Carousel
        autoPlay={false}
        sx={{mb:2}}
        indicators={false}
        navButtonsAlwaysInvisible={true}
      >
        <Grid container sx={{display: "flex", justifyContent:"center", alignItems: 'center'}} rowSpacing={{xs: 1, sm: 3, md: 6, lg:9}} columnSpacing={{xl:3}} align="center" py={2} pb={8} mb={2} ml="auto">
          {updatedProjects.map((item, index) => <Grid item sm={6} md={4} key={item}>
            <ButtonBase onClick={() => setShowModal({isVisible: true, src: projects[index]})}>
              <Box 
                sx={{
                  aspectRatio: "1 / 1",
                  // height: "auto", 
                  // width: "auto", 
                  // maxHeight:300, 
                  // maxWidth: 300, 
                  // position: "relative", 
                  // "&::after": {
                  //   content: '""',
                  //   display: "block",
                  //   // paddingBottom: "100%",
                  // },
                  // "& img": {
                  //  position: "absolute",
                  //  width: "100%",
                  //  height: "100%",
                  //  objectFit: "cover",
                  //  objectPosition: "50% 50%"
                  // }
                }}
                >
              {/* <Box sx={{width: {sm: 180, md: 185, lg: 270, xl: 330}, height: {sm: 175, md: 150, lg: 240, xl:300}}}> */}
                <Image 
                  src={item} 
                  fit="cover" 
                  duration={1000}
                  // showLoading={true}
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