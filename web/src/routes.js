import React from "react";
import Home from './containers/Home';
import Login from './containers/Login';
import NoMatch from './containers/NoMatch';

const routes = [
  {
    path: '/',
    element: <Home />,
    key: 'home',
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
