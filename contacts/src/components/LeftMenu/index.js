import React, { Fragment } from 'react';
import {  MenuItem, Menu } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styles from './styles';

const LeftMenu = ({ classes, history }) => {
  return (
    <div style={{ width: '100%', height: '100vh', background: '#cacaca' }}>
      <MenuItem onClick={e => history.push('/myprofile')}>Profilul Meu</MenuItem>
      <MenuItem onClick={e => history.push('/directory')}>Medici</MenuItem>
      <MenuItem>Video Conf</MenuItem>
    </div>
  )
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles, { withTheme: true }),
  withRouter,
)(LeftMenu);
