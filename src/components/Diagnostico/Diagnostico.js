import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import DiagnosticoSheet from '../../repos/DiagnosticoRepo';
import { Card, Grid, Typography } from '@material-ui/core';
import ItemDiagnostico from './ItemDiagnostico';
import * as _ from 'lodash';

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

class Diagnostico extends React.Component {
  state = {
    diagnosticos: []
  };

  componentWillMount() {
    DiagnosticoSheet.listarDiagnosticos('Curingas').then(diagnosticos => {
      this.setState({
        diagnosticos: diagnosticos
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
              <Grid item xs padding="none" align="center">
                <Typography className={classes.header}>Grooming e Planning</Typography>
              </Grid>
              <Grid item xs padding="none" align="center">
                <Typography className={classes.header}>Tamanho das Estórias</Typography>
              </Grid>
              <Grid item xs padding="none" align="center">
                <Typography className={classes.header}>Burndown</Typography>
              </Grid>
              <Grid item xs padding="none" align="center">
                <Typography className={classes.header}>Reunião Diária</Typography>
              </Grid>
              <Grid item xs padding="none" align="center">
                <Typography className={classes.header}>Gestão à Vista</Typography>
              </Grid>
              <Grid item xs padding="none" align="center">
                <Typography className={classes.header}>Work In Progress</Typography>
              </Grid>
              <Grid item xs padding="none" align="center">
                <Typography className={classes.header}>dti Flow</Typography>
              </Grid>
              <Grid item xs padding="none" align="center">
                <Typography className={classes.header}>Testes Automatizados</Typography>
              </Grid>
              <Grid item xs padding="none" align="center">
                <Typography className={classes.header}>SonarQube</Typography>
              </Grid>
              <Grid item xs padding="none" align="center">
                <Typography className={classes.header}>Estoque de Sprints</Typography>
              </Grid>
            </Grid>
            {_.map(this.state.diagnosticos, diagnostico => (
              <ItemDiagnostico diagnostico={diagnostico} />
            ))}
          </Grid>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Diagnostico);
