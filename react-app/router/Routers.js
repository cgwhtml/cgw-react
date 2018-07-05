import React form 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} form 'react-router-dom';
import routes from './router.config';
const Routers = () => (
    <Router>
        <Switch>
        {
            routes.map((route,i)=> (
        <Route key={i} path={route.path} exact={route.exact} component={route.component} />
        ))
        }
        </Switch>
    </Router>
    );
export default Routers;