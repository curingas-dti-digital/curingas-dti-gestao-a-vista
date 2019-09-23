import React from 'react';
import { MuiThemeProvider, AppBar, Tabs, Tab, Fab, withStyles } from '@material-ui/core';
import Theme from './Theme';
import OneOnOne from './components/OneOnOne/OneOnOne';
import PauseButton from '@material-ui/icons/Pause';
import PlayButton from '@material-ui/icons/PlayArrow';
import Iframe from './components/Iframe';

const pages = [0, 1, 2];

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
    page: 0,
    play: true
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
    }, 30 * 1000);
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
            <Tab wrapped label="1-1" />
          </Tabs>
          <Fab onClick={this.handleClick} className={classes.fab} color="secondary">
            {this.state.play ? (
              <PauseButton style={{ color: '#ffffff' }} />
            ) : (
              <PlayButton style={{ color: '#ffffff' }} />
            )}
          </Fab>
        </AppBar>
        {page === 0 && (
          <Iframe
            page={
              'https://docs.google.com/spreadsheets/d/e/2PACX-1vSpC_x6FOQi7QOG4-gFFZzgIp_BCHZEKLHy8PoJpA9twqOAsRVMUerK9BEhglaI92K58qjW4DOFFkMC/pubhtml?gid=2092766634&single=true'
            }
          />
        )}
        {page === 1 && (
          <Iframe
            page={
              'https://docs.google.com/spreadsheets/d/e/2PACX-1vSpC_x6FOQi7QOG4-gFFZzgIp_BCHZEKLHy8PoJpA9twqOAsRVMUerK9BEhglaI92K58qjW4DOFFkMC/pubhtml?gid=890090851&single=true'
            }
          />
        )}
        {page === 2 && <OneOnOne />}
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
