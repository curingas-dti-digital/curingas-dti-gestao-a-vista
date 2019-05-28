import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import Retro from './components/Retro/Retro';
import Eventos from './components/Eventos/Eventos';
import Diagnostico from './components/Diagnostico/Diagnostico';
import Theme from './Theme';

const pages = ['retro', 'eventos', 'diagnostico'];
class App extends React.Component {
  state = {
    page: 0
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ page: this.state.page + 1 });
    }, 30 * 1000);
  }
  render() {
    return <MuiThemeProvider theme={Theme}>{this.getPage()}</MuiThemeProvider>;
  }

  getPage() {
    switch (pages[this.state.page % 3]) {
      case 'retro':
        return <Retro />;
      case 'eventos':
        return <Eventos />;
      case 'diagnostico':
        return <Diagnostico />;

      default:
        return;
    }
  }
}

export default App;
