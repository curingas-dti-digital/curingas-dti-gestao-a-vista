import React from 'react';
import { withStyles, Card, CardMedia, CardContent, Typography } from '@material-ui/core';

const styles = () => ({
  media: {
    height: 360,
    paddingTop: 0
  }
});

class Evento extends React.Component {
  render() {
    const { evento, classes } = this.props;
    return (
      <Card>
        <CardMedia className={classes.media} image={evento.data.Imagem} />
        <CardContent>
          <Typography variant="h5">{evento.data.Responsavel}</Typography>
          <Typography variant="body2">{evento.data.Descricao}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Evento);
