import React from 'react';
import {Switch, Route} from 'react-router-dom';
import registrarIndex from '../registrarIndex';

const registrarRouting = () => (
    <Switch>
      <Route exact path='/create' component={registrarIndex}/>
    </Switch>
);

export default registrarIndex;
