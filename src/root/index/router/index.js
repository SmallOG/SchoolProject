import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from "../pages/home";
import Friend from '../pages/friend';
import My from '../pages/my';
const Router = (props)=>{
    return(
        <BrowserRouter>
            <div>
                <Route path='/' exact component={Home}></Route>
                <Route path='/home' exact component={Home}></Route>
                <Route path='/frient' exact component={Friend}></Route>
                <Route path='/my' exact component={My}></Route>
                <Route path='/koubei' exact component={Home}></Route>
            </div>

        </BrowserRouter>
   )
}
export default Router;
