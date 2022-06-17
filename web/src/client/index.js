import React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import routes from '../routes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(route => (
          <Route {...route} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <App />
);
