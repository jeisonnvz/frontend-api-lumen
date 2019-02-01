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

    const numberOfActiveUsers = users.filter(
        user => user.status === 'ACTIVE').length;
    const numberOfInactiveUsers = users.length - numberOfActiveUsers;

    return (
        <div className="b-content container">
          <div className="b-users">

            <UsersTable users={users} onDeleteUser={this.handleClickDeleteUser}
                        onUpdateUserStatus={this.handleClickUpdateUserStatus}/>

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
          
          const indexToUpdate = prevState.users.findIndex(
              user => user.id === userToUpdate.id);

          
          prevState.users[indexToUpdate].status = userToUpdate.status;

        
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
