import { useState, useEffect } from 'react'
import "./Landing.css";
// import Aos from "aos";
import "aos/dist/aos.css";
import { Box, Fade, Typography, Modal, } from '@mui/material';

export default function Landing({ showModal, setShowModal}) {
//   useEffect(() => {
//     Aos.init();
// }, []);


  return (
    <Modal open={!showModal}>
      <Box sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#333",
        textShadow: "2px 2px 10px rgba(0, 0, 0, 0.15)"
      }}>
        <Typography variant="h2" color="background.default" sx={{letterSpacing: 1.5}} fontWeight={300}>AYN NICOLI LAQUINDANUM</Typography>
        <Box sx={{display: "flex", alignItems: "center", mt: .75}}>
          <Typography variant="body1" color="background.default" lineHeight={1} letterSpacing={.75} sx={{opacity: .65}} fontWeight={200} mt={.5}>GRAPHIC ARTIST</Typography>
          <Typography variant="body1" color="primary.light" mx={1} fontSize={16} lineHeight={1} fontWeight={400}>|</Typography>
          <Typography variant="body1" color="background.default" lineHeight={1} letterSpacing={.75} sx={{opacity: .65}} fontWeight={200} mt={.5}>LICENSED ARCHITECT</Typography>
        </Box>
      </Box>
    </Modal>

    // <div className='landing' >
    //     <p className='landing-logo'  
    //       data-aos="fade-zoom-in"
    //       data-aos-easing="ease-in-back"
    //       data-aos-delay="100"
    //       data-aos-offset="0"
    //       >AYNSL</p>
    // </div>
  )
}
