import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Response = ({ open, handleClose, response, loading, error }) => {


  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"AI Assistant"}</DialogTitle>
      <DialogContent>
        {loading ?
          <Box sx={{ display: 'flex', justifySelf: "center" }}>
            <CircularProgress />
          </Box>
        :
        <DialogContentText id="alert-dialog-slide-description">
          {response}
        </DialogContentText>
        }
      </DialogContent>
      <DialogActions>

      </DialogActions>
    </Dialog>
  )
}

export default Response