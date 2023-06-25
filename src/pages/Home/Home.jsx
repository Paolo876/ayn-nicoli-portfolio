import { useState } from "react";
import { Box } from "@mui/material";
import ArchitecturalWorks from "./ArchitecturalWorks";
import GraphicWorks from "./GraphicWorks";
import Appbar from "../../components/UI/Appbar";


export default function Home() {
  const [ isArchProjActive, setIsArchProjActive ] = useState("architectural")


  return (
    <Box sx={{display: "flex", flexDirection:"column", alignItems: "space-between", height: "100vh"}}>
      <Appbar isArchProjActive={isArchProjActive} setIsArchProjActive={setIsArchProjActive}/>
      {isArchProjActive ? <ArchitecturalWorks/> : <GraphicWorks/>}
    </Box>
  )
}
