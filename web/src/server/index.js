
import express from 'express'
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import Home from '../containers/Home';

const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
  const str = ReactDOMServer.renderToString(
    <Home 
    />
  );
  const content = `
    <html>
      <head>
        <title>ssr example</title>
      </head>
      <body>
        <div id="root">${str}</div>
        <script src="/client.bundle.js"></script>
      </body>
    </html>
  `;
  res.send(content)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

