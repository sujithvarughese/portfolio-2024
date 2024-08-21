import { Typography } from '@mui/material'

const Text = (props) => {
  return (
    <Typography fontFamily="Avenir Next Condensed" {...props} >
      {props.children}
    </Typography>
  )
}

export default Text