
import express from 'express'
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import {
  // BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { 
  StaticRouter,
} from "react-router-dom/server";
import routes from '../routes';
import Layout from '../containers/Layout';
import {
  Provider
} from 'react-redux';
import qs from 'qs';
import getStore from '../store/getStore';

const app = express()
const port = 3000

app.use(express.static('public'));

app.get('*', (req, res) => {
  const params = qs.parse(req.query)
  const initialNum = parseInt(params.initialNum, 10) || 0
  const store = getStore(initialNum);
  const initialState = store.getState();
  const App = () => {
    return (
      <Provider store={store}> 
        <Layout>
          <StaticRouter location={req.url}>
            <Routes>
              {routes.map(route => (
                <Route {...route} />
              ))}
            </Routes>
          </StaticRouter>
        </Layout>
      </Provider>
    );
  }
  const str = ReactDOMServer.renderToString(<App />);
  const content = `
    <html>
      <head>
        <title>ssr example</title>
      </head>
      <body>
        <div id="root">${str}</div>
        <script>window.INITIAL_STATE = ${JSON.stringify(initialState)}</script>
        <script src="/client.bundle.js"></script>
      </body>
    </html>
  `;
  res.send(content)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

