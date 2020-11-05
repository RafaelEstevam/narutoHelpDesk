const managerRoutes = [
    "/users",
    "/dashboard",
    "/report",
    "/tickets",
    "/tickets/:id", 
    "/tickets-categories",
    "/tickets-categories/:id",
    "/users/:id"
];

const employeeRoutes = [
    "/dashboard",
    "/tickets",
    "/tickets/:id",
    "/users/:id"
];

const clientRoutes = [
    "/tickets",
    "/tickets/new",
    "/tickets/:id",
    "/users/:id",
    "/client-dashboard"
];

const searchRoute = (userType, route) => {
    let searchedRoute = undefined;

    if(userType == '1'){ //manager
        managerRoutes.forEach((i) => {
            if(i == route){
                searchedRoute = true;
            }
        })
    }

    if(userType == '2'){ //employee
        employeeRoutes.forEach((i) => {
            if(i == route){
                searchedRoute = true;
            }
        })
    }

    if(userType == '3'){ //client
        clientRoutes.forEach((i) => {
            if(i == route){
                searchedRoute = true;
            }
        })
    }

    return searchedRoute;

}

export { searchRoute };