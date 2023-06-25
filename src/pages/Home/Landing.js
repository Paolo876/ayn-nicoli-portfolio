import "./Landing.css";
import { Box, Fade, Typography, Modal } from '@mui/material';

export default function Landing({ showModal }) {



  return (
    <Modal open={showModal} closeAfterTransition>
      <Fade in={showModal} timeout={{ exit: 800}}>
        <Box 
          sx={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "background.default",
            textShadow: "2px 2px 10px rgba(0, 0, 0, 0.15)",
            pb: 20,
          }}
        >
          <Fade appear={true} in={showModal} timeout={{ enter: 1500, exit: 1200 }} style={{ transitionDelay: "250ms" }}>
            <Typography variant="h2" sx={{letterSpacing: 1.5}} fontWeight={300}>AYN NICOLI LAQUINDANUM</Typography>
          </Fade>
          <Box sx={{display: "flex", alignItems: "center", mt: .75}}>
            <Fade appear={true} in={showModal} timeout={{ enter: 900, exit: 900 }} style={{ transitionDelay: "800ms" }}>
              <Typography variant="body1" lineHeight={1} letterSpacing={.75} sx={{opacity: .75}} fontWeight={300} mt={.5}>LICENSED ARCHITECT</Typography>
            </Fade>
            <Typography variant="body1" color="primary.light" mx={1} fontSize={16} lineHeight={1} fontWeight={400}>|</Typography>
            <Fade appear={true} in={showModal} timeout={{ enter: 900, exit: 900 }} style={{ transitionDelay: "1200ms" }}>
              <Typography variant="body1" lineHeight={1} letterSpacing={.75} sx={{opacity: .75}} fontWeight={300} mt={.5}>GRAPHIC ARTIST</Typography>
            </Fade>
          </Box>
        </Box>
      </Fade>
    </Modal>
  )
}
