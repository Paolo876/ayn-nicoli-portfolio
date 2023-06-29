import React from 'react'
import { Typography, Box, TextField } from '@mui/material';

const InquiryForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit} 
      sx={{
        p: 5,

      }}
    >
      <TextField label="Name" variant="standard" fullWidth/>
    </Box>
  )
}

export default InquiryForm