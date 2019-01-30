import React from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../config/api';

class UsersIndex extends  React.Component{
    state= {users: []};

    render() {
        const {users}=this.state;
        return (
          <div className="App">
            <h1> Users</h1>
            <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Nombre</th>
      <th scope="col">Surname</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
  {
            
            users.map(user=> (
            
          
    <tr key={user.id.toString()}>
      <th scope="row">1</th>
      <td>{user.name}</td>
      <td>{user.surname}</td>
      <td>@{user.username}</td>
      <td>@{user.email}</td>
      <td> TBD</td>
    </tr>
      ))
          }
  </tbody>
</table>

 
          </div>
        );
      }
      componentDidMount(){

        const url=`${API_BASE_URL}/users`;
        axios.get(url, {
          headers: {
            'Content-Type': 'application/json'
        
        },data:{}//Issue
        }).then(response=> {this.setState({users: response.data});
    
        });
      }
}
export default UsersIndex;