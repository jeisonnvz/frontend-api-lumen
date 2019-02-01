import React from 'react';
import {Switch, Route} from 'react-router-dom';
import UsersIndex from '../UsersIndex';

const UsersRouting = () => (
    <Switch>
      <Route exact path='/users' component={UsersIndex}/>
    </Switch>
);

export default UsersRouting;
