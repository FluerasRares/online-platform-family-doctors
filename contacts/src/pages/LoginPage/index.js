import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import { compose } from 'redux';
import styles from './styles';
import { Card, CardHeader, CardContent, TextField, Button, Typography } from '@material-ui/core';

const StartPage = ({ classes, backendError='' }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [usernameError, setUsernameError] = React.useState(false);
  const [usernameHelperText, setUsernameHelperText] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordHelperText, setPasswordHelperText] = React.useState('');

  React.useEffect(() => {
    const hasBackendPasswordError = backendError.indexOf('invalid credentials') >= 0;
    setUsernameError(hasBackendPasswordError);
    setPasswordError(hasBackendPasswordError);
    hasBackendPasswordError && setPasswordHelperText(backendError);
  }, [backendError])

  const validateAndSignin = () => {
    const isUsernameValid = !!username.trim();
    setUsernameError(!isUsernameValid)
    setUsernameHelperText(isUsernameValid ? '' : 'please enter your username')
    const isPasswordValid = !!password.trim();
    setPasswordError(!isPasswordValid)
    setPasswordHelperText(isPasswordValid ? '' : 'please enter your password')
    const isFormValid = isUsernameValid && isPasswordValid;
    // if (isFormValid) {
    //   clearError('signin');
    //   signin({ username, password });
    // }
  }

  return <div className={classes.root}>
    <Grid container spacing={1}>
      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        <Card>
          <CardHeader title="Sign in" style={{ background: '#f1f1f1' }} />
          <CardContent>
            <form noValidate autoComplete="off" className={classes.form}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField error={usernameError} helperText={usernameHelperText} fullWidth label="Username" value={username} className={classes.input} onChange={e => setUsername(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                  <TextField error={passwordError} helperText={passwordHelperText} fullWidth label="Password" type="password" value={password} className={classes.input} onChange={e => setPassword(e.target.value)} autoComplete="new-password" />
                </Grid>
                <Grid item xs={12}>&nbsp;</Grid>
                <Grid item xs={12}>
                  <Button variant="contained" className={classes.signinBtn} fullWidth onClick={validateAndSignin}>Sign in</Button>
                </Grid>
                {/* <Grid item xs={12}>
                  <br />
                  <Typography variant="body2" display="block" className={classes.signupLink} onClick={e => history.push('/signup')}>Nu am cont, vreau sa ma inregistrez</Typography>
                </Grid> */}
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>

  </div>;
}

export default compose(
  withStyles(styles, { withTheme: true }),
)(StartPage);
