import React, { Fragment } from 'react';
import { Typography, Card, CardHeader, CardContent, CardActions, Button, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styles from './styles';
import { selectCurrentUser } from '../User/selectors';
import LeftMenu from '../LeftMenu';

const EditProfile = ({ classes, currentUser = {}, history }) => {
  const [nume] = React.useState(`${currentUser.prenume || 'John'} ${currentUser.nume || 'Doe'}`);
  const [cellNumber, setCellNumber] = React.useState('');
  const [officeNumber, setOfficeNumber] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [localitate, setLocalitate] = React.useState('');
  const [judet, setJudet] = React.useState(currentUser.judet);
  const saveProfile = () => {
    history.push('/directory');
  }
  const back = () => {
    history.push('/myprofile');
  }
  return (
    <Fragment>
      <Grid container spacing={1}>
        <Grid item xs={2}><LeftMenu /></Grid>
        <Grid item xs={10}>
          <Card>
            <CardHeader title="Profilul Meu" style={{ background: '#f1f1f1'}}/>
            <CardContent>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField disabled fullWidth label="Nume" value={nume} className={classes.input} />
                </Grid>
                <Grid item xs={12}>
                  {(currentUser.specialitati || [{ nume: 'Medicina de familie'}])
                    .map(({ nume = '', drept_de_practica = '', grad }, index) =>
                      <Grid item xs={12} key={index}>
                        <TextField disabled fullWidth value={nume} className={classes.input} />
                      </Grid>
                    )}
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth label="Localitate" value={localitate} className={classes.input} onChange={e => setLocalitate(e.target.value)} />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth label="Judet" value={judet} className={classes.input} onChange={e => setJudet(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Email" value={email} className={classes.input} onChange={e => setEmail(e.target.value)} />
                </Grid>
                <Grid container item xs={12}>
                  <Grid item xs={6}>
                    <TextField fullWidth label="Telefon mobil" value={cellNumber} className={classes.input} onChange={e => setCellNumber(e.target.value)} />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField fullWidth label="Telefon birou" value={officeNumber} className={classes.input} onChange={e => setOfficeNumber(e.target.value)} />
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
            <hr />
            <CardActions>
              <Button onClick={e => back()}>cancel</Button>
              <span style={{flex:1}}></span>
              <Button onClick={e => saveProfile()}>Save Profile</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <br />
    </Fragment>
  )
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = {
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles, { withTheme: true }),
  withRouter,
)(EditProfile);
