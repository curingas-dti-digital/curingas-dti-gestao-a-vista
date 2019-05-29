import React from 'react';
import { Grid, Typography } from '@material-ui/core';

export const ItemDiagnostico = props => {
  const diagnostico = props.diagnostico;
  return [
    <Grid item container xs={3} style={{ minHeight: 72 }}>
      <Grid item container justify="center" direction="column" align="right">
        <Typography style={{ fontSize: 20, fontWeight: 300 }}>
          {diagnostico.Squad.replace('Curingas - ', '')}
        </Typography>
      </Grid>
    </Grid>,
    <Grid item container xs={9} justify="center">
      <Grid item xs style={corFarol(diagnostico.GroomingEPlanning)} />
      <Grid item xs style={corFarol(diagnostico.TamanhoDasEstorias)} />
      <Grid item xs style={corFarol(diagnostico.Burndown)} />
      <Grid item xs style={corFarol(diagnostico.ReuniaoDiaria)} />
      <Grid item xs style={corFarol(diagnostico.GestaoAVista)} />
      <Grid item xs style={corFarol(diagnostico.WorkInProgress)} />
      <Grid item xs style={corFarol(diagnostico.DtiFlow)} />
      <Grid item xs style={corFarol(diagnostico.TestesAutomatizados)} />
      <Grid item xs style={corFarol(diagnostico.SonarQube)} />
      <Grid item xs style={corFarol(diagnostico.EstoqueDeSprints)} />
    </Grid>
  ];
};

const corFarol = farol => {
  switch (farol) {
    case '1':
      return { backgroundColor: '#e95d6a' };
    case '2':
      return { backgroundColor: '#f6b26b' };
    case '3':
      return { backgroundColor: '#57bb8a' };
    default:
      return { backgroundColor: '#ffffff' };
  }
};

export default ItemDiagnostico;
