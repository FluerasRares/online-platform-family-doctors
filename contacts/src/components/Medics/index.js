import React, { Fragment } from 'react';
import { Card, CardHeader, CardContent, List, ListItem, ListItemText, ListItemAvatar, Avatar, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styles from './styles';
import LeftMenu from '../LeftMenu';
import Chat from '../Chat';
import { selectAllMedics } from './selectors';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

const Medics = ({ medics = [] }) => {
  return <Fragment>
    <Grid container spacing={1}>
      <Grid item xs={2}><LeftMenu /></Grid>
      <Grid item xs={10}>
        <Card>
          <CardHeader title="Medici" style={{ background: '#f1f1f1' }} />
          <CardContent>
            <BootstrapTable data={medics}
              border={false}
              height='120'
              scrollTop={'Bottom'}
              search>
              <TableHeaderColumn dataField='id'
                isKey={true}>ID</TableHeaderColumn>
              <TableHeaderColumn dataField='name'>Nume / Prenume</TableHeaderColumn>
            </BootstrapTable>

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
  medics: selectAllMedics(state),
});

const mapDispatchToProps = {
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles, { withTheme: true }),
  withRouter,
)(Medics);
