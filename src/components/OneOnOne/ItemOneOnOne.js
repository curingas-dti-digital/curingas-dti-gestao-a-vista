import React from 'react';
import { Typography, withStyles, Grid, Card, CardContent, CardHeader, Avatar } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import moment from 'moment';

const styles = () => ({
  Atrasado: {
    backgroundColor: '#e95d6a'
  },
  EmDia: {
    backgroundColor: '#57bb8a'
  },
  Proximo: {
    backgroundColor: '#f6b26b'
  },
  Escalado: {
    backgroundColor: '#505050'
  }
});

class ItemOneOnOne extends React.Component {
  render() {
    const { oneOnOne } = this.props;
    return (
      <Grid item xs={3}>
        <Card className={this.corStatus(oneOnOne.Data)}>
          <CardHeader
            style={{ paddingBottom: 0 }}
            avatar={
              <Avatar src={oneOnOne.Imagem} style={{ width: 80, height: 80, backgroundColor: '#1c68b1' }}>
                <Typography align="justify" style={{ fontSize: 52, fontWeight: 300, color: '#ffffff' }}>
                  {oneOnOne.Crafter[0]}
                </Typography>
              </Avatar>
            }
            title={
              <Typography align="justify" style={{ fontSize: 28, fontWeight: 900, color: '#ffffff' }}>
                {oneOnOne.Crafter}
              </Typography>
            }
          />
          <CardContent>
            <Grid container>
              <Grid item xs={5}>
                <Typography style={{ fontSize: 14, fontWeight: 200, fontStyle: 'italic', color: '#ffffff' }}>
                  Data:
                </Typography>
                <Typography style={{ fontSize: 22, fontWeight: 700, color: '#ffffff' }}>
                  {oneOnOne.Data.format('DD/MM')}
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography style={{ fontSize: 14, fontWeight: 200, fontStyle: 'italic', color: '#ffffff' }}>
                  Líder:
                </Typography>
                <Typography style={{ fontSize: 22, fontWeight: 400, color: '#ffffff' }}>
                  {oneOnOne.Lider}
                </Typography>
              </Grid>
              <Grid item xs={2} align="right">
                {oneOnOne.OKR && <AssignmentIcon style={{ color: '#ffffff' }} />}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    );
  }

  corStatus = data => {
    const dias = moment().diff(data, 'days');
    if (dias < 21) {
      return this.props.classes.EmDia;
    } else if (dias < 30) {
      return this.props.classes.Proximo;
    } else if (dias < 45) {
      return this.props.classes.Atrasado;
    } else {
      return this.props.classes.Escalado;
    }
  };
}

export default withStyles(styles)(ItemOneOnOne);
