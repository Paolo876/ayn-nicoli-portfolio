import { useState } from "react";
import { Box, Modal, Fade, CircularProgress  } from "@mui/material";
import ArchitecturalWorks from "./ArchitecturalWorks";
import GraphicWorks from "./GraphicWorks";
import Appbar from "../../components/UI/Appbar";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  border: 0,
  boxShadow: 0,
};


export default function Home() {
  const [ isArchProjActive, setIsArchProjActive ] = useState("architectural")
  const [ showModal, setShowModal ] = useState({isVisible: false, src: null});
  const [ isLoading, setIsLoading ] = useState(true);

  const handleModalClose = () => {
    setShowModal(prevState => ({...prevState, isVisible: false}))
    setIsLoading(true)
  }
  return (
    <Box sx={{display: "flex", flexDirection:"column", alignItems: "space-between", height: "100vh"}}>
      <Appbar isArchProjActive={isArchProjActive} setIsArchProjActive={setIsArchProjActive}/>
      {isArchProjActive ? <ArchitecturalWorks setShowModal={setShowModal}/> : <GraphicWorks setShowModal={setShowModal}/>}
      <Modal
        open={showModal.isVisible}
        onClose={handleModalClose}
        closeAfterTransition
        slotProps={{
          backdrop: {
            timeout: 150,
          },
        }}
      >
        <Fade in={showModal.isVisible} timeout={150} style={{ transitionDelay: "150ms" }} mountOnEnter>
          <Box sx={style}>
            {showModal && showModal.src && 
              <Box>
                {isLoading && <Box sx={style}><CircularProgress/></Box>}
                <Fade in={!isLoading} timeout={600}>
                  <Box>
                    <img src={showModal.src} alt={showModal.src} style={{maxHeight: "90vh", maxWidth: "90vw", objectFit: "cover"}} onLoad={() => setIsLoading(false)}/>
                  </Box>
                </Fade>
              </Box>
            }
          </Box>
        </Fade>
      </Modal>
    </Box>
  )
}
