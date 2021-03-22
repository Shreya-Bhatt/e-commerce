import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'; 

import './App.css';

import HomePage from './containers/HomePage/HomePage';
import Layout from './components/Layout/Layout';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Dashboard from './components/Admin/Dashboard';
import Stock from './components/Admin/Stock';
import Orders from './components/Admin/Orders';

function app() {
  let routes = (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/" exact component={HomePage} />
      <Route path="/admin" component={Dashboard} />
      <Route path="/stock" component={Stock} />
      <Route path="/orders" component={Orders} />
      <Redirect to="/" />
    </Switch>
  );
  return (
    <div>
      <Layout>
        {routes}
      </Layout>
    </div>
  );
}

export default withRouter(app);
