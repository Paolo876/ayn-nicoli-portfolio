import { useState } from 'react'
import { useNavigate } from 'react-router';
import { Box, Typography, Fade} from '@mui/material'
import Image from 'mui-image'

const containerProps = {
  border: 1, 
  borderColor: "rgba(0,0,0,.1)", 
  height: {md: 240, lg: 240,  xl: 300},
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  display: {xs: "none", md: "initial"}
}

const infoBoxProps = {
  position: "absolute",
  top: 0,
  left:0,
  height: "100%",
  width: "100%",
  backdropFilter: "brightness(60%) contrast(70%) saturate(170%)",
  zIndex: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  p:2,
}

const textProps={
  fontWeight: 500,
  letterSpacing: 1,
  fontSize: 15,
  textAlign: "center",
  color: "rgba(255,255,255,.9)"
}


const ProjectItem = ({ src, id="test" }) => {

  const navigate = useNavigate();
  const [ isHovered, setIsHovered ] = useState(false)


  return (
    <Box 
      sx={containerProps}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
      onClick={() => navigate(`/post/${id}`)}
    >
      {isHovered && 
        <Fade in={true} timeout={{enter: 250}} style={{ transitionDelay: `120ms` }}>
          <Box sx={infoBoxProps}>
            <Box 
              sx={{
                borderBottom: 1,
                py: .75,
                px: 1,
                borderColor: "rgba(255,255,255, .3)",
                overflow: "hidden"
              }}
            >
              <Typography sx={textProps}>Test</Typography>
            </Box>
          </Box>
        </Fade>
      }
      <Image 
        src={src}  
        duration={300} 
        sx={{transition: "300ms width ease"}} 
        fit="cover"
        alt="1"
        showLoading
      />
    </Box>
  )
}

export default ProjectItem