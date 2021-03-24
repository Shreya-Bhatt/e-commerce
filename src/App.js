import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'; 

import './App.css';

import UserPage from './components/User/UserPage';
import Layout from './components/Layout/Layout';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import AdminPage from './components/Admin/AdminPage';
import AddProduct from './components/Admin/AddProduct';
import Stock from './components/Admin/Stock';
import Orders from './components/Admin/Orders';
// import Cart from './components/Cart/Cart';

function app() {
  let routes = (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" exact component={Signup} />
      <Route path="/user" exact component={UserPage} />
      <Route path="/admin" component={AdminPage} />
      <Route path="/addproduct" component={AddProduct} />
      <Route path="/stock" component={Stock} />
      <Route path="/orders" component={Orders} />
      {/* <Route path="/cart" component={Cart} /> */}
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
