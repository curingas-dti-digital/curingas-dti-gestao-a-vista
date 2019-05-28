import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#504d94'
    },
    secondary: {
      main: '#22b5c3'
    },
    error: {
      main: '#e72372'
    }
  },
  typography: {
    fontFamily: '"Montserrat"',
    useNextVariants: true
  }
});