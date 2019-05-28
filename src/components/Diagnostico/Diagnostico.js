import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import DiagnosticoSheet from '../../repos/DiagnosticoSheet';
import { Card, Grid, Typography } from '@material-ui/core';
import ItemDiagnostico from './ItemDiagnostico';
import * as _ from 'lodash';
import { BasePage } from '../BasePage';

const styles = theme => ({
  card: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2
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
      <BasePage
        PageName={'Diagnósticos'}
        InnerComponent={
          <div>
            <Card className={classes.card}>
              <Grid container spacing={8}>
                <Grid item container xs={3}>
                  <Grid item xs padding="none" align="left">
                    <Typography style={{ fontSize: 14, fontWeight: 900 }}>Squad</Typography>
                  </Grid>
                </Grid>
                <Grid item container xs={9}>
                  <Grid item xs padding="none" align="center">
                    <Typography style={{ fontSize: 14, fontWeight: 900 }}>Grooming e Planning</Typography>
                  </Grid>
                  <Grid item xs padding="none" align="center">
                    <Typography style={{ fontSize: 14, fontWeight: 900 }}>Tamanho das Estórias</Typography>
                  </Grid>
                  <Grid item xs padding="none" align="center">
                    <Typography style={{ fontSize: 14, fontWeight: 900 }}>Burndown</Typography>
                  </Grid>
                  <Grid item xs padding="none" align="center">
                    <Typography style={{ fontSize: 14, fontWeight: 900 }}>Reunião Diária</Typography>
                  </Grid>
                  <Grid item xs padding="none" align="center">
                    <Typography style={{ fontSize: 14, fontWeight: 900 }}>Gestão à Vista</Typography>
                  </Grid>
                  <Grid item xs padding="none" align="center">
                    <Typography style={{ fontSize: 14, fontWeight: 900 }}>Work In Progress</Typography>
                  </Grid>
                  <Grid item xs padding="none" align="center">
                    <Typography style={{ fontSize: 14, fontWeight: 900 }}>dti Flow</Typography>
                  </Grid>
                  <Grid item xs padding="none" align="center">
                    <Typography style={{ fontSize: 14, fontWeight: 900 }}>Testes Automatizados</Typography>
                  </Grid>
                  <Grid item xs padding="none" align="center">
                    <Typography style={{ fontSize: 14, fontWeight: 900 }}>SonarQube</Typography>
                  </Grid>
                  <Grid item xs padding="none" align="center">
                    <Typography style={{ fontSize: 14, fontWeight: 900 }}>Estoque de Sprints</Typography>
                  </Grid>
                </Grid>
                {_.map(this.state.diagnosticos, diagnostico => (
                  <ItemDiagnostico diagnostico={diagnostico} />
                ))}
              </Grid>
            </Card>
          </div>
        }
      />
    );
  }
}

export default withStyles(styles)(Diagnostico);
