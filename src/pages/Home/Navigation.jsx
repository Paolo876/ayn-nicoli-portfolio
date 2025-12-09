import React from 'react'
import { Box, List, ListItem, ListItemButton } from '@mui/material'

const listContainerProps = {
	mb: 1,
}

const titleTextProps = {
	fontWeight: 600,
	letterSpacing: .9,
	fontSize: {lg: 20},
	textTransform: "uppercase",
	mb: 1
}

const textProps = {
	fontWeight: 500,
	letterSpacing: .8,
	fontSize: {lg: 18},
	mb: .25
}


const Navigation = () => {
  return (
		<Box>
			<List sx={listContainerProps}>
				<ListItemButton sx={titleTextProps}>Graphic Design</ListItemButton>
				<ListItemButton sx={textProps}>Print Designs</ListItemButton>
				<ListItemButton sx={textProps}>Signage Designs</ListItemButton>
				<ListItemButton sx={textProps}>Decal Designs</ListItemButton>
				<ListItemButton sx={textProps}>Logo Designs</ListItemButton>
				<ListItemButton sx={textProps}>Digital Illustrations</ListItemButton>
				<ListItemButton sx={textProps}>Typographies</ListItemButton>
			</List>
			<List sx={listContainerProps}>
				<ListItemButton sx={titleTextProps}>Architectural Design</ListItemButton>
				<ListItemButton sx={textProps}>Interior Visualizations</ListItemButton>
				<ListItemButton sx={textProps}>Exterior Visualizations</ListItemButton>
			</List>
		</Box>

  )
}

export default Navigation