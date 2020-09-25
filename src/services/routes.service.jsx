import React from 'react';

import LoginView from '../views/Login/login.view'
import RegisterView from '../views/Register/register.view'
import NoMatchView from '../views/404/404.view'
import ProfileView from '../views/Profile/profile.view'
import UsersView from '../views/Users/users.view'
import TicketView from '../views/Tickets/ticket.view'
import TicketsView from '../views/Tickets/tickets.view'
import TicketsCategoriesView from '../views/Tickets/ticketCategories.view'
import TicketsCategory from '../views/Tickets/ticketCategory.view'
import DashboardView from '../views/Dashboard/dashboard.view'
import ReportView from '../views/Report/report.view'
import PlansView from '../views/Plans/plans.view'

const defaultRoutes = [
    {path: "/", component: LoginView},
    {path: "/register", component: RegisterView},
    {path: "/users/:id", component: ProfileView},
    {path: "*", component: NoMatchView},
]

const managerRoutes = [
    {path: "/users", component: UsersView},
    {path: "/dashboard", component: DashboardView},
    {path: "/report", component: ReportView},
    {path: "/tickets", component: TicketsView},
    {path: "/tickets/:id", component: TicketView},
    {path: "/tickets-categories/", component: TicketsCategoriesView},
    {path: "/tickets-categories/:id", component: TicketsCategory},
];

const employeeRoutes = [
    {path: "/dashboard", component: DashboardView},
    {path: "/tickets", component: TicketsView},
    {path: "/tickets/:id", component: TicketView},
];

const clientRoutes = [
    {path: "/tickets", component: TicketsView},
    {path: "/tickets/:id", component: TicketView},
];

export {
    defaultRoutes,
    managerRoutes,
    employeeRoutes,
    clientRoutes
};