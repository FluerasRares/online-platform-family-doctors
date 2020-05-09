import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import { compose } from 'redux';
import styles from './styles';

const StartPage = ({ classes }) => {
  return <div className={classes.root}>
    <Grid container spacing={1}>
      <Grid item xs={12}>
        
      </Grid>
    </Grid>
  </div>;
}

export default compose(
  withStyles(styles, { withTheme: true }),
)(StartPage);
