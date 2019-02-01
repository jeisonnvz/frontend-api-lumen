import React from 'react';

import {Redirect, Route} from 'react-router-dom';

import AuthenticationService from '../auth/services/AuthenticationService';

const PrivateRoute = ({component: Component, ...rest}) => (

    <Route {...rest} render={(props) => (
        AuthenticationService.isUserAuthenticated() === true ?
            <Component {...props}/> : <Redirect to={{
              pathname: '/login',
              state: {from: props.location},
            }}/>
    )}/>

);

export default PrivateRoute;
