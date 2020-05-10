import React, { Fragment } from 'react';
import { Card, CardContent, CardHeader, Grid, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, FormHelperText } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styles from './styles';
import LeftMenu from '../LeftMenu';
import VideocamIcon from '@material-ui/icons/Videocam';
import SendIcon from '@material-ui/icons/Send';
import ChatIcon from '@material-ui/icons/Chat';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import Chat from '../Chat';
import { selectAllMedics } from './selectors';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { selectCurrentUser } from '../User/selectors';
import { sendFile } from './actions';

// user = row
function actionFormatter(cell, user, { openChat, setAttachment, attachment, history, currentUser}) {
  // we should check if user is active or not (for the moment we presume all are active)
  return (
    <div>
      <IconButton edge="end" aria-label="video" onClick={e => history.push(`/test-video/${currentUser.prenume} ${currentUser.nume}`)}>
        <VideocamIcon/>
      </IconButton>
      <IconButton edge="end" aria-label="chat" onClick={e => openChat(user)} >
        <ChatIcon/>
      </IconButton>
      <IconButton edge="end" aria-label="file">
        <input type="file" onChange={e => setAttachment(e.target.files[0])} style={{ fontSize: 8, width: 60 }} />
      </IconButton>
    </div>
  )
}

const Medics = ({ medics = [{ id: 1, }], history, sendFile, currentUser = {} }) => {
  const [open, setOpen] = React.useState(false);
  const [chatWith, setChatWith] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [messageHelperText, setMessageHelperText] = React.useState('');
  const [attachment, setAttachment] = React.useState();

  const sendMessage = () => {
    setMessage('');
    setMessageHelperText('message sent');
  }

  const openChat = ({name}) => {
    setChatWith(name);
    setOpen(true);
  };

  const closeChat = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    sendFile(attachment);
    console.log(attachment);
    // setAttachment(undefined);
  }, [attachment, sendFile])

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
              data-show-header="false"
              data-search-align="left"
              search>
              <TableHeaderColumn dataField='id'
                isKey={true}>ID</TableHeaderColumn>
              {/* <TableHeaderColumn dataField='cmi'>CMI</TableHeaderColumn> */}
              <TableHeaderColumn dataField='name'>Nume / Prenume</TableHeaderColumn>
              {/* <TableHeaderColumn dataField='address'>Adresa</TableHeaderColumn> */}
              <TableHeaderColumn dataField='phone'>Telefon</TableHeaderColumn>
              <TableHeaderColumn dataField='email'>Email</TableHeaderColumn>
              <TableHeaderColumn dataField='department'>Departament</TableHeaderColumn>
              <TableHeaderColumn dataField='actions'
                dataFormat={actionFormatter}
                formatExtraData={{ openChat, setAttachment, attachment, history, currentUser }} ></TableHeaderColumn>
            </BootstrapTable>
          </CardContent>
        </Card>
      </Grid>
    </Grid>

    <Chat />

    <Dialog
      open={open}
      onClose={closeChat}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{`Start chat with ${chatWith}`}</DialogTitle>
      <DialogContent>
        {/* <Chat/> */}
        {/* <div id="chatlioWidgetPlaceholder" style={{ width: 450, height: 300 }}></div> */}
        {/* <TextField variant="outlined" placeholder="mesajul tau" style={{ width: '100%' }}/> */}

        <FormControl fullWidth variant="outlined">
          <InputLabel>Mesaj</InputLabel>
          <OutlinedInput
            value={message}
            onChange={e => setMessage(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={sendMessage} edge="end">
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            }            
            labelWidth={60}
          />
          <FormHelperText>{messageHelperText}</FormHelperText>
        </FormControl>

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

const mapDispatchToProps = {
  sendFile,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles, { withTheme: true }),
  withRouter,
)(Medics);
