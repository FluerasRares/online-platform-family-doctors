import React, { Fragment } from 'react';
import { Typography, Button, TextField, Card, CardHeader, CardContent } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styles from './styles';
import { signup } from './actions';
import { selectSignupError } from '../Errors/selectors'
import { clearError } from '../Errors/actions';

const SignUp = ({ classes, signup, history, backendError, clearError }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [cip, setCip] = React.useState('');
  const [usernameError, setUsernameError] = React.useState(false);
  const [usernameHelperText, setUsernameHelperText] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordHelperText, setPasswordHelperText] = React.useState('');
  const [cipError, setCipError] = React.useState(false);
  const [cipHelperText, setCipHelperText] = React.useState('Registrul Medicilor CUID (10 cifre)');
  
  const validateAndSignin = () => {
    const isUsernameValid = !!username.trim();
    setUsernameError(!isUsernameValid)
    setUsernameHelperText(isUsernameValid ? '' : 'Alege un username')
    const isPasswordValid = !!password.trim();
    setPasswordError(!isPasswordValid)
    setPasswordHelperText(isPasswordValid ? '' : 'Alege o parola')
    const isCipValid = !!cip.trim();
    setCipError(!isCipValid)
    setCipHelperText(isCipValid ? '' : 'Introdu CIP')
    const isFormValid = isUsernameValid && isPasswordValid && isCipValid;
    if (isFormValid) {
      clearError('signup');
      signup({ username, password, cip });
    }
  }

  React.useEffect(() => {
    const hasBackendCIPError = backendError.indexOf('CIP') >= 0;
    setCipError(hasBackendCIPError);
    hasBackendCIPError && setCipHelperText(backendError);
  }, [backendError])

  return (
    <div>
      <Grid container spacing={2} style={{ marginTop: '4vh' }}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Card>
            <CardHeader title="Inregistrare" style={{ background: '#f1f1f1'}}/>
            <CardContent>
              <form noValidate autoComplete="off" className={classes.form}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <TextField error={usernameError} helperText={usernameHelperText} fullWidth label="Username" value={username} className={classes.input} onChange={e => setUsername(e.target.value)} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField error={passwordError} helperText={passwordHelperText} fullWidth label="Parola" type="password" value={password} className={classes.input} onChange={e => setPassword(e.target.value)} autoComplete="new-password" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField error={cipError} helperText={cipHelperText} fullWidth label="Cod de Identificare Personala" value={cip} className={classes.input} onChange={e => setCip(e.target.value)} />
                  </Grid>
                  <Grid item xs={12}>&nbsp;</Grid>
                  <Grid item xs={3}></Grid>
                  <Grid item xs={6}>
                    <Button variant="contained" className={classes.signupBtn} fullWidth onClick={validateAndSignin}>Inregistrare</Button>
                  </Grid>
                  <Grid item xs={3}></Grid>
                  {/* <Grid item xs={12}>
                    <br/>
                    <Typography variant="body2" display="block" className={classes.signinLink} onClick={e => history.push('/user')}>Am deja un cont</Typography>
                  </Grid> */}
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </div>
  )
}

const mapStateToProps = state => ({
  backendError: selectSignupError(state),
});

const mapDispatchToProps = {
  signup,
  clearError,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles, { withTheme: true }),
  withRouter,
)(SignUp);
