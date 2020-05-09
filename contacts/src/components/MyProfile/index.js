import React, { Fragment } from 'react';
import { Typography, Card, CardHeader, CardContent } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styles from './styles';
import { selectCurrentUser } from '../User/selectors';

const MyProfile = ({ classes, currentUser = {} }) => {
  
  return (
    <Fragment>
      <Grid container spacing={2} style={{ marginTop: '4vh' }}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Card>
            <CardHeader title="Profilul Meu" style={{ background: '#f1f1f1'}}/>
            <CardContent>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography variant="h3"></Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5">{currentUser.prenume} {currentUser.nume}</Typography>
                </Grid>
                <Grid container item xs={12}>
                  <Grid item xs={6}>
                    <Typography variant="h5">Locatie</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h5">{currentUser.judet}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <br />
    </Fragment>
  )
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = {
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles, { withTheme: true }),
  withRouter,
)(MyProfile);
