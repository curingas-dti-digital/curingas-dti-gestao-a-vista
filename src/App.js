import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import Retro from './components/Retro/Retro';
import Theme from './Theme';

function App() {
  return (
    <MuiThemeProvider theme={Theme}>
      <Retro />
    </MuiThemeProvider>
  );
}

export default App;
