import React from 'react';
import {NavLink} from 'react-router-dom';
import AuthenticationService
  from '../../../../auth/services/AuthenticationService';
import {withRouter} from 'react-router-dom';

class Header extends React.Component {

  handleLogout = () => {
    AuthenticationService.logout().then(() => {
      console.log('Header >> handleLogout()');

      // Re-set the state in the Router component
      this.props.onLogout();

      // Redirect to the public home
      this.props.history.push('/');
    });
  };

  render() {

    const {isUserAuthenticated} = this.props;

    return (
        // https://bootswatch.com/lumen/
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <NavLink className="navbar-brand" to={'/'}>
                <i className="fas fa-project-diagram"></i>
                <span>&nbsp;Project Manager</span></NavLink>
              <button className="navbar-toggler" type="button"
                      data-toggle="collapse" data-target="#navbarRight"
                      aria-controls="navbarRight" aria-expanded="false"
                      aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarRight">
                {isUserAuthenticated &&
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to={'/users'}
                             activeStyle={{color: '#158CBA'}}>Users</NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to={'/projects'}
                             activeStyle={{color: '#158CBA'}}>Projects</NavLink>
                  </li>

                  <li className="nav-item">
                    <button className="btn btn-danger"
                            onClick={this.handleLogout}>
                      <i className="fas fa-sign-out-alt"></i>
                      <span className={'sr-only'}>Logout</span>
                    </button>
                  </li>
                  

                </ul>}
                
                {!isUserAuthenticated &&
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink className="btn btn-primary"
                             to={'/create'}>sing up</NavLink>
                             </li>
                </ul>}

                  
                {!isUserAuthenticated &&
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink className="btn btn-primary"
                             to={'/login'}>Login</NavLink>

                  </li>
                </ul>}
              </div>
            </div>
          </nav>
        </header>
    );
  }
}

export default withRouter(Header);
