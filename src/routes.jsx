import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Provider } from 'react-router-dom';
import * as R from './services/routes.service';

function Routes(){

    const [userType, setUserType] = useState('manager');

    useEffect(() => {
        console.log(userType);
    });

    function handleLoadRoutes (userType){
        const routesList = userType == 'client' ? R.clientRoutes : userType == 'employee' ? R.employeeRoutes : R.managerRoutes;
        return routesList;
    }

    return(
        <BrowserRouter>
            <Switch>
                {
                    handleLoadRoutes(userType).map((item) => {
                        return (
                            <Route path={item.path} exact component={item.component} key={item.path} />
                        )
                    })
                }

                {
                    R.defaultRoutes.map((item) => {
                        return (
                            <Route path={item.path} exact component={item.component} key={item.path} />
                        )
                    })
                }
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;