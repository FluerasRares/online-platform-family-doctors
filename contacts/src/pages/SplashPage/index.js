import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import React from 'react';
import { compose } from 'redux';
import styles from './styles';
import { Card, CardHeader, CardContent, TextField, Button, Typography, CardMedia } from '@material-ui/core';

const SplashPage = ({ classes, history }) => {

  return <div className={classes.root}>
    <Grid container spacing={1}>
      <Grid item xs={12} style={{ marginTop: '20vh', color: '#0d47a1', fontWeight: 700, textShadow: '0px 0px 2px #444' }}><Typography variant="h5">Family Doctors Portal</Typography></Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <Card style={{ marginTop: '2vh' }}>
          <CardMedia
            style={{ width: '100%', height: '40vh', border: '1px solid #ccc' }}
            image="/medical.jpg"
          />
        </Card>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <Button onClick={e => history.push('/signup')} fullWidth variant="contained" style={{ marginTop: '4vh', color: 'white', background: '#2196f3' }}>Register</Button>
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
    <img src='/amfb.png' height="120" style={{ marginTop: '4vh' }}></img>
    <br />
  </div>;
}

export default compose(
  withStyles(styles, { withTheme: true }),
  withRouter,
)(SplashPage);
