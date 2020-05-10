import React, {Fragment} from 'react';
import {Route, withRouter} from 'react-router-dom';
import SignUp from '../components/SignUp';
import MyProfile from '../components/MyProfile';
import EditProfile from '../components/EditProfile';
// import UserManagementList from "../components/Listing/UserManagementList";
import Medics from "../components/Medics";
import VideoChat from "../components/Video/VideoChat";
import Splash from "./SplashPage";

export const Routes = () => {

    return (
        <Fragment>
          <Route exact path="/" component={Splash} />
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/myprofile" component={MyProfile}/>
            <Route exact path="/editprofile" component={EditProfile}/>
            <Route exact path="/directory" component={Medics}/>
            <Route exact path="/test-video/:username" component={VideoChat}/>
        </Fragment>
    );
}

export default withRouter(Routes);
