import React from 'react';
import { AppBar, Toolbar, Grid, Typography } from '@material-ui/core';

export const BasePage = props => {
  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Grid container alignItems="center" spacing={16} style={{ padding: 8 }}>
            <Grid item xs={1}>
              <img width={64} src="./images/curingas_branca.png" alt="curingas" />
            </Grid>
            <Grid item xs>
              <Typography align="left" variant="h3" color="inherit">
                {props.PageName}
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div style={{ padding: 8 }}>{props.InnerComponent}</div>
    </div>
  );
};
