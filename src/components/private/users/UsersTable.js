import React from 'react';

class UsersTable extends React.Component {

  handleClickOnIconToDeleteUser = (user) => {
    
    this.props.onDeleteUser(user);
  };

  render() {

    const {users} = this.props;

    return (
        <div>
          <h1>Users</h1>
          <table className="table">
            <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Email</th>
              <th scope="col">Eliminar</th>
            </tr>
            </thead>
            <tbody>

            {users.map(user => (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.surname}</td>
                  <td>{user.email}</td>
                 
                 
                  <td>
                    <button className="btn btn-danger"
                            onClick={() => this.handleClickOnIconToDeleteUser(
                                user)}>
                      <i className="b-delete far fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>))
            }

            </tbody>
          </table>
        </div>
    );
  }
}


export default UsersTable;
