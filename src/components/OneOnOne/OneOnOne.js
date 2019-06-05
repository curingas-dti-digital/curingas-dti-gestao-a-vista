import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import OneOnOneRepo from '../../repos/OneOnOneRepo';
import ItemOneOnOne from './ItemOneOnOne';
import * as _ from 'lodash';

const styles = theme => ({
  card: {
    padding: theme.spacing.unit,
    height: `calc(100vh - 48px - ${theme.spacing.unit * 2})`
  }
});

class OneOnOne extends React.Component {
  state = {
    criarItem: false,
    listaOneOnOne: []
  };

  componentWillMount() {
    OneOnOneRepo.listarOneOnOne(this.props.cliente).then(listaOneOnOne => {
      this.setState({
        listaOneOnOne: listaOneOnOne
      });
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.card}>
        <Grid container spacing={8} direction="row">
          {_.chain(this.state.listaOneOnOne)
            .orderBy(oneOnOne => oneOnOne.Data)
            .map(oneOnOne => <ItemOneOnOne key={oneOnOne.Crafter} oneOnOne={oneOnOne} />)
            .value()}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(OneOnOne);
