import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Fab, AppBar, Toolbar, Grid, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Evento from './Evento';
import EventoStore from '../../firestore/EventoStore';

const styles = theme => ({
  grid: {
    padding: theme.spacing.unit * 4
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
});

class Eventos extends React.Component {
  state = {
    criarEvento: false,
    eventos: []
  };

  componentWillMount() {
    EventoStore.listarEvento(eventos => {
      this.setState({
        eventos: eventos
      });
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Grid container alignItems="center" spacing={16} style={{ padding: 0 }}>
              <Grid item xs={1}>
                <img width={80} src="./images/curingas_branca.png" alt="curingas" />
              </Grid>
              <Grid item xs={10}>
                <Typography align="center" variant="display2" color="inherit">
                  Eventos
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <img width={80} src="./images/curingas_branca.png" alt="curingas" />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <div style={{ padding: 8 }}>
          <Grid container spacing={16} justify="space-between" className={classes.grid}>
            {this.state.eventos.map(evento => {
              return (
                <Grid item xs={3}>
                  <Evento evento={evento} />
                </Grid>
              );
            })}
          </Grid>
        </div>
        <Fab
          color="primary"
          aria-label="Add"
          className={classes.fab}
          onClick={() => {
            this.setState({ criarEvento: true });
          }}
        >
          <AddIcon />
        </Fab>
      </div>
    );
  }
}

export default withStyles(styles)(Eventos);
