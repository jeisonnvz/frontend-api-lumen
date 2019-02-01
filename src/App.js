import React, {Component} from 'react';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Router from './routing/Router';

class App extends Component {
  render() {
    return (
        <div className="App">

          <Router/>

          <ToastContainer position="top-center"
                          autoClose={5000}
                          hideProgressBar={false}
                          newestOnTop={false}
                          closeOnClick
                          rtl={false}
                          pauseOnVisibilityChange
                          draggable
                          pauseOnHover/>
        </div>
    );
  }
}

export default App;
