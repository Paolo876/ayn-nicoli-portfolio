import { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import ShowcaseCategories from './ShowcaseCategories';
import ArchitecturalWorks from "./ArchitecturalWorks";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import Appbar from "../../components/UI/Appbar";
import GraphicWorks from "./GraphicWorks";


export default function Home() {
  const [ isArchProjActive, setIsArchProjActive ] = useState("architectural")
  return (
    <Box sx={{display: "flex", flexDirection:"column", alignItems: "space-between", height: "100vh"}}>
      <Appbar isArchProjActive={isArchProjActive} setIsArchProjActive={setIsArchProjActive}/>
      {isArchProjActive ? <ArchitecturalWorks/> : <GraphicWorks/>}
      
    </Box>
    // <Box sx={{pt: 12, display: "flex", flexDirection:"column", alignItems: "space-between", height: "100vh"}}>
    //   <Box>
    //     <ShowcaseCategories/>
    //   </Box>
    //   <Box sx={{flex: 1, backgroundColor: "primary.main", display: "flex", alignItems: "center", justifyContent: "center", color: "background.default", position: "relative"}}>
    //     <Container maxWidth="xl">
    //       <Grid container>
    //         <Grid item xs={4} align="left">
    //           <Typography variant="body1" fontWeight={600}>AYN NICOLI LAQUINDANUM</Typography>
    //           <Typography variant="body1" fontSize={14}>Pampanga, Philippines <LocationOnIcon color="inherit" fontSize="inherit"/></Typography>
    //         </Grid>
    //         <Grid item xs={4} align="left" sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "left", gap: .75}}>
                
    //           <Typography variant="body1" fontWeight={500} sx={{}}><EmailIcon fontSize="inherit" sx={{mr: 1}}/> aynlaquindanum@gmail.com</Typography>                
    //           <Typography variant="body1" fontWeight={500} ><PhoneIcon fontSize="inherit" sx={{mr: 1}}/>+63 906 786 4686</Typography>
    //         </Grid>
    //         <Grid item xs={4} align="left" sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "left", gap: .75}}>
    //           <Typography variant="body1" fontWeight={600} >SOCIAL</Typography>
    //           <Box sx={{display: "flex", gap: 3}}>
    //             <LinkedInIcon/>
    //             <WhatsAppIcon/>
    //             <InstagramIcon/>
    //           </Box>
    //         </Grid>
    //       </Grid>
    //     </Container>
    //     <Box sx={{position: "absolute", bottom: 5, right: 10, opacity: .75}}>
    //     <Typography variant="subtitle2">© 2023 Ayn Laquindanum, All Rights Reserved.</Typography>

    //     </Box>
    //   </Box>
    // </Box>
  )
}
