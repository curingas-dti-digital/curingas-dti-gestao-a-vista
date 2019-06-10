import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#504d94'
    },
    secondary: {
      main: '#1c68b1'
    },
    error: {
      main: '#e72372'
    }
  },
  typography: {
    fontFamily: '"Poppins"',
    useNextVariants: true
  }
});
