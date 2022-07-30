import React from "react";
import {
  Outlet,
  Routes,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Home from './containers/Home';
import Login from './containers/Login';
import NoMatch from './containers/NoMatch';
import Company from './containers/Company';
import {
  ProductCatory,
  CategoryDetail,
  ProdDetail,
} from './containers/Product';

const CategoryRouteWrap = () => <Outlet />;
const ProductRouteWrap = () => <Outlet />;


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
    element: <CategoryRouteWrap />,
    key: 'product',
    children: (
      <>
        <Route index element={<ProductCatory />} />
        <Route path=":cateId" element={<ProductRouteWrap />}>
          <Route index element={<CategoryDetail />} />
          <Route path=":prodId" element={<ProdDetail />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </>
    ),
  },
  {
    path: 'login/*',
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
