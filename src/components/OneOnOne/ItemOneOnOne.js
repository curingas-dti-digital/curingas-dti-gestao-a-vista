import React from 'react';
import { TableRow, TableCell, Typography, withStyles } from '@material-ui/core';
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
    backgroundColor: '#303030'
  }
});

class ItemOneOnOne extends React.Component {
  render() {
    const { oneOnOne } = this.props;
    return (
      <TableRow>
        <TableCell>
          <Typography style={{ fontSize: 40, fontWeight: 600 }}>{oneOnOne.Crafter}</Typography>
        </TableCell>
        <TableCell className={this.corStatus(oneOnOne.Data)} align="center">
          <Typography style={{ fontSize: 24, fontWeight: 600, color: '#ffffff' }}>
            {oneOnOne.Data.format('DD/MM/YY')}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography align="center" style={{ fontSize: 40, fontWeight: 300 }}>
            {oneOnOne.Liderado}
          </Typography>
        </TableCell>
      </TableRow>
    );
  }

  corStatus = data => {
    const dias = moment().diff(data, 'days');
    if (dias > 45) {
      return this.props.classes.Escalado;
    } else if (dias > 30) {
      return this.props.classes.Atrasado;
    } else if (dias > 21) {
      return this.props.classes.Proximo;
    } else {
      return this.props.classes.EmDia;
    }
  };
}

export default withStyles(styles)(ItemOneOnOne);
