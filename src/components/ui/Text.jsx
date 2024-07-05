import { Typography } from '@mui/material'

const Text = (props) => {
  return (
    <Typography fontFamily="Montserrat" {...props} >
      {props.children}
    </Typography>
  )
}

export default Text