import React from 'react';
import { Grid, Typography } from '@material-ui/core';

export const ItemDiagnostico = props => {
  const squad = props.squad;
  return [
    <Grid item container xs={2} style={{ minHeight: 72 }}>
      <Grid item container justify="center" direction="column" align="right">
        <Typography style={{ fontSize: 22, fontWeight: 900 }}>
          {squad.Squad.replace('Curingas - ', '')}
        </Typography>
      </Grid>
    </Grid>,
    <Grid item container xs={10} justify="center">
      <Grid item xs style={corFarol(squad.GroomingEPlanning)} />
      <Grid item xs style={corFarol(squad.TamanhoDasEstorias)} />
      <Grid item xs style={corFarol(squad.Burndown)} />
      <Grid item xs style={corFarol(squad.ReuniaoDiaria)} />
      <Grid item xs style={corFarol(squad.GestaoAVista)} />
      <Grid item xs style={corFarol(squad.WorkInProgress)} />
      <Grid item xs style={corFarol(squad.DtiFlow)} />
      <Grid item xs style={corFarol(squad.TestesAutomatizados)} />
      <Grid item xs style={corFarol(squad.SonarQube)} />
      <Grid item xs style={corFarol(squad.CulturaImplantacao)} />
    </Grid>
  ];
};

const corFarol = farol => {
  switch (farol) {
    case 1:
      return { backgroundColor: '#e95d6a' };
    case 2:
      return { backgroundColor: '#f6b26b' };
    case 3:
      return { backgroundColor: '#57bb8a' };
    default:
      return { backgroundColor: '#ffffff' };
  }
};

export default ItemDiagnostico;
