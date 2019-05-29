import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import RitosRepo from '../../repos/RitosRepo';
import { Card, Grid, Typography } from '@material-ui/core';
import * as _ from 'lodash';
import { ItemRito } from './ItemRito';

const styles = theme => ({
  card: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2
  },
  header: {
    fontSize: 14,
    fontWeight: 300
  }
});

class Ritos extends React.Component {
  state = {
    squads: []
  };

  componentWillMount() {
    RitosRepo.listarRitos('Curingas').then(squads => {
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
            <Grid item container xs={3} alignItems="flex-end">
              <Grid item xs padding="none" align="right">
                <Typography className={classes.header}>Squad</Typography>
              </Grid>
            </Grid>
            <Grid item container xs={9}>
              <Grid item xs={2} padding="none" align="center">
                <Typography className={classes.header}>Andon</Typography>
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
