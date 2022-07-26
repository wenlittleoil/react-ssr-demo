import React from "react";
import Home from './containers/Home';
import Login from './containers/Login';
import NoMatch from './containers/NoMatch';
import Company from './containers/Company';
import Product from './containers/Product';

const routes = [
  {
    path: '/',
    element: <Home />,
    key: 'home',
  },
  {
    path: '/company',
    element: <Company />,
    key: 'company',
  },
  {
    path: '/product',
    element: <Product />,
    key: 'product',
  },
  {
    path: 'login',
    element: <Login />,
    key: 'login',
  },
  {
    path: '*',
    element: <NoMatch />,
    key: 'nomatch',
  },
];

export default routes;
