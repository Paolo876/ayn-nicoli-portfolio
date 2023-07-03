import React, { useState } from 'react'
import { Typography, Box, TextField, Button } from '@mui/material';

const labelStyles = {
  fontWeight: 400,
  letterSpacing: -.15, 
  fontSize: {xs: 15, sm: 18}
}


const InquiryForm = () => {
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ phone, setPhone ] = useState("");
  const [ message, setMessage ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phone, message)
  }


  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit} 
      sx={{
        px: {xs: 2, sm: 6, md: 6, lg:4},
        py: {xs: 2, sm:3},
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box mb={{xs: 3, sm: 5}}>
        <Typography variant="body1" lineHeight={1.25} fontWeight={500} fontSize={{xs: 17, sm:21}} mb={1}>
          I'm looking forward to hearing from you!
        </Typography>
        <Typography variant="body1" lineHeight={1.25} fontWeight={300} fontSize={{ xs: 14, sm: 18 }}>
          For inquiries, you can reach me through my email or through submitting the form below.
        </Typography>
      </Box>
      <Box 
        sx={{        
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box sx={{mb: 2.5}}>
          <Typography variant="h6" sx={labelStyles}>Name</Typography>
          <TextField 
            value={name}
            onChange={e => setName(e.target.value)}
            required
            color="primary"
            variant="outlined" 
            size="small"
            type="text"
            inputProps={{
              maxLength: 40,
              sx: { backgroundColor: "background.default", overflow: "hidden", borderRadius: 1, opacity: .95, py: .75 }
            }}
            fullWidth
          />
        </Box>
        <Box sx={{mb: 2.5}}>
          <Typography variant="h6" sx={labelStyles}>Email</Typography>
          <TextField 
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            color="primary"
            variant="outlined" 
            size="small"
            type="text"
            inputProps={{
              maxLength: 50,
              sx: { backgroundColor: "background.default", overflow: "hidden", borderRadius: 1, opacity: .95, py: .75 }
            }}
            fullWidth
          />
        </Box>
        <Box sx={{mb: 2.5}}>
          <Typography variant="h6" sx={labelStyles}>Phone <Box component="small" fontWeight={200} sx={{opacity: .85}}>(optional)</Box></Typography>
          <TextField 
            value={phone}
            onChange={e => setPhone(e.target.value)}
            color="primary"
            variant="outlined" 
            size="small"
            type="text"
            inputProps={{
              maxLength: 20,
              sx: { backgroundColor: "background.default", overflow: "hidden", borderRadius: 1, opacity: .95, py: .75 }
            }}
            fullWidth
          />
        </Box>
        <Box sx={{mb: 2.5}}>
          <Typography variant="h6" sx={labelStyles}>Message</Typography>
          <TextField 
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
            color="primary"
            variant="outlined" 
            size="small"
            type="text"
            inputProps={{
              maxLength: 320,
              sx: { overflow: "hidden", borderRadius: 1, p:0, m:0 }
            }}
            InputProps={{
              sx: { backgroundColor: "background.default", opacity: .95, py: .75 }
            }}
            sx={{p: 0, m: 0}}
            fullWidth
            multiline
            rows={6}
          />
        </Box>
        <Box sx={{display: "flex", justifyContent: "center", mt: { xs: 5, sm: 6, md: 8 }}}>
          <Button type="submit" size="large" variant="contained" sx={{ letterSpacing: 1.5 }}>Submit</Button>
        </Box>

      </Box>
    </Box>
  )
}

export default InquiryForm