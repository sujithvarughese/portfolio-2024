import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
  Text: {
    fontFamily: [
      'Montserrat',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});
export default theme