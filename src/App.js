import React from 'react';
import { MuiThemeProvider, AppBar, Tabs, Tab } from '@material-ui/core';
import Theme from './Theme';
import Eventos from './components/Eventos/Eventos';
import Diagnostico from './components/Diagnostico/Diagnostico';
import Retro from './components/Retro/Retro';
import Ritos from './components/Ritos/Ritos';
import OneOnOne from './components/OneOnOne/OneOnOne';

const pages = [0, 1, 2, 0, 1, 3, 0, 1, 2, 0, 1, 3, 0, 1, 2, 0, 1, 4];

class App extends React.Component {
  state = {
    tabs: 0,
    play: true
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        tabs: (this.state.tabs + 1) % pages.length
      });
    }, 15 * 1000);
  }

  handleChange = (e, value) => {
    this.setState({ tabs: value });
  };

  handleClick = () => {
    this.setState({ play: !this.state.play });
  };

  render() {
    const { tabs } = this.state;
    return (
      <MuiThemeProvider theme={Theme}>
        <AppBar position="static">
          <Tabs value={pages[tabs]} onChange={this.handleChange} style={{ flexGrow: 1 }}>
            <Tab label="Ritos" />
            <Tab label="Diagnóstico" />
            <Tab label="1-1" />
            <Tab label="Retro da Tribo" />
            <Tab label="Próximos Eventos" />
          </Tabs>
          {/* <IconButton onClick={this.handleClick}>
            {this.state.play ? (
              <PauseButton style={{ color: '#ffffff' }} />
            ) : (
              <PlayButton style={{ color: '#ffffff' }} />
            )}
          </IconButton> */}
        </AppBar>
        {pages[tabs] === 0 && <Ritos />}
        {pages[tabs] === 1 && <Diagnostico />}
        {pages[tabs] === 2 && <OneOnOne />}
        {pages[tabs] === 3 && <Retro />}
        {pages[tabs] === 4 && <Eventos />}
      </MuiThemeProvider>
    );
  }
}

export default App;
