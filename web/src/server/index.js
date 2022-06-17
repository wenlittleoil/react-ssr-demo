
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

const app = express()
const port = 3000

app.use(express.static('public'));

app.get('*', (req, res) => {
  const App = () => {
    return (
      <StaticRouter location={req.url}>
        <Routes>
          {routes.map(route => (
            <Route {...route} />
          ))}
        </Routes>
      </StaticRouter>
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
        ${
          // ""
          `<script src="/client.bundle.js"></script>`
        }
      </body>
    </html>
  `;
  res.send(content)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

