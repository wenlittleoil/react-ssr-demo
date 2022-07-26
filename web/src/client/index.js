import React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import StyleContext from 'isomorphic-style-loader/StyleContext'
import routes from '@/routes';
import Layout from '@containers/Layout';
import {
  Provider
} from 'react-redux';
import getStore from '@store/getStore';

const initialState = window.INITIAL_STATE;
const store = getStore(initialState.num);

const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss());
  return () => removeCss.forEach(dispose => dispose());
}

const App = () => {
  return (
    <Provider store={store}>
      <StyleContext.Provider value={{ insertCss }}>
        <BrowserRouter>
          <Layout>
            <Routes>
              {routes.map(route => (
                <Route {...route} />
              ))}
            </Routes>
          </Layout>
        </BrowserRouter>
      </StyleContext.Provider>
    </Provider>
  );
}

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <App />
);
