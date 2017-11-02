import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ClassComp from './components/ClassComp';
import FuncComp from './components/FuncComp';
import RouteA from './components/RouteA';
import AxiosDemo from './components/AxiosDemo';
import Event from './components/Event';

export default (

    <Switch>
        <Route exact path='/' component={ClassComp} render={() => (
            <div>
                <ClassComp />
            </div>
        ) } />
        <Route path='/routea' component={RouteA} render={() => (
            <div>
                <RouteA />
            </div>
        ) } />
        <Route path='/axiosdemo' component={AxiosDemo} render={() => (
            <div>
                <AxiosDemo />
            </div>
        ) } />
       <Route path="/event/:id/:name" component={Event} />
            <div>
                <Event />
            </div>
        
        ) } />

       </Switch>
)
       



    



