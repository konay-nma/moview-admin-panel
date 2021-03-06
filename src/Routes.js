import React from 'react';
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import './App.css';
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import AddDataForm from './componets/AddDataForm'
import AddData from './componets/AddData'


const authRouth = (Component) => () => {
    if (localStorage.getItem('token') === 'admin@test.com') {
        return <Component />
    } else {
        return <Redirect to='/login' />
    }
}

function Routes(props) {
    return (
        <Router {...props}>
            <Switch>
                <Route path='/login'>
                    <SignIn />
                </Route>
                <Route path='/dashboard'>
                    {authRouth(Dashboard)}
                </Route>
                <Route path='/dataupload'>
                    <AddDataForm />
                </Route>
                <Route path='/adddata'>
                    {authRouth(AddData)}
                </Route>
                <Route exact path="/">
                    <Redirect to="/dashboard" />
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;
