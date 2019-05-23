import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import Retro from './components/Retro/Retro';
import Eventos from './components/Eventos/Eventos';
import Theme from './Theme';

class App extends React.Component {
  state = {
    page: 'retro'
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ page: this.state.page === 'retro' ? 'eventos' : 'retro' });
    }, 30 * 1000);
  }
  render() {
    return (
      <MuiThemeProvider theme={Theme}>
        {this.state.page === 'retro' && <Retro />}
        {this.state.page === 'eventos' && <Eventos />}
      </MuiThemeProvider>
    );
  }
}

export default App;
