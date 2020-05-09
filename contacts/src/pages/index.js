import React, { Fragment } from 'react';
import { Route, withRouter } from 'react-router-dom';
import SignUp from '../components/SignUp';
import MyProfile from '../components/MyProfile';
import EditProfile from '../components/EditProfile';

export const Routes = () => {
  return (
    <Fragment>
      <Route exact path="/" component={SignUp} />
      <Route exact path="/myprofile" component={MyProfile} />
      <Route exact path="/editprofile" component={EditProfile} />
    </Fragment>
  );
}

export default withRouter(Routes);
