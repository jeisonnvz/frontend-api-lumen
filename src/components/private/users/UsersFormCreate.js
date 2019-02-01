import React from 'react';
import {toast} from 'react-toastify';
import UsersService from './services/UsersService';

class UsersFormCreate extends React.Component {

  handleSubmitWithFormData = (event) => {
    event.preventDefault();

    if (!event.target.checkValidity()) {
      // form is invalid! so we do nothing
      console.warn('Invalid!');
      toast.error('Please, fill all the required fields!');
      return;
    }

    const data = new FormData(event.target);

    UsersService.createUser(data).then((response) => {
      
      
      toast.success(`Usuario creado con exito)`);

      // ejecuta el call back parametro revisar da error
      this.props.onCreateUser(response.data);
    });

  };

  render() {

    return (

        <div className="b-form">

          <h1>Create User</h1>
          <form onSubmit={this.handleSubmitWithFormData} noValidate>

            <div className="form-group">
              <label htmlFor="name">Nombre* :</label>
              <input id="name" name="name" className="form-control"
                     type="text" required/>
            </div>
            
            <div className="form-group">
              <label htmlFor="username">Apellido* :</label>
              <input id="surname" name="surname" className="form-control"
                     type="text" required/>
            </div>

            <div className="form-group">
              <label htmlFor="username">Correo* :</label>
              <input id="email" name="email" className="form-control"
                     type="email" required/>
            </div>

            <div className="form-group">
              <label htmlFor="username">Username* :</label>
              <input id="username" name="username" className="form-control"
                     type="text" required/>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password* :</label>
              <input id="password" name="password" className="form-control"
                     type="password" required/>
            </div>

            <button type="submit" className="btn btn-primary">Submit
            </button>
          </form>
        </div>
    );
  }
}

export default UsersFormCreate;
