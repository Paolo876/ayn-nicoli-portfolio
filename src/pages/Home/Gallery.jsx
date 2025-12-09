import React from 'react'
import { Box } from '@mui/material'
import ProjectItem from './ProjectItem'
import img_1 from "../../assets/MOCK/Coffee Kiosk/1.1.webp"
import img_2 from "../../assets/MOCK/Coffee Kiosk/2.webp"
import img_3 from "../../assets/MOCK/Coffee Kiosk/3.webp"
import img_4 from "../../assets/MOCK/Coffee Kiosk/BACK.webp"
import img_5 from "../../assets/MOCK/Coffee Kiosk/front.webp"
import img_6 from "../../assets/MOCK/Coffee Kiosk/right.webp"

const containerProps = {
  display: "grid",
  height: "83vh",
  width: "100%",
  overflow: "scroll",
  gap: .25,
  gridTemplateColumns: `repeat(auto-fill, minmax(350px, 1fr))`,
  pt: 2,
  pl: {lg: 15},
  pb: 20,
}



const Gallery = () => {
  return (
    <Box sx={containerProps}>
      <ProjectItem src={img_1}/>
      <ProjectItem src={img_2}/>
      <ProjectItem src={img_3}/>
      <ProjectItem src={img_4}/>
      <ProjectItem src={img_5}/>
      <ProjectItem src={img_6}/>
      <ProjectItem src={img_1}/>
      <ProjectItem src={img_2}/>
      <ProjectItem src={img_3}/>
      <ProjectItem src={img_4}/>
      <ProjectItem src={img_5}/>
      <ProjectItem src={img_6}/>
      <ProjectItem src={img_1}/>
      <ProjectItem src={img_2}/>
      <ProjectItem src={img_3}/>
      <ProjectItem src={img_4}/>
      <ProjectItem src={img_5}/>
      <ProjectItem src={img_6}/>
    </Box>
  )
}

export default Gallery