import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Series from '../../containers/Series';
import Counters from '../../containers/Counters';
import Todo from '../Todo';

const Main = (props) => (
    <Switch>
        <Route exact path="/" component={Series} />
        <Route exact path="/todo" component={Todo} />
        <Route path="/counters/:id" component={Counters} />
    </Switch>
)

export default Main;
