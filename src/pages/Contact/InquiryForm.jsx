import React from 'react'
import { Typography, Box, TextField, FormControl, FormLabel, Button } from '@mui/material';

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
      <Typography variant="body1" lineHeight={1.2} fontWeight={300} fontSize={18}>
        For any questions or inquiries, you can reach me through my email or through submitting the form below.
      </Typography>
      <Box>
        <Typography variant="h6">Name</Typography>
        <TextField 
          color="primary"
          variant="outlined" 
          size="small"
          type="text"
          inputProps={{
            sx: { backgroundColor: "background.default", overflow: "hidden", borderRadius: 1, opacity: .95 }
          }}
          fullWidth
        />
      </Box>
      <Box>
        <Typography variant="h6">Email</Typography>
        <TextField 
          color="primary"
          variant="outlined" 
          size="small"
          type="text"
          inputProps={{
            sx: { backgroundColor: "background.default", overflow: "hidden", borderRadius: 1, opacity: .95 }
          }}
          fullWidth
        />
      </Box>
      <Box>
        <Typography variant="h6">Phone <Box component="small">(optional)</Box></Typography>
        <TextField 
          color="primary"
          variant="outlined" 
          size="small"
          type="text"
          inputProps={{
            sx: { backgroundColor: "background.default", overflow: "hidden", borderRadius: 1, opacity: .95 }
          }}
          fullWidth
        />
      </Box>
      <Box>
        <Typography variant="h6">Message</Typography>
        <TextField 
          color="primary"
          variant="outlined" 
          size="small"
          type="text"
          inputProps={{
            sx: { backgroundColor: "background.default", overflow: "hidden", borderRadius: 1, opacity: .95, p:0, m:0 }
          }}
          InputProps={{
            sx: {p:0}
          }}
          sx={{p: 0, m: 0}}
          fullWidth
          multiline
          rows={6}
        />
      </Box>
      <Box>
        <Button type="submit" size="large" variant="contained">Submit</Button>
      </Box>
    </Box>
  )
}

export default InquiryForm