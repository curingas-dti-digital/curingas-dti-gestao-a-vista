import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import Retro from './components/Retro/Retro';
import Eventos from './components/Eventos/Eventos';
import Theme from './Theme';

function App() {
  return (
    <Router>
      <MuiThemeProvider theme={Theme}>
        <Route path="/retro" component={Retro} />
        <Route path="/eventos" component={Eventos} />
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
