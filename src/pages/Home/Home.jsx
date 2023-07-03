import { useState } from "react";
import { Box, Modal, Fade } from "@mui/material";
import Image from "mui-image";
import ArchitecturalWorks from "./ArchitecturalWorks";
import GraphicWorks from "./GraphicWorks";
import Appbar from "../../components/UI/Appbar";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // maxHeight: "90vh", 
  // maxWidth: "90vw",
  border: 0,
  boxShadow: 0,
};


export default function Home() {
  const [ isArchProjActive, setIsArchProjActive ] = useState("architectural")
  const [ showModal, setShowModal ] = useState({isVisible: false, src: null});

  return (
    <Box sx={{display: "flex", flexDirection:"column", alignItems: "space-between", height: "100vh"}}>
      <Appbar isArchProjActive={isArchProjActive} setIsArchProjActive={setIsArchProjActive}/>
      {isArchProjActive ? <ArchitecturalWorks setShowModal={setShowModal}/> : <GraphicWorks setShowModal={setShowModal}/>}
      <Modal
        open={showModal.isVisible}
        onClose={() => setShowModal(prevState => ({...prevState, isVisible: false}))}
        closeAfterTransition
        slotProps={{
          backdrop: {
            timeout: 250,
          },
        }}
      >
      <Fade in={showModal.isVisible} timeout={250}>
        <Box sx={style}>
          {showModal && showModal.src && 
            <Box sx={{maxHeight: "90vh", maxWidth: "90vw", width: {xs: "90vw", md: "auto"}, height: "auto"}}>
              <Image src={showModal.src} duration={250} showLoading={true} fit="cover"/>
            </Box>
          }
        </Box>
      </Fade>

      </Modal>
    </Box>
  )
}
