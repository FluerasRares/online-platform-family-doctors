<<<<<<< HEAD
import React, { Fragment } from 'react';
import { Card, CardHeader, CardContent, List, ListItem, ListItemText, ListItemAvatar, Avatar, Grid, ListItemSecondaryAction, IconButton, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
=======
import React, {Fragment} from 'react';
import {Card, CardContent, CardHeader, Grid} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';
>>>>>>> cb985484ebd17c9ba862c460607d827bcb469a95
import styles from './styles';
import LeftMenu from '../LeftMenu';
import Chat from '../Chat';
import {selectAllMedics} from './selectors';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

<<<<<<< HEAD
const Medics = ({ medics = [] }) => {
  const [open, setOpen] = React.useState(false);
  const [chatWith, setChatWith] = React.useState('');

  const handleClickOpen = name => {
    console.log(name)
    setChatWith(name);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return <Fragment>
    <Grid container spacing={1}>
      <Grid item xs={2}><LeftMenu /></Grid>
      <Grid item xs={10}>
        <Card>
          <CardHeader title="Medici" style={{ background: '#f1f1f1' }} />
          <CardContent>

            {/* <BootstrapTable data={medics}
              border={false}
              height='120'
              scrollTop={'Bottom'}
              pagination
              search>
              <TableHeaderColumn dataField='id'
                isKey={true}>ID</TableHeaderColumn>
              <TableHeaderColumn dataField='name'>Nume / Prenume</TableHeaderColumn>
            </BootstrapTable> */}

            <List component="nav">
=======
// user = row
function actionFormatter(cell, user, history) {

    // we should check if user is active or not (for the moment we presume all are active)
    return (
        <div>
            <React.Fragment>
                <Link to={"#"}
                      onClick={e => history.push('/test-video/' + user.name)}
                >
                    Video
                </Link>
            </React.Fragment>
        </div>
    )
}

const Medics = ({medics = [], history}) => {

    return <Fragment>
        <Grid container spacing={1}>
            <Grid item xs={2}><LeftMenu/></Grid>
            <Grid item xs={10}>
                <Card>
                    <CardHeader title="Medici" style={{background: '#f1f1f1'}}/>
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
                                               formatExtraData={history}>Actiuni</TableHeaderColumn>
                        </BootstrapTable>

                        {/* <List component="nav">
>>>>>>> cb985484ebd17c9ba862c460607d827bcb469a95
              {medics
                .map(({ id, name, departament: specialitate }, index) =>
                  <ListItem button key={index}>
                    <ListItemAvatar>
                      <Avatar alt={name} src="../../assests/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText primary={name} secondary={specialitate} style={{ display: 'inline'}}/>
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="chat">
                        <ChatIcon onClick={e => handleClickOpen(name)}/>
                      </IconButton>
                    </ListItemSecondaryAction>                    
                  </ListItem>
              )}
<<<<<<< HEAD
            </List>
          </CardContent>
        </Card>
      </Grid>
    </Grid>

    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open chat
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{`Start chat with ${chatWith}`}</DialogTitle>
        <DialogContent>
          <div id="chatlioWidgetPlaceholder" style={{ width: 450, height: 300 }}></div>      
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>      
  </Fragment>
=======
            </List> */}
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        <Chat/>
    </Fragment>
>>>>>>> cb985484ebd17c9ba862c460607d827bcb469a95
}

const mapStateToProps = state => ({
    medics: selectAllMedics(state),
});

const mapDispatchToProps = {};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(styles, {withTheme: true}),
    withRouter,
)(Medics);
