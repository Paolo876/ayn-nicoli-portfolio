import { useState, useEffect} from 'react'
import Image from 'mui-image'
import { Grid, Box, ButtonBase } from '@mui/material'


const Showcase = ({ projects, setShowModal }) => {
  const [ updatedProjects, setUpdatedProjects ] = useState(null)
  
  useEffect(() => {
    setUpdatedProjects(() => projects.map(item => {
      let domain = new URL(item);
      const newUrl = `https://ik.imagekit.io/q5892cimh/tr:w-1100/${domain.pathname}${domain.search}`;
      return newUrl
    }))
  }, [projects])

  return (
    <Box sx={{pt: {sm: 10}, height: "100%", width: "100%", pl: {sm: 1, md: 3}, pr: {sm:.5, md: 2}}}>
        <Grid container sx={{display: "flex", justifyContent:"center", alignItems: 'center'}} rowSpacing={{xs: 1, sm: 3, md: 6, lg:9}} columnSpacing={{xs: 1, md:2, lg: 2, xl:3}} align="center" py={2} pb={8} mb={2} ml="auto">
          {updatedProjects && updatedProjects.map((item, index) => <Grid item xs={6} lg={4} key={item}>
            <ButtonBase onClick={() => setShowModal({isVisible: true, src: projects[index]})}>
              <Box sx={{ aspectRatio: "1 / 1" }}>
                <Image 
                  src={item} 
                  fit="cover" 
                  duration={1000}
                />
              </Box>
            </ButtonBase>
          </Grid>)}
        </Grid>
    </Box>
  )
}

export default Showcase