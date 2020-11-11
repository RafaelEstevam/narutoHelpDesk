import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import {getStorageLogin} from './services/auth.service';
import {searchRoute} from './services/routes.service';

import LoginView from './views/Login/login.view'
import NoMatchView from './views/404/404.view'
import RegisterView from './views/Register/register.view'
import ProfileView from './views/Profile/profile.view'
import UsersView from './views/Users/users.view'
import TicketView from './views/Tickets/ticket.view'
import TicketsView from './views/Tickets/tickets.view'
import TicketsCategoriesView from './views/Tickets/ticketCategories.view'
import TicketsCategoryView from './views/Tickets/ticketCategory.view'
import DashboardView from './views/Dashboard/dashboard.view'
import ClientDashboard from './views/ClenteDashboard/dashboard.view'
import ReportView from './views/Report/report.view'
import PlansView from './views/Plans/plans.view'


function Routes(){

    function isAllow(userType, route){
        return searchRoute(userType, route);
    }

    function PrivateRoutes({ component: Component, ...rest }){
        const {userType} = getStorageLogin();

        return(
            <Route
                {...rest}
                render={props=>
                    isAllow(userType, rest.path) ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
                    )
                }
            />
        )
    }

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LoginView} />
                <Route path="/register" exact component={RegisterView} />
                <PrivateRoutes path="/dashboard" exact component={DashboardView} />
                <PrivateRoutes path="/client-dashboard" exact component={ClientDashboard} />
                <PrivateRoutes path="/users" exact component={UsersView} />
                <PrivateRoutes path="/profile" exact component={ProfileView} />
                <PrivateRoutes path="/tickets" exact component={TicketsView} />
                <PrivateRoutes path="/tickets/new" exact component={TicketView} />
                <PrivateRoutes path="/tickets/:id" exact component={TicketView} />
                <PrivateRoutes path="/tickets-categories" exact component={TicketsCategoriesView} />
                <PrivateRoutes path="/tickets-categories/:id" exact component={TicketsCategoryView} />
                {/* <PrivateRoutes path="/reports" exact component={ReportView} /> */}
                {/* <PrivateRoutes path="/plans" exact component={PlansView} /> */}
                <Route path="*" exact component={NoMatchView} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;