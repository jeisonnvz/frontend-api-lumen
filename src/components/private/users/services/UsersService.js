import axios from 'axios';
import {API_BASE_URL, SESSION_STORAGE_USER_KEY} from '../../../../config/api';
import SessionStorageService
  from '../../../../auth/services/SessionStorageService';

class UsersService {

  static createHeaders() {

    // 1. Create "regular" headers
    const headers = {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    };

    // 2. GET the data from the Session Storage
    const userData = SessionStorageService.get(SESSION_STORAGE_USER_KEY);

    // 3. Try to read the api token and then create the "Authorization" header
    if (!!userData && typeof userData.api_token === 'string') {
      headers['Authorization'] = userData['api_token'];
    }

    console.log('UsersService >> createHeaders()', headers);

    return headers;

  }

  // data: FormData (https://developer.mozilla.org/en-US/docs/Web/API/FormData)
  static createUser(data) {
    const url = `${API_BASE_URL}/users`;

    return axios.request({
      url: url,
      method: 'post',
      headers: this.createHeaders(),
      data: {
        name: data.get('name'),
        surname: data.get('surname'),
        username: data.get('username'),
        email: data.get('email'),
        password: data.get('password'),
      },
    });
  }


  static getAllUsers() {
    const url = `${API_BASE_URL}/users`;

    return axios.request({
      url: url,
      method: 'get',
      headers: this.createHeaders(),
      data: {},// Important: keep data empty so the header "Content-Type" is not removed
    });
  }

  static deleteUser(user) {

    if (typeof user === 'undefined') {
      throw new Error('No user ID was provided on deleteUser method');
    }

    const url = `${API_BASE_URL}/users/${user.id}`;
    return axios.request({
      url: url,
      method: 'delete',
      headers: this.createHeaders(),
      data: {},// Important: keep data empty so the header "Content-Type" is not removed
    });
  }
}

export default UsersService;
