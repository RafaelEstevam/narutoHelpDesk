import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginView from './views/Login/login.view'
import ProfileView from './views/Profile/profile.view'
import UserView from './views/Users/user.view'
import NoMatchView from './views/404/404.view'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LoginView} />
                <Route path="/profile" exact component={ProfileView} />
                <Route path="/users" exact component={UserView} />
                <Route path="*" component={NoMatchView} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;