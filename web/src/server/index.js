
import express from 'express'
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import {
  // BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import StyleContext from 'isomorphic-style-loader/StyleContext'
import { 
  StaticRouter,
} from "react-router-dom/server";
import routes from '@/routes';
import Layout from '@containers/Layout';
import {
  Provider
} from 'react-redux';
import qs from 'qs';
import getStore from '@store/getStore';

const app = express()
const port = 3000

app.use(express.static('public'));

app.get('*', (req, res) => {
  // handle dynamic store in ssr
  const params = qs.parse(req.query)
  const initialNum = parseInt(params.initialNum, 10) || 0
  const store = getStore(initialNum);
  const initialState = store.getState();

  // handle css in ssr
  const css = new Set(); // CSS for all rendered React components
  const insertCss = (...styles) => styles.forEach(style => {
    const cssContent = style._getContent().default[0][1]; // 经过isomorphic-style-loader处理后的数据结构
    css.add(cssContent);
    console.log('[服务端插入样式成功]:', cssContent);
  });

  const App = () => {
    return (
      <Provider store={store}>
        <StyleContext.Provider value={{ insertCss }}>
          <StaticRouter location={req.url}>
            <Layout>
              <Routes>
                {routes.map(route => (
                  <Route {...route} />
                ))}
              </Routes>
            </Layout>
          </StaticRouter>
        </StyleContext.Provider>
      </Provider>
    );
  }
  const str = ReactDOMServer.renderToString(<App />);
  const content = `
    <html>
      <head>
        <title>ssr example</title>
        <!-- <link href="/main.css" rel="stylesheet"></link> -->
        <style id="inline-style">
          ${[...css].join('\n')}
        </style>
      </head>
      <body>
        <div id="root">${str}</div>
        <script>window.INITIAL_STATE = ${JSON.stringify(initialState)}</script>
        <script src="/client.bundle.js"></script>
      </body>
    </html>
  `;
  res.send(content);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



