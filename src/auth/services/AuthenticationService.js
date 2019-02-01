import {API_BASE_URL, SESSION_STORAGE_USER_KEY} from '../../config/api';
import axios from 'axios';
import SessionStorageService from './SessionStorageService';

class AuthenticationService {

  static isAuthenticated = false;
  static userData;

  static login(username, password) {
    return new Promise((resolve, reject) => {

      const headers = {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      };

      const requestURL = `${API_BASE_URL}/users/login`;
      const requestData = {username: username, password: password};
      const requestConfig = {headers: headers};

      axios.post(requestURL, requestData, requestConfig).then((response) => {

        const userData = response.data;
        this.isAuthenticated = true;
        this.userData = userData;

        SessionStorageService.set(SESSION_STORAGE_USER_KEY, userData);

        resolve(userData);

      }).catch(error => reject(error));
    });
  }

  static isUserAuthenticated() {
    const userData = SessionStorageService.get(SESSION_STORAGE_USER_KEY);

    console.log('isUserAuthenticated', userData);

    this.isAuthenticated = (!!userData && typeof userData.api_token ===
        'string');

    return this.isAuthenticated;
  }

  static logout() {

    return new Promise((resolve, reject) => {
      this.isAuthenticated = false;
      SessionStorageService.remove(SESSION_STORAGE_USER_KEY);
      resolve();

      // TODO: Do you want to do something in the backend?
      // Then send a request here to logout
    });

  }

}

export default AuthenticationService;
