
import React from 'react';
import UsersTable from './UsersTable';
import UsersService from './services/UsersService';
import {toast} from 'react-toastify';
import UsersFormCreate from './UsersFormCreate';
import './styles/Users.css';



class registrarIndex extends React.Component {

    state = {users: []};
  
    render() {
  
      const {users} = this.state;
  
      return (
          <div className="b-content container">
            <div className="b-users">
  
              <UsersTable users={users} onDeleteUser={this.handleClickDeleteUser}/>
  
              <div className="row">
                <div className="col-12 col-sm-8 col-md-6">
                  <UsersFormCreate onCreateUser={this.handleOnCreateUser}/>
                </div>
                
              </div>  
  
            </div>
          </div>
      );
    }


    handleOnCreateUser = (user) => {
        this.setState(prevState => ({
          users: [...prevState.users, user],
        }));
      };

    handleClickDeleteUser = (user) => {

    UsersService.deleteUser(user).then((response) => {
      const user = response.data;
      const {name, email} = user;
      toast.success(`User deleted: ${name} (${email})`);

      // Delete user from current state
      this.removeUserFromCurrentState(user);
    });
}
}
export default registrarIndex;