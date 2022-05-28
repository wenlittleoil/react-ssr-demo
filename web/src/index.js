const express = require('express')
const app = express()
const port = 3000
const ReactDOMServer = require('react-dom/server');

const React = require('react');
const Home = require('./containers/Home');

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
        <div id="root">
          ${str}
        </div>
        <script src="/index.js"></script>
      </body>
    </html>
  `;
  res.send(content)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
