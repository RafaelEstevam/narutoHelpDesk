const managerRoutes = [
    "/users",
    "/dashboard",
    "/report",
    "/tickets",
    "/tickets/:id", 
    "/tickets-categories",
    "/tickets-categories/:id"
];

const employeeRoutes = [
    "/dashboard",
    "/tickets",
    "/tickets/:id"
];

const clientRoutes = [
    "/tickets",
    "/tickets/:id",
];

const defaultRoutes = [
    "/users/:id"
]

const searchRoute = (userType, route) => {
    let searchedRoute = [];

    switch(userType){
        case 'manager' :
            searchedRoute = managerRoutes.find(i => i == route) ? searchedRoute : defaultRoutes.find(i => i == route);
            break;
        case 'employee' :
            searchedRoute = employeeRoutes.find(i => i == route) ? searchedRoute : defaultRoutes.find(i => i == route);
            break;
        case 'client' :
            searchedRoute = clientRoutes.find(i => i == route) ? searchedRoute : defaultRoutes.find(i => i == route);
            break;
    }

    if(searchedRoute){
        return true;
    }else{
        return false;
    }
}

export { searchRoute };