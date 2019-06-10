import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Evento from './Evento';
import EventoRepo from '../../repos/EventoRepo';
import * as _ from 'lodash';

const styles = theme => ({
  grid: {
    padding: theme.spacing.unit,
    height: `calc(100vh - 48px - ${theme.spacing.unit * 2}px)`,
    width: '100%'
  }
});

class Eventos extends React.Component {
  state = {
    criarEvento: false,
    eventos: []
  };

  componentWillMount() {
    EventoRepo.listarEvento().then(eventos => {
      this.setState({
        eventos: eventos
      });
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={16} justify="center" className={classes.grid}>
          {_.chain(this.state.eventos)
            .orderBy(evento => evento.Data)
            .map(evento => {
              return (
                <Grid item xs={4}>
                  <Evento evento={evento} />
                </Grid>
              );
            })
            .value()}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Eventos);
