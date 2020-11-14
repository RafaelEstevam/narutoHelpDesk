const managerRoutes = [
    {label: 'Dashboard', icon: 'fa fa-dashboard', route: "/dashboard", render: true},
    {label: 'Tickets', icon: 'fa fa-tasks', route: "/tickets", render: true},
    {label: 'Tickets Category', icon: 'fa fa-tag', route: "/tickets-categories", render: false},
    {label: 'Users', icon: 'fa fa-user', route: "/users", render: true},
    {label: 'Users', icon: 'fa fa-user', route: "/users/:id", render: false},
    {label: 'Report', icon: '', route: "/report", render: false},
    {label: 'Ticket', icon: '', route: "/tickets/:id", render: false},
    {label: 'Ticket Category', icon: '', route: "/tickets-categories/:id", render: false},
    {label: 'Profile', icon: '', route: "/profile", render: false}
];

const employeeRoutes = [
    {label: 'Dashboard', icon: 'fa fa-dashboard', route: "/dashboard", render: true},
    {label: 'Tickets', icon: 'fa fa-tasks', route: "/tickets", render: true},
    {label: 'Ticket', icon: '', route: "/tickets/:id", render: false},
    {label: 'Profile', icon: '', route: "/profile", render: false}
];

const clientRoutes = [
    {label: 'Dashboard', icon: 'fa fa-dashboard', route: "/client-dashboard", render: true},
    {label: 'Tickets', icon: 'fa fa-tasks', route: "/tickets", render: true},
    {label: 'New Ticket', icon: '', route: "/tickets/new", render: false},
    {label: 'Ticket', icon: '', route: "/tickets/:id", render: false},
    {label: 'Profile', icon: '', route: "/profile", render: false},
    {label: 'Users', icon: 'fa fa-user', route: "/users/:id", render: false},
];

const searchRoute = (userType, route) => {
    let searchedRoute = undefined;

    if(userType == '1'){ //manager
        managerRoutes.forEach((i) => {
            if(i.route == route){
                searchedRoute = true;
            }
        })
    }

    if(userType == '2'){ //employee
        employeeRoutes.forEach((i) => {
            if(i.route == route){
                searchedRoute = true;
            }
        })
    }

    if(userType == '3'){ //client
        clientRoutes.forEach((i) => {
            if(i.route == route){
                searchedRoute = true;
            }
        })
    }

    return searchedRoute;

}

export { searchRoute, managerRoutes, employeeRoutes, clientRoutes };