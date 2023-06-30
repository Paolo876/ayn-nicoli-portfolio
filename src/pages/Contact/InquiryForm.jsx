import React, { useState } from 'react'
import { Typography, Box, TextField, FormControl, FormLabel, Button } from '@mui/material';

const InquiryForm = () => {
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ phone, setPhone ] = useState("");
  const [ message, setMessage ] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit} 
      sx={{
        px: 4,
        py: 3,
      }}
    >
      <Box mb={5}>
        <Typography variant="body1" lineHeight={1.25} fontWeight={200} fontSize={18}>
          For inquiries, you can reach me through my email or through submitting the form below.
        </Typography>
      </Box>

      <Box sx={{mb: 2.5}}>
        <Typography variant="h6" fontWeight={300} letterSpacing={-.15}>Name</Typography>
        <TextField 
          color="primary"
          variant="outlined" 
          size="small"
          type="text"
          inputProps={{
            maxLength: 40,
            sx: { backgroundColor: "background.default", overflow: "hidden", borderRadius: 1, opacity: .95 }
          }}
          fullWidth
        />
      </Box>
      <Box sx={{mb: 2.5}}>
        <Typography variant="h6" fontWeight={300} letterSpacing={-.15}>Email</Typography>
        <TextField 
          color="primary"
          variant="outlined" 
          size="small"
          type="text"
          inputProps={{
            maxLength: 50,
            sx: { backgroundColor: "background.default", overflow: "hidden", borderRadius: 1, opacity: .95 }
          }}
          fullWidth
        />
      </Box>
      <Box sx={{mb: 2.5}}>
        <Typography variant="h6" fontWeight={300} letterSpacing={-.15}>Phone <Box component="small">(optional)</Box></Typography>
        <TextField 
          color="primary"
          variant="outlined" 
          size="small"
          type="text"
          inputProps={{
            maxLength: 20,
            sx: { backgroundColor: "background.default", overflow: "hidden", borderRadius: 1, opacity: .95 }
          }}
          fullWidth
        />
      </Box>
      <Box sx={{mb: 2.5}}>
        <Typography variant="h6" fontWeight={300} letterSpacing={-.15}>Message</Typography>
        <TextField 
          color="primary"
          variant="outlined" 
          size="small"
          type="text"
          inputProps={{
            maxLength: 320,
            sx: { overflow: "hidden", borderRadius: 1, p:0, m:0 }
          }}
          InputProps={{
            sx: { backgroundColor: "background.default", opacity: .95, }
          }}
          sx={{p: 0, m: 0}}
          fullWidth
          multiline
          rows={6}
        />
      </Box>
      <Box sx={{display: "flex", justifyContent: "center", mt: 8}}>
        <Button type="submit" size="large" variant="contained" sx={{ letterSpacing: 1.5 }}>Submit</Button>
      </Box>
    </Box>
  )
}

export default InquiryForm