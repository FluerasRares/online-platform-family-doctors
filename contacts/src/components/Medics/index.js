import React, {Fragment} from 'react';
import {Card, CardContent, CardHeader, Grid} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';
import styles from './styles';
import LeftMenu from '../LeftMenu';
import Chat from '../Chat';
import {selectAllMedics} from './selectors';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

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
              {medics
                .map(({ id, name, departament: specialitate }, index) =>
                  <ListItem button key={index}>
                    <ListItemAvatar>
                      <Avatar alt={name} src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText primary={name} secondary={specialitate} style={{ display: 'inline'}}/>
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="chat">
                        <ChatIcon/>
                      </IconButton>
                    </ListItemSecondaryAction>                    
                  </ListItem>
              )}
            </List> */}
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

const mapDispatchToProps = {};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(styles, {withTheme: true}),
    withRouter,
)(Medics);
