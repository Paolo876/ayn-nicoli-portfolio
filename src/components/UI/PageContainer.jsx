import { Box } from "@mui/material"


const containerProps = {
    mx: { xs: 2, xl: 5},
    mt: { lg: 20}
}


const PageContainer = ({ children }) => {
  return (
    <Box sx={containerProps}>{children}</Box>
  )
}

export default PageContainer