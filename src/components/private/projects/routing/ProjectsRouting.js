import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ProjectsIndex from '../ProjectsIndex';

const ProjectsRouting = () => (
    <Switch>
        <Route exact path='/projects' component={ProjectsIndex}/>
    </Switch>
);

export default ProjectsRouting;
