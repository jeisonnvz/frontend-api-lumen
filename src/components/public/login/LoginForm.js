import React from 'react';
import {toast} from 'react-toastify';
import AuthenticationService
  from '../../../auth/services/AuthenticationService';
import {Redirect} from 'react-router-dom';

class LoginForm extends React.Component {

  state = {
    redirectToReferrer: false,
  };

  handleLoginAction = (event) => {
    event.preventDefault();

    if (!event.target.checkValidity()) {
      // form is invalid! so we do nothing
      console.warn('Invalid!');
      toast.error('Please, fill all the required fields!');
      return;
    }

    const data = new FormData(event.target);
    const userName = data.get('username');
    const password = data.get('password');

    AuthenticationService.login(userName, password).then(() => {
      // Emit an event, so other component can know something has occurred:
      console.log(
          'LoginForm >> Trigger the onLogin() callback, before redirecting...');
      this.props.onLogin();

      this.setState(() => ({
        redirectToReferrer: true,
      }));

    }).catch(error => {
      console.error(error);
      toast.error(`Couldn't start a session!`);
    });
  };

  render() {

    const {from} = this.props.location.state || {from: {pathname: '/'}};
    const {redirectToReferrer} = this.state;
    //
    if (redirectToReferrer) {
      return <Redirect to={from}/>;
    }

    return (
        <div className="col-12 col-sm-12 col-md-6 offset-md-3">
          <div className="b-form">
            <h1>Login</h1>
            <form onSubmit={this.handleLoginAction} noValidate>

              <div className="form-group">
                <label htmlFor="username">Username* :</label>
                <input id="username" name="username" className="form-control"
                       type="text" required
                       defaultValue={'esmeralda-rodriguez'}/>
              </div>

              <div className="form-group">
                <label htmlFor="password">Password* :</label>
                <input id="password" name="password" className="form-control"
                       type="password" required defaultValue={'esmeralda'}/>
              </div>

              <button type="submit" className="btn btn-primary">Submit
              </button>
            </form>
          </div>
        </div>
    );
  }
}

export default LoginForm;
