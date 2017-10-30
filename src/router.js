import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ClassComp from './components/ClassComp';
import FuncComp from './components/FuncComp';
import RouteA from './components/RouteA';
import AxiosDemo from './components/AxiosDemo';
import Dog from './components/Dog';



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
        <Route path='/dog/:id' component={Dog} render={() => (
            <div>
                <Dog />
            </div>
        ) } />

       </Switch>
)
       



    



