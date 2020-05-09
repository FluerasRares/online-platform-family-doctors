import React, {Fragment} from 'react';
import {Route, withRouter} from 'react-router-dom';
import SignUp from '../components/SignUp';
import MyProfile from '../components/MyProfile';
import EditProfile from '../components/EditProfile';
// import UserManagementList from "../components/Listing/UserManagementList";
import Medics from "../components/Medics";

export const Routes = () => {

    return (
        <Fragment>
            <Route exact path="/" component={SignUp}/>
            {/* <Route exact path="/" component={MyProfile} /> */}
            <Route exact path="/myprofile" component={MyProfile}/>
            <Route exact path="/editprofile" component={EditProfile}/>
            <Route exact path="/directory" component={Medics}/>
            {/* <Route exact path="/" component={Chat} /> */}
            {/* <Route exact path="/chat" component={Chat} /> */}
        </Fragment>
    );
}

export default withRouter(Routes);
