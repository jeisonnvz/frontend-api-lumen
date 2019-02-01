import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PrivateHomeIndex from '../components/private/home/PrivateHomeIndex';
import UsersRouting from '../components/private/users/routing/UsersRouting';
import Header from '../components/private/common/header/Header';
import ProjectsRouting
  from '../components/private/projects/routing/ProjectsRouting';
import LoginComponent from '../components/public/login/LoginComponent';
import PrivateRoute from './PrivateRoute';
import PublicHomeIndex from '../components/public/home/PublicHomeIndex';
import AuthenticationService from '../auth/services/AuthenticationService';

class Router extends React.Component {

  state = {isUserAuthenticated: false};

  constructor(props) {
    super(props);
    this.state.isUserAuthenticated = AuthenticationService.isUserAuthenticated();
  }

  onLogin = () => {
    console.log('Router >> onLogin() from Router...');

    this.setState((prevState) => ({
      isUserAuthenticated: AuthenticationService.isUserAuthenticated(),
    }));
  };

  onLogout = () => {
    console.log('Router >> onLogout() from Router...');

    this.setState((prevState) => ({
      isUserAuthenticated: AuthenticationService.isUserAuthenticated(),
    }));
  };

  render() {

    const {isUserAuthenticated} = this.state;

    return (
        <BrowserRouter>
          <div>
            <Header isUserAuthenticated={isUserAuthenticated}
                    onLogout={this.onLogout}/>

            <Switch>
              <Route exact path="/" component={PublicHomeIndex}/>
              <Route path="/login"
                     render={(props) =>
                         <LoginComponent {...props} onLogin={this.onLogin}/>}/>
              <PrivateRoute path="/home" component={PrivateHomeIndex}/>
              <PrivateRoute path="/users" component={UsersRouting}/>
              <PrivateRoute path="/projects" component={ProjectsRouting}/>
            </Switch>

          </div>
        </BrowserRouter>
    );
  }

};

export default Router;
