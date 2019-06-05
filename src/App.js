import React from 'react';
import { MuiThemeProvider, AppBar, Tabs, Tab } from '@material-ui/core';
import Theme from './Theme';
import Eventos from './components/Eventos/Eventos';
import Diagnostico from './components/Diagnostico/Diagnostico';
import Retro from './components/Retro/Retro';
import Ritos from './components/Ritos/Ritos';
import OneOnOne from './components/OneOnOne/OneOnOne';

const pages = [0, 1, 2, 3, 4, 5, 0, 1, 6, 0, 1, 2, 3, 4, 5, 0, 1, 6, 0, 1, 2, 3, 4, 5, 0, 1, 7];

class App extends React.Component {
  state = {
    index: 26,
    page: 7,
    play: true
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      const newIndex = (this.state.index + 1) % pages.length;
      this.setState({
        index: newIndex,
        page: pages[newIndex]
      });
    }, 15 * 1000);
  }

  handleChange = (e, value) => {
    this.setState({ page: value });
  };

  handleClick = () => {
    this.setState({ play: !this.state.play });
  };

  render() {
    const { page } = this.state;
    return (
      <MuiThemeProvider theme={Theme}>
        <AppBar position="static">
          <Tabs value={page} onChange={this.handleChange} style={{ flexGrow: 1 }}>
            <Tab label="Ritos" />
            <Tab label="Diagnóstico" />
            <Tab label="1-1 Cross" />
            <Tab label="1-1 Prodap" />
            <Tab label="1-1 BH" />
            <Tab label="1-1 Serasa" />
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
        {page === 0 && <Ritos />}
        {page === 1 && <Diagnostico />}
        {page === 2 && <OneOnOne cliente="Cross" />}
        {page === 3 && <OneOnOne cliente="Prodap" />}
        {page === 4 && <OneOnOne cliente="BH" />}
        {page === 5 && <OneOnOne cliente="Serasa" />}
        {page === 6 && <Retro />}
        {page === 7 && <Eventos />}
      </MuiThemeProvider>
    );
  }
}

export default App;
