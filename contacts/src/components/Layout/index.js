import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Layout = props => {
  const { classes, children } = props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        {children}
      </div>
    );
  }

export default withStyles(styles, { withTheme: true })(Layout);
