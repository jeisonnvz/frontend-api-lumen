import axios from 'axios';

import {API_BASE_URL1, API_BASE_URL2,API_BASE_URL3} from '../../../../config/api';
import SessionStorageService
  from '../../../../auth/services/SessionStorageService';


class CurrencyService {

  static createHeaders() {

    const headers = {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
      ,
    };
  }


  static getDolar() {
    const url = `${API_BASE_URL1}/projects`;

    return axios.request({
      url: url,
      method: 'get',
      headers: this.createHeaders(),
      data: {},
    });
  }
  static getPesos() {
    const url = `${API_BASE_URL2}/projects`;

    return axios.request({
      url: url,
      method: 'get',
      headers: this.createHeaders(),
      data: {},
    });
  }
  static getReal() {
    const url = `${API_BASE_URL3}/projects`;

    return axios.request({
      url: url,
      method: 'get',
      headers: this.createHeaders(),
      data: {},
    });
  }

  
}

export default CurrencyService;
