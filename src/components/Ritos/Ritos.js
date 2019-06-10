import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, Grid, Typography } from '@material-ui/core';
import * as _ from 'lodash';
import { ItemRito } from './ItemRito';
import SquadRepo from '../../repos/SquadRepo';

const styles = theme => ({
  card: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2
  },
  header: {
    fontSize: 16,
    fontWeight: 200,
    fontStyle: 'italic'
  }
});

class Ritos extends React.Component {
  state = {
    squads: []
  };

  componentWillMount() {
    SquadRepo.listarSquads('Curingas').then(squads => {
      this.setState({
        squads: squads
      });
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <Grid container spacing={16}>
            <Grid item container xs={2} alignItems="flex-end">
              <Grid item xs padding="none" align="right">
                <Typography className={classes.header}>Squad</Typography>
              </Grid>
            </Grid>
            <Grid item container xs={10}>
              <Grid item xs={1} padding="none" align="center">
                <Typography className={classes.header}>Andon</Typography>
              </Grid>
              <Grid item xs={1} padding="none" align="center">
                <Typography className={classes.header}>Estoque</Typography>
              </Grid>
              <Grid item xs padding="none" align="center">
                <Typography className={classes.header}>Check Arquitetural</Typography>
              </Grid>
              <Grid item xs padding="none" align="center">
                <Typography className={classes.header}>Check de Execução</Typography>
              </Grid>
              <Grid item xs padding="none" align="center">
                <Typography className={classes.header}>Retrospectiva</Typography>
              </Grid>
            </Grid>

            {_.map(this.state.squads, squad => (
              <ItemRito key={squad.Squad} squad={squad} />
            ))}
          </Grid>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Ritos);
