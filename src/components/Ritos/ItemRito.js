import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import moment from 'moment';

export const ItemRito = props => {
  const squad = props.squad;
  return [
    <Grid key="a" item container xs={2} style={{ minHeight: 72 }}>
      <Grid item container justify="center" direction="column" align="right">
        <Typography style={{ fontSize: 22, fontWeight: 900 }}>
          {squad.Squad.replace('Curingas - ', '')}
        </Typography>
      </Grid>
    </Grid>,
    <Grid key="b" item container xs={10} justify="center">
      <Grid item xs={1} container justify="center" direction="column" align="center">
        {andon(squad.Andon)}
      </Grid>
      <Grid
        item
        xs={1}
        style={corFarolEstoque(squad.Estoque)}
        container
        justify="center"
        direction="column"
        align="center"
      >
        <Typography variant="h4" style={{ color: '#ffffff', fontWeight: 900 }}>
          {squad.Estoque}
        </Typography>
      </Grid>
      {dateCell(squad.CheckArquitetural)}
      {dateCell(squad.CheckExecucao)}
      {dateCell(squad.RetroSprint)}
    </Grid>
  ];
};

const dateCell = data => {
  return (
    <Grid
      item
      xs
      style={corFarolData(moment().diff(data, 'days'))}
      container
      justify="center"
      direction="column"
      align="center"
    >
      <Typography variant="h4" style={{ color: '#ffffff', fontWeight: 900 }}>
        {data.isValid() ? data.format('DD/MM/YY') : 'NOVO'}
      </Typography>
      {data.isValid() && (
        <Typography variant="subtitle2" style={{ color: '#ffffff', fontWeight: 400 }}>
          Próximo:{' '}
          {moment(data)
            .add(14, 'days')
            .format('DD/MM/YY')}
        </Typography>
      )}
    </Grid>
  );
};

const andon = andon => {
  switch (andon) {
    case 1:
      return <NotificationImportantIcon style={{ fontSize: 64, color: '#f6b26b' }} />;
    case 2:
      return <NotificationImportantIcon style={{ fontSize: 64, color: '#e95d6a' }} />;
    default:
      return <div />;
  }
};

const corFarolData = dias => {
  if (dias > 14) {
    return { backgroundColor: '#e95d6a' };
  } else if (dias === 14) {
    return { backgroundColor: '#f6b26b' };
  } else {
    return { backgroundColor: '#57bb8a' };
  }
};

const corFarolEstoque = sprints => {
  if (sprints > 1) {
    return { backgroundColor: '#e95d6a' };
  } else if (sprints === 1) {
    return { backgroundColor: '#f6b26b' };
  } else if (sprints < 1) {
    return { backgroundColor: '#57bb8a' };
  } else {
    return { backgroundColor: '#464646' };
  }
};

export default ItemRito;
