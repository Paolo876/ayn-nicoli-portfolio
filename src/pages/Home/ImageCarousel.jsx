import React from 'react'
import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel'
import Image from 'mui-image'
import CircleIcon from '@mui/icons-material/Circle';

import img_1 from "../../assets/MOCK/Coffee Kiosk/1.1.webp"
import img_2 from "../../assets/MOCK/Coffee Kiosk/2.webp"
import img_3 from "../../assets/MOCK/Coffee Kiosk/3.webp"
import img_4 from "../../assets/MOCK/Coffee Kiosk/BACK.webp"
import img_5 from "../../assets/MOCK/Coffee Kiosk/front.webp"
import img_6 from "../../assets/MOCK/Coffee Kiosk/right.webp"

const carouselContainerProps = {
  border: 1,
  borderColor: "rgba(255,255,255,.1)", 
  borderRadius: 0,
  // maxHeight: "80vh",
  height: "auto",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  transition: "300ms width ease",
  background: "rgba(5,5,5,.5)"
}


const ImageCarousel = () => {
  return (
    <Carousel
      indicators={true}
      navButtonsAlwaysInvisible={true}
      autoPlay={false}
      animation='slide'
      swipe={false}
      // index={currentIdx}
      indicatorIconButtonProps={{
        style: {
          color: 'rgba(50,50,50,1)',
          margin: "0 1px",
        }
      }}
      activeIndicatorIconButtonProps={{
        style: {
          color: '#036b91',
        }
      }}
      IndicatorIcon={<CircleIcon style={{fontSize: 6}}/>}
    >
      <Box sx={carouselContainerProps}>
        <Image 
          src={img_1} 
          duration={300} 
          sx={{transition: "300ms width ease"}} 
          fit="scale-down"
          alt="1"
          showLoading
        />
      </Box>
      <Box sx={carouselContainerProps}>
        <Image 
          src={img_2} 
          duration={300} 
          sx={{transition: "300ms width ease"}} 
          fit="scale-down"
          alt="2"
          showLoading
        />
      </Box>
      <Box sx={carouselContainerProps}>
        <Image 
          src={img_3} 
          duration={300} 
          sx={{transition: "300ms width ease"}} 
          fit="scale-down"
          alt="3"
          showLoading
        />
      </Box>
      <Box sx={carouselContainerProps}>
        <Image 
          src={img_4} 
          duration={300} 
          sx={{transition: "300ms width ease"}} 
          fit="scale-down"
          alt="4"
          showLoading
        />
      </Box>
      <Box sx={carouselContainerProps}>
        <Image 
          src={img_5} 
          duration={300} 
          sx={{transition: "300ms width ease"}} 
          fit="scale-down"
          alt="5"
          showLoading
        />
      </Box>
      <Box sx={carouselContainerProps}>
        <Image 
          src={img_6} 
          duration={300} 
          sx={{transition: "300ms width ease"}} 
          fit="scale-down"
          alt="6"
          showLoading
        />
      </Box>
      {/* {images.map(item => <Box 
        sx={{
          ...carouselContainerProps, 
          height: {xs: maxDimensions.ratio * window.innerWidth, sm: maxDimensions.ratio * (window.innerWidth * .65)}
        }} 
        key={item.filename}
        
      >
        <Image 
          src={handleImgTransform(item.src)} 
          duration={300} 
          sx={{transition: "300ms width ease"}} 
          fit="scale-down"
          alt={item.title}
          showLoading
        />
      </Box>)} */}
    </Carousel>
  )
}

export default ImageCarousel