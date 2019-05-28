import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

export const ItemDiagnostico = props => {
  const diagnostico = props.diagnostico;
  return [
    <Grid item container xs={3} style={{ minHeight: 64 }}>
      <Grid item container justify="center" direction="column" align="left">
        <Typography style={{ fontSize: 16, fontWeight: 800 }}>
          {diagnostico.Squad.replace('Curingas - ', '')}
        </Typography>
      </Grid>
    </Grid>,
    <Grid item container xs={9}>
      <Grid
        item
        xs
        style={corFarol(diagnostico.GroomingEPlanning)}
        container
        justify="center"
        direction="column"
        align="center"
      >
        {Farol(diagnostico.GroomingEPlanning)}
      </Grid>
      <Grid
        item
        xs
        style={corFarol(diagnostico.TamanhoDasEstorias)}
        container
        justify="center"
        direction="column"
        align="center"
      >
        {Farol(diagnostico.TamanhoDasEstorias)}
      </Grid>
      <Grid
        item
        xs
        style={corFarol(diagnostico.Burndown)}
        container
        justify="center"
        direction="column"
        align="center"
      >
        {Farol(diagnostico.Burndown)}
      </Grid>
      <Grid
        item
        xs
        style={corFarol(diagnostico.ReuniaoDiaria)}
        container
        justify="center"
        direction="column"
        align="center"
      >
        {Farol(diagnostico.ReuniaoDiaria)}
      </Grid>
      <Grid
        item
        xs
        style={corFarol(diagnostico.GestaoAVista)}
        container
        justify="center"
        direction="column"
        align="center"
      >
        {Farol(diagnostico.GestaoAVista)}
      </Grid>
      <Grid
        item
        xs
        style={corFarol(diagnostico.WorkInProgress)}
        container
        justify="center"
        direction="column"
        align="center"
      >
        {Farol(diagnostico.WorkInProgress)}
      </Grid>
      <Grid
        item
        xs
        style={corFarol(diagnostico.DtiFlow)}
        container
        justify="center"
        direction="column"
        align="center"
      >
        {Farol(diagnostico.DtiFlow)}
      </Grid>
      <Grid
        item
        xs
        style={corFarol(diagnostico.TestesAutomatizados)}
        container
        justify="center"
        direction="column"
        align="center"
      >
        {Farol(diagnostico.TestesAutomatizados)}
      </Grid>
      <Grid
        item
        xs
        style={corFarol(diagnostico.SonarQube)}
        container
        justify="center"
        direction="column"
        align="center"
      >
        {Farol(diagnostico.SonarQube)}
      </Grid>
      <Grid
        item
        xs
        style={corFarol(diagnostico.EstoqueDeSprints)}
        container
        justify="center"
        direction="column"
        align="center"
      >
        {Farol(diagnostico.EstoqueDeSprints)}
      </Grid>
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

const Farol = numero => {
  switch (numero) {
    case '1':
      return <ThumbDownIcon fontSize="large" style={{ color: '#ffffff' }} />;
    case '2':
      return <ThumbDownIcon fontSize="large" style={{ color: '#ffffff' }} />;
    case '3':
      return <ThumbUpIcon fontSize="large" style={{ color: '#ffffff' }} />;

    default:
      return;
  }
};

export default ItemDiagnostico;
