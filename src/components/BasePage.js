import React from 'react';
import { AppBar, Toolbar, Grid, Typography } from '@material-ui/core';

export const BasePage = props => {
  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Grid container alignItems="center" spacing={16} style={{ padding: 0 }}>
            <Grid item xs={1}>
              <img width={80} src="./images/curingas_branca.png" alt="curingas" />
            </Grid>
            <Grid item xs={10}>
              <Typography align="center" variant="display2" color="inherit">
                {props.PageName}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <img width={80} src="./images/curingas_branca.png" alt="curingas" />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div style={{ padding: 8 }}>{props.InnerComponent}</div>
    </div>
  );
};
