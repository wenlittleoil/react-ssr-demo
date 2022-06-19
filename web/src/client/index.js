import React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import routes from '../routes';
import Layout from '../containers/Layout';
import {
  Provider
} from 'react-redux';
import getStore from '../store/getStore';

const initialState = window.INITIAL_STATE;
const store = getStore(initialState.num);

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <BrowserRouter>
          <Routes>
            {routes.map(route => (
              <Route {...route} />
            ))}
          </Routes>
        </BrowserRouter>
      </Layout>
    </Provider>
  );
}

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <App />
);
