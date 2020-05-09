import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import LeftMenu from '../LeftMenu';

const Layout = props => {
  const { classes, children } = props;
    return (
      <div className={classes.root}>
        <LeftMenu/>
        {children}
      </div>
    );
  }

export default withStyles(styles, { withTheme: true })(Layout);
