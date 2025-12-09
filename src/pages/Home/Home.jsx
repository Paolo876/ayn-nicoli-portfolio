import React from 'react'
import PageContainer from '../../components/UI/PageContainer'
import Navbar from '../../components/UI/Navbar'
import { Box } from '@mui/material'

import Navigation from './Navigation'
import Gallery from './Gallery'


const mainContentProps = {
  display: "flex",
  justifyContent: "space-between"
}
const Home = () => {
  return (
    <PageContainer>
      {/* Navbar */}
      <Navbar/>

      {/* Main Content */}
      <Box sx={mainContentProps}>
        {/* Navigation - Left */}
        <Navigation/>

        {/* Gallery - Right */}
        <Gallery/>
      </Box>
    </PageContainer>
  )
}

export default Home