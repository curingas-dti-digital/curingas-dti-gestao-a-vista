import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import moment from 'moment';

export const ItemRito = props => {
  const squad = props.squad;
  return [
    <Grid key="a" item container xs={3} style={{ minHeight: 72 }}>
      <Grid item container justify="center" direction="column" align="right">
        <Typography style={{ fontSize: 20, fontWeight: 700 }}>
          {squad.Squad.replace('Curingas - ', '')}
        </Typography>
      </Grid>
    </Grid>,
    <Grid key="b" item container xs={9} justify="center">
      <Grid item xs={2} container justify="center" direction="column" align="center">
        {andon(squad.Andon)}
      </Grid>
      <Grid
        item
        xs
        style={corFarol(moment().diff(squad.CheckArquitetural, 'days'))}
        container
        justify="center"
        direction="column"
        align="center"
      >
        <Typography variant="h5" style={{ color: '#ffffff' }}>
          {squad.CheckArquitetural && squad.CheckArquitetural.format('DD/MM/YY')}
        </Typography>
      </Grid>
      <Grid
        item
        xs
        style={corFarol(moment().diff(squad.CheckExecucao, 'days'))}
        container
        justify="center"
        direction="column"
        align="center"
      >
        <Typography variant="h5" style={{ color: '#ffffff' }}>
          {squad.CheckExecucao && squad.CheckExecucao.format('DD/MM/YY')}
        </Typography>
      </Grid>
      <Grid
        item
        xs
        style={corFarol(moment().diff(squad.Retro, 'days'))}
        container
        justify="center"
        direction="column"
        align="center"
      >
        <Typography variant="h5" style={{ color: '#ffffff' }}>
          {squad.Retro && squad.Retro.format('DD/MM/YY')}
        </Typography>
      </Grid>
    </Grid>
  ];
};

const andon = andon => {
  switch (andon) {
    case '1':
      return <NotificationImportantIcon style={{ fontSize: 64, color: '#f6b26b' }} />;
    case '2':
      return <NotificationImportantIcon style={{ fontSize: 64, color: '#e95d6a' }} />;
    default:
      return <div />;
  }
};

const corFarol = dias => {
  if (dias > 14) {
    return { backgroundColor: '#e95d6a' };
  } else if (dias === 14) {
    return { backgroundColor: '#f6b26b' };
  } else {
    return { backgroundColor: '#57bb8a' };
  }
};

export default ItemRito;
