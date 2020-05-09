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

const MyProfile = ({ classes, currentUser: { cellNumber = '123-456-7890', officeNumber ='123-456-7890', email='test@test.test', judet = 'Ilfov', specialitati = [], nume = 'Doe', prenume = 'John' } = {}, history }) => {
  const [fullName] = React.useState(`${prenume || ''} ${nume || ''}`);
  const editProfile = () => {
    history.push('editProfile');
  }
  return (
    <Fragment>
      <Grid container spacing={1}>
        <Grid item xs={2}><LeftMenu/></Grid>
        <Grid item xs={10}>
          <Card>
            <CardHeader title="Profilul Meu" style={{ background: '#f1f1f1'}}/>
            <CardContent>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField disabled fullWidth label="Nume" value={fullName} className={classes.input} />
                </Grid>
                <Grid item xs={12}>
                  <TextField disabled fullWidth label="Locatie" value={judet} className={classes.input} />
                </Grid>
                <Grid container item xs={12}>
                  {specialitati = [{ nume: 'Medicina de familie' }]
                    .map(({ nume = '', drept_de_practica = '', grad }, index) =>
                      <Grid item xs={12} key={index}>
                        <TextField disabled fullWidth label="Specialitate" value={nume} className={classes.input} />
                        {/* {nume} <br /> {drept_de_practica} <br /> {grad} */}
                      </Grid>
                    )}
                </Grid>
                <Grid item xs={12}>
                  <TextField disabled fullWidth label="Email" value={email} className={classes.input} />
                </Grid>
                <Grid item xs={6}>
                  <TextField disabled fullWidth label="Telefon mobil" value={cellNumber} className={classes.input} />
                </Grid>
                <Grid item xs={6}>
                  <TextField disabled fullWidth label="Telefon birou" value={officeNumber} className={classes.input} />
                </Grid>
              </Grid>
            </CardContent>
            <hr />
            <CardActions>
              <span style={{ flex: 1 }}></span>
              <Button onClick={e => editProfile()}>Edit Profile</Button>
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
)(MyProfile);
