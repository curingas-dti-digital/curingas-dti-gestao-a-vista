import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Table, TableHead, TableRow, TableCell, TableBody, Fab, Card } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ItemRetro from './ItemRetro';
import ItemRetroDialog from './ItemRetroDialog';
import RetroStore from '../../repos/RetroStore';
import { BasePage } from '../BasePage';

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
    RetroStore.listarItemRetro(retroItens => {
      this.setState({
        items: retroItens
      });
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <BasePage
        PageName={'Retro da Tribo'}
        InnerComponent={
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
                    <ItemRetro item={item} />
                  ))}
                </TableBody>
              </Table>
            </Card>
            <Fab
              color="primary"
              aria-label="Add"
              className={classes.fab}
              onClick={() => {
                this.setState({ criarItem: true });
              }}
            >
              <AddIcon />
            </Fab>
            <ItemRetroDialog
              open={this.state.criarItem}
              item={{ id: '', data: { PlanoDeAcao: '', Responsavel: '', Status: 'Pendente' } }}
              onSave={item => {
                RetroStore.salvarItemRetro(item);
                this.setState({ criarItem: false });
              }}
              handleClose={() => {
                this.setState({ criarItem: false });
              }}
            />
          </div>
        }
      />
    );
  }
}

export default withStyles(styles)(Retro);