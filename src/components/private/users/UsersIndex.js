import React from 'react';
import UsersTable from './UsersTable';
import UsersService from './services/UsersService';
import {toast} from 'react-toastify';
import UsersFormCreate from './UsersFormCreate';
import './styles/Users.css';


class UsersIndex extends React.Component {

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

  componentDidMount() {
    UsersService.getAllUsers().then((response) => {
      this.setState({users: response.data});
    });
  }

  removeUserFromCurrentState = (userToDelete) => {

    console.log('userToDelete', userToDelete);
    this.setState(
        prevState => ({
          users: prevState.users.filter(
              user => user.id !== userToDelete.id),
        }));
  };

  updateUserFromCurrentState = (userToUpdate) => {

    console.log('userToDelete', userToUpdate);
    this.setState(
        prevState => {
          // Find the user
          const indexToUpdate = prevState.users.findIndex(
              user => user.id === userToUpdate.id);

          // Modify the user
          prevState.users[indexToUpdate].status = userToUpdate.status;

          // Return a new array with modified user
          return {
            users: [...prevState.users],
          };

        });
  };

  handleOnCreateUser = (user) => {
    this.setState(prevState => ({
      users: [...prevState.users, user],
    }));
  };

  handleClickUpdateUserStatus = (user) => {
    UsersService.updateUserStatus(user).then((response) => {
      const user = response.data;
      const {name, email} = user;
      toast.success(`User updated: ${name} (${email})`);
      this.updateUserFromCurrentState(user);
    });
  };

  handleClickDeleteUser = (user) => {

    UsersService.deleteUser(user).then((response) => {
      const user = response.data;
      const {name, email} = user;
      toast.success(`User deleted: ${name} (${email})`);

      // Delete user from current state
      this.removeUserFromCurrentState(user);
    });
  };
}

export default UsersIndex;
