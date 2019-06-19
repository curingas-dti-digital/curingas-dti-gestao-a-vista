import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import * as _ from 'lodash';
import ItemRanking from './ItemRanking';
import CuringasRepo from '../../repos/CuringasRepo';

const styles = theme => ({
  card: {
    padding: theme.spacing.unit,
    height: `calc(100vh - 48px - ${theme.spacing.unit * 2})`
  }
});

class Ranking extends React.Component {
  state = {
    ranking: []
  };

  componentWillMount() {
    CuringasRepo.listarCuringas().then(ranking => {
      this.setState({
        ranking: ranking
      });
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.card}>
        <Grid container spacing={8} direction="row">
          {_.chain(this.state.ranking)
            .filter(curinga => curinga.Pontos > 0)
            .orderBy(curinga => curinga.Pontos, 'desc')
            .map(curinga => <ItemRanking key={curinga.Crafter} curinga={curinga} />)
            .value()}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Ranking);
