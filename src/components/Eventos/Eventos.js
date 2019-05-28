import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Fab, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Evento from './Evento';
import EventoStore from '../../repos/EventoStore';
import { BasePage } from '../BasePage';

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
      <BasePage
        PageName={'Eventos'}
        InnerComponent={
          <div>
            <Grid container spacing={16} justify="space-between" className={classes.grid}>
              {this.state.eventos.map(evento => {
                return (
                  <Grid item xs={3}>
                    <Evento evento={evento} />
                  </Grid>
                );
              })}
            </Grid>
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
        }
      />
    );
  }
}

export default withStyles(styles)(Eventos);
