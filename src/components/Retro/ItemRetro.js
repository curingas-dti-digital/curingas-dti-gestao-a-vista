import React from 'react';
import { TableRow, TableCell, Typography, withStyles } from '@material-ui/core';

const styles = () => ({
  Pendente: {
    backgroundColor: '#e95d6a'
  },
  Concluido: {
    backgroundColor: '#57bb8a'
  },
  Andamento: {
    backgroundColor: '#6fa8dc'
  },
  Cancelado: {
    backgroundColor: '#303030'
  }
});

class ItemRetro extends React.Component {
  state = {
    editarItem: false
  };
  render() {
    const { item } = this.props;
    return (
      <TableRow>
        <TableCell padding="none">
          <Typography style={{ fontSize: 40, fontWeight: 600 }}>{item.Acao}</Typography>
        </TableCell>
        <TableCell padding="none">
          <Typography style={{ fontSize: 24, fontWeight: 600 }}>{item.Responsavel}</Typography>
        </TableCell>
        <TableCell className={this.corStatus(item.Status)} align="center" padding="none">
          <Typography align="center" style={{ fontSize: 24, fontWeight: 400, color: '#ffffff' }}>
            {item.Status}
          </Typography>
        </TableCell>
      </TableRow>
    );
  }

  corStatus = status => {
    switch (status) {
      case 'Pendente':
        return this.props.classes.Pendente;
      case 'Concluído':
        return this.props.classes.Concluido;
      case 'Em andamento':
        return this.props.classes.Andamento;
      case 'Cancelado':
        return this.props.classes.Cancelado;
      default:
        return this.props.classes.Cancelado;
    }
  };
}

export default withStyles(styles)(ItemRetro);
