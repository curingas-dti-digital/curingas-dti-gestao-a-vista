import React from 'react';
import { TableRow, TableCell, Typography, IconButton, withStyles } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import RetroStore from '../../firestore/RetroStore';
import ItemRetroDialog from './ItemRetroDialog';

const styles = theme => ({
  Pendente: {
    backgroundColor: '#e95d6a'
  },
  Concluído: {
    backgroundColor: '#57bb8a'
  },
  Andamento: {
    backgroundColor: '#6fa8dc'
  }
});

class ItemRetro extends React.Component {
  state = {
    editarItem: false
  };
  render() {
    const { item, classes } = this.props;
    return (
      <TableRow>
        <TableCell padding="none">
          <Typography style={{ fontSize: 40, fontWeight: 600 }}>
            {item.data && item.data.PlanoDeAcao}
          </Typography>
        </TableCell>
        <TableCell padding="none">
          <Typography style={{ fontSize: 20, fontWeight: 600 }}>
            {item.data && item.data.Responsavel}
          </Typography>
        </TableCell>
        <TableCell className={classes[item.data && item.data.Status]} align="center" padding="none">
          <Typography align="center" style={{ fontSize: 20, fontWeight: 400, color: '#ffffff' }}>
            {item.data && item.data.Status}
          </Typography>
        </TableCell>
        <TableCell padding="none">
          <IconButton
            size="small"
            onClick={() => {
              this.setState({ editarItem: true });
            }}
          >
            <EditIcon />
          </IconButton>
        </TableCell>
        <TableCell padding="none">
          <IconButton
            size="small"
            onClick={() => {
              RetroStore.excluirItemRetro(item);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </TableCell>
        <ItemRetroDialog
          open={this.state.editarItem}
          item={item}
          onSave={item => {
            RetroStore.atualizarItemRetro(item);
            this.setState({ editarItem: false });
          }}
          handleClose={() => {
            this.setState({ editarItem: false });
          }}
        />
      </TableRow>
    );
  }
}

export default withStyles(styles)(ItemRetro);
