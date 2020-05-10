import React, { Fragment } from 'react';
import { Card, CardContent, CardHeader, Grid, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styles from './styles';
import LeftMenu from '../LeftMenu';
import VideocamIcon from '@material-ui/icons/Videocam';
import ChatIcon from '@material-ui/icons/Chat';
import Chat from '../Chat';
import { selectAllMedics } from './selectors';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { selectCurrentUser } from '../User/selectors';

// user = row
function actionFormatter(cell, user, {openChat, history, currentUser}) {
  // we should check if user is active or not (for the moment we presume all are active)
  return (
    <div>
      <IconButton edge="end" aria-label="video" onClick={e => history.push(`/test-video/${currentUser.prenume} ${currentUser.nume}`)}>
        <VideocamIcon/>
      </IconButton>
      <IconButton edge="end" aria-label="chat">
        <ChatIcon onClick={e => openChat(user)} />
      </IconButton>
    </div>
  )
}

const Medics = ({ medics = [], history, currentUser = {} }) => {
  const [open, setOpen] = React.useState(false);
  const [chatWith, setChatWith] = React.useState('');

  const openChat = ({name}) => {
    setChatWith(name);
    setOpen(true);
  };

  const closeChat = () => {
    setOpen(false);
  };

  return <Fragment>
    <Grid container spacing={1}>
      <Grid item xs={2}><LeftMenu /></Grid>
      <Grid item xs={10}>
        <Card>
          <CardHeader title="Medici" style={{ background: '#f1f1f1' }} />
          <CardContent>
            <BootstrapTable data={medics}
              border={false}
              // height='120'
              scrollTop={'Bottom'}
              pagination
              search>
              <TableHeaderColumn dataField='id'
                isKey={true}>ID</TableHeaderColumn>
              <TableHeaderColumn dataField='cmi'>CMI</TableHeaderColumn>
              <TableHeaderColumn dataField='name'>Nume / Prenume</TableHeaderColumn>
              <TableHeaderColumn dataField='address'>Adresa</TableHeaderColumn>
              <TableHeaderColumn dataField='phone'>Telefon</TableHeaderColumn>
              <TableHeaderColumn dataField='email'>Email</TableHeaderColumn>
              <TableHeaderColumn dataField='department'>Departament</TableHeaderColumn>
              <TableHeaderColumn dataField='actions'
                dataFormat={actionFormatter}
                formatExtraData={{ openChat, history, currentUser }} >Actiuni</TableHeaderColumn>
            </BootstrapTable>
          </CardContent>
        </Card>
      </Grid>
    </Grid>

    <Dialog
      open={open}
      onClose={closeChat}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{`Start chat with ${chatWith}`}</DialogTitle>
      <DialogContent>
        <div id="chatlioWidgetPlaceholder" style={{ width: 450, height: 300 }}></div>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeChat} color="primary" autoFocus>
          Close
          </Button>
      </DialogActions>
    </Dialog>
  </Fragment>
}

const mapStateToProps = state => ({
  medics: selectAllMedics(state),
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = {};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles, { withTheme: true }),
  withRouter,
)(Medics);
