import React, { Fragment } from 'react';
import { Card, CardHeader, CardContent, List, ListItem, ListItemText, ListItemAvatar, Avatar, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styles from './styles';
import LeftMenu from '../LeftMenu';
import Chat from '../Chat';

const Medics = ({ classes, history, medics =[{ id: 1, name: 'Ion Ionescu', specialitate: 'chirurg' }, { id: 2, name: 'Mihai Vasilescu', specialitate: 'ortoped' }] }) => {
  return <Fragment>
    <Grid container spacing={1}>
      <Grid item xs={2}><LeftMenu /></Grid>
      <Grid item xs={10}>
        <Card>
          <CardHeader title="Medici" style={{ background: '#f1f1f1' }} />
          <CardContent>
            <List component="nav">
              {medics
                .map(({ id, name, specialitate }, index) =>
                  <ListItem button key={index}>
                    <ListItemAvatar>
                      <Avatar alt={name} src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText primary={name} secondary={specialitate} style={{ display: 'inline'}}/>
                  </ListItem>
              )}
            </List>
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
