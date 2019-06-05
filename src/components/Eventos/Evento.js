import React from 'react';
import { withStyles, Card, CardMedia, CardContent, Typography } from '@material-ui/core';

const styles = () => ({
  media: {
    paddingTop: '100%'
  }
});

class Evento extends React.Component {
  render() {
    const { evento, classes } = this.props;
    return (
      <Card>
        <CardMedia className={classes.media} image={evento.Imagem} />
        <CardContent>
          <Typography color="primary" style={{ fontSize: 24, fontWeight: 900 }}>
            {evento.Responsavel}
          </Typography>
          <Typography style={{ fontSize: 18, fontWeight: 200 }}>{evento.Data.format('DD/MM')}</Typography>
          <Typography style={{ fontSize: 16, fontWeight: 400 }}>{evento.Descricao}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Evento);
