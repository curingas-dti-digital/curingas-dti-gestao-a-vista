import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Table, TableHead, TableRow, TableCell, TableBody, Card } from '@material-ui/core';
import ItemRetro from './ItemRetro';
import RetroRepo from '../../repos/RetroRepo';

const styles = theme => ({
  card: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
});

class Retro extends React.Component {
  state = {
    criarItem: false,
    items: []
  };

  componentWillMount() {
    RetroRepo.listarRetro().then(retroItens => {
      this.setState({
        items: retroItens
      });
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left">Plano de Ação</TableCell>
                <TableCell align="left">Responsável</TableCell>
                <TableCell align="center">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.items.map(item => (
                <ItemRetro key={item.Acao} item={item} />
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Retro);
