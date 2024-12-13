import { Container, TextField } from '@mui/material'
import { useState } from 'react'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send';
import Response from './Response.jsx'
import * as React from 'react'
import useSubmit from '../../hooks/useSubmit.js'
const Assistant = () => {

  const [query, setQuery] = useState("")
  const [open, setOpen] = useState(false);
  const { response, error, loading, submitForm } = useSubmit()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    handleClickOpen()
    submitForm(query)
  }

  return (
    <Container sx={{ display: "flex", justifyContent: "center", margin: 6, gap: 2 }}>
      <TextField
        id="outlined-controlled"
        placeholder="What are Sujith's skills?"
        label="Ask about me!"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button
        variant="contained"
        size="small"
        endIcon={<SendIcon />}
        sx={{ margin: 1 }}
        onClick={handleSubmit}
      >
        Ask!
      </Button>
      <Response open={open} handleClose={handleClose} response={response} loading={loading} error={error} />
    </Container>
  )
}

export default Assistant