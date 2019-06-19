import React from 'react';
import { MuiThemeProvider, AppBar, Tabs, Tab, Fab, withStyles } from '@material-ui/core';
import Theme from './Theme';
import Eventos from './components/Eventos/Eventos';
import Diagnostico from './components/Diagnostico/Diagnostico';
import Retro from './components/Retro/Retro';
import Ritos from './components/Ritos/Ritos';
import OneOnOne from './components/OneOnOne/OneOnOne';
import PauseButton from '@material-ui/icons/Pause';
import PlayButton from '@material-ui/icons/PlayArrow';
import Ranking from './components/Gamification/Ranking';

const pages = [0, 1, 2, 3, 4, 5, 0, 1, 6, 0, 1, 2, 3, 4, 5, 0, 1, 7, 0, 1, 2, 3, 4, 5, 0, 1, 8];

const styles = theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
});

class App extends React.Component {
  state = {
    index: 0,
    page: 3,
    play: false
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.play) {
        const newIndex = (this.state.index + 1) % pages.length;
        this.setState({
          index: newIndex,
          page: pages[newIndex]
        });
      }
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
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={Theme}>
        <AppBar position="static">
          <Tabs value={page} onChange={this.handleChange} style={{ flexGrow: 1 }}>
            <Tab wrapped label="Ritos" />
            <Tab wrapped label="Diagnóstico" />
            <Tab wrapped label="1-1 Cross" />
            <Tab wrapped label="1-1 Prodap" />
            <Tab wrapped label="1-1 BH" />
            <Tab wrapped label="1-1 Serasa" />
            <Tab wrapped label="Retro da Tribo" />
            <Tab wrapped label="Próximos Eventos" />
            <Tab wrapped label="Gamification" />
          </Tabs>
          <Fab onClick={this.handleClick} className={classes.fab} color="secondary">
            {this.state.play ? (
              <PauseButton style={{ color: '#ffffff' }} />
            ) : (
              <PlayButton style={{ color: '#ffffff' }} />
            )}
          </Fab>
        </AppBar>
        {page === 0 && <Ritos />}
        {page === 1 && <Diagnostico />}
        {page === 2 && <OneOnOne cliente="Cross" />}
        {page === 3 && <OneOnOne cliente="Prodap" />}
        {page === 4 && <OneOnOne cliente="BH" />}
        {page === 5 && <OneOnOne cliente="Serasa" />}
        {page === 6 && <Retro />}
        {page === 7 && <Eventos />}
        {page === 8 && <Ranking />}
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
