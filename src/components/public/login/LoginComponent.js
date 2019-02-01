import React from 'react';
import LoginForm from './LoginForm';

class LoginComponent extends React.Component {
  render() {
    const {location, onLogin} = this.props;

    return (
        <div className="container">
          <div className="mt-5">
            <LoginForm location={location} onLogin={onLogin}/>
          </div>
        </div>
    );
  }
}

export default LoginComponent;
