import React from 'react'
import { Typography, Box, TextField } from '@mui/material';

const InquiryForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography>For any inquiries</Typography>
    </Box>
  )
}

export default InquiryForm