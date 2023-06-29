import React from 'react'
import { Typography, Box, TextField } from '@mui/material';

const InquiryForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <Box component="form" onSubmit={handleSubmit}>
      
    </Box>
  )
}

export default InquiryForm