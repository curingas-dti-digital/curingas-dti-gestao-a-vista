import React from 'react';
import { Typography, withStyles, Grid, Card, CardContent, CardHeader, Avatar } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LinesEllipsis from 'react-lines-ellipsis';
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
    const { crafter } = this.props;
    return (
      <Grid item xs={2}>
        <Card className={this.corStatus(crafter.meeting)}>
          <CardHeader
            style={{ paddingBottom: 0 }}
            // avatar={
            //   <Avatar src={crafter.Imagem} style={{ width: 64, height: 64, backgroundColor: '#1c68b1' }}>
            //     <Typography align="justify" style={{ fontSize: 40, fontWeight: 300, color: '#ffffff' }}>
            //       {crafter.name[0]}
            //     </Typography>
            //   </Avatar>
            // }
            title={
              <Typography
                align="left"
                style={{
                  fontSize: 28,
                  fontWeight: 900,
                  color: '#ffffff',
                  minHeight: 140,
                  textTransform: 'capitalize'
                }}
              >
                {crafter.name}
                {/* {this.prettyName(crafter.email)} */}
              </Typography>
            }
          />
          <CardContent style={{ minHeight: 48 }}>
            <Grid container>
              <Grid item xs={3}>
                <Typography style={{ fontSize: 14, fontWeight: 200, fontStyle: 'italic', color: '#ffffff' }}>
                  Data:
                </Typography>
                <Typography style={{ fontSize: 22, fontWeight: 700, color: '#ffffff' }}>
                  {crafter.meeting ? moment(crafter.meeting.lastMeeting).format('DD/MM') : '-'}
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography style={{ fontSize: 14, fontWeight: 200, fontStyle: 'italic', color: '#ffffff' }}>
                  Líder:
                </Typography>
                <Typography style={{ fontSize: 22, fontWeight: 400, color: '#ffffff' }} noWrap={true}>
                  {crafter.meeting ? crafter.meeting.leader : '-'}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    );
  }

  prettyName = email => {
    return email
      .split('@')[0]
      .split('.')
      .join(' ');
  };

  corStatus = meeting => {
    if (!meeting) {
      return this.props.classes.Escalado;
    }
    const dias = moment().diff(moment(meeting.lastMeeting), 'days');
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
