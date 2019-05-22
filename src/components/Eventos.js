import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  grid: {
    padding: 16
  },
  item: {
    height: 360
  }
});

class Eventos extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography variant="h1" color="primary">
          Próximos Eventos
        </Typography>
        <Grid className={classes.grid} container spacing={16}>
          <Grid item xs={6}>
            <Card className={classes.item}>Item1</Card>
          </Grid>
          <Grid item xs={6}>
            <Card className={classes.item}>Item2</Card>
          </Grid>
          <Grid item xs={6}>
            <Card className={classes.item}>Item3</Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Eventos);
