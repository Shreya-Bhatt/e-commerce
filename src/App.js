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
import Cart from './components/Cart/CartScreen';
import Product from './components/Products/Product';

function app() {
  let routes = (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/" exact component={Signup} />
      <Route path="/user" exact component={UserPage} />
      <Route path="/admin" exact component={AdminPage} />
      <Route path="/addproduct" exact component={AddProduct} />
      <Route path="/stock" exact component={Stock} />
      <Route path="/cart" exact component={Cart} />


      <Route path="/product/:id" component={Product} />

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
