import React from 'react'
import { Box } from '@mui/material'
import PostCarousel from './PostCarousel'
import Sidebar from './Sidebar'


const containerProps = {
  display: "flex",
  justifyContent: "space-between"
}
const PostContent = () => {
  return (
    <Box sx={containerProps}>
    
      <PostCarousel/>
      <Sidebar/>
    </Box>
  )
}

export default PostContent