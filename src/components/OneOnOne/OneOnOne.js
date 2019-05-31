import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Table, TableHead, TableRow, TableCell, TableBody, Card } from '@material-ui/core';
import OneOnOneRepo from '../../repos/OneOnOneRepo';
import ItemOneOnOne from './ItemOneOnOne';

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

class OneOnOne extends React.Component {
  state = {
    criarItem: false,
    listaOneOnOne: []
  };

  componentWillMount() {
    OneOnOneRepo.listarOneOnOne().then(listaOneOnOne => {
      this.setState({
        listaOneOnOne: listaOneOnOne
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
                <TableCell align="left">Crafter</TableCell>
                <TableCell align="center">Data</TableCell>
                <TableCell align="left">Liderado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.listaOneOnOne.map(oneOnOne => (
                <ItemOneOnOne key={oneOnOne.Crafter} oneOnOne={oneOnOne} />
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(OneOnOne);
