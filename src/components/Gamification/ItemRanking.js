import React from 'react';
import { Typography, Grid, Card, CardContent, Avatar, CardHeader } from '@material-ui/core';

class ItemRanking extends React.Component {
  render() {
    const { curinga } = this.props;
    return (
      <Grid item xs={2}>
        <Card style={{ backgroundColor: '#22b5c3' }}>
          <CardHeader
            avatar={
              <Avatar src={curinga.Imagem} style={{ width: 80, height: 80, backgroundColor: '#ed6a20' }}>
                <Typography align="justify" style={{ fontSize: 48, fontWeight: 300, color: '#ffffff' }}>
                  {curinga.Crafter[0]}
                </Typography>
              </Avatar>
            }
            title={
              <Typography align="justify" style={{ fontSize: 20, fontWeight: 900, color: '#ffffff' }}>
                {curinga.Crafter}
              </Typography>
            }
          />
          <CardContent>
            <Typography style={{ fontSize: 20, fontWeight: 500, fontStyle: 'italic', color: '#ffffff' }}>
              {curinga.Pontos} Pontos
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default ItemRanking;
