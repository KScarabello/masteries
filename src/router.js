import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ClassComp from './components/ClassComp';
import FuncComp from './components/FuncComp';
import RouteA from './components/RouteA';



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
        

       </Switch>
)
       



    



