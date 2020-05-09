import React, { Fragment } from 'react';
import { Typography, Card, CardHeader, CardContent, CardActions, Button, TextField, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styles from './styles';
import LeftMenu from '../LeftMenu';
import Chat from '../Chat';

const Medics = ({ classes, history }) => {
  return <Fragment>
    <Grid container spacing={0}>
      <Grid item xs={3}><LeftMenu /></Grid>
      <Grid item xs={9}>
        <Card>
          <CardHeader title="Medici" style={{ background: '#f1f1f1' }} />
          <CardContent>
          todo
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    <Chat/>
  </Fragment>
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles, { withTheme: true }),
  withRouter,
)(Medics);
