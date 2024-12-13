import { Container, Paper, Stack, TextField } from '@mui/material'
import { useState } from 'react'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send';
import Response from './Response.jsx'
import * as React from 'react'
import useSubmit from '../../hooks/useSubmit.js'
import Box from '@mui/material/Box'
import Text from '../ui/Text.jsx'
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
    <>
      <Box
        width={{ xs: "90%", sm: "80%", md: "50%"}}
        sx={{ justifyContent: "center", margin: "auto"}}>
        <Paper elevation={6}>
          <Stack
            sx={{ margin: 2, padding: 2, justifyContent: "center", alignItems: "center", gap: 1 }}>
            <Text variant="h5">AI Assistant</Text>
            <TextField
              fullWidth
              id="outlined-controlled"
              placeholder="What are Sujith's skills?"
              label="Ask about me!"
              variant="outlined"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Box sx={{ alignSelf: "flex-end"}}>
              <Button
                variant="contained"
                size="small"
                endIcon={<SendIcon />}
                sx={{ margin: 1 }}
                onClick={handleSubmit}
              >
                Ask!
              </Button>
            </Box>
          </Stack>
        </Paper>
      </Box>
      <Response open={open} handleClose={handleClose} response={response} loading={loading} error={error} />
    </>

  )
}

export default Assistant