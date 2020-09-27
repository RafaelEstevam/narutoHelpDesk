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
    "/tickets/:id",
    "/users/:id"
];

const searchRoute = (userType, route) => {
    let searchedRoute = undefined;

    if(userType == 'manager'){
        managerRoutes.forEach((i) => {
            if(i == route){
                searchedRoute = true;
            }
        })
    }

    if(userType == 'employee'){
        employeeRoutes.forEach((i) => {
            if(i == route){
                searchedRoute = true;
            }
        })
    }

    if(userType == 'client'){
        clientRoutes.forEach((i) => {
            if(i == route){
                searchedRoute = true;
            }
        })
    }

    return searchedRoute;

}

export { searchRoute };