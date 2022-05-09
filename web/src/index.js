const express = require('express')
const app = express()
const port = 3000
const ReactDOMServer = require('react-dom/server');

const react = require('react');
const Home = require('./containers/Home');

app.get('/', (req, res) => {
  // const content = `
  //   <html>
  //     <head>
  //       <title>wenshaoyou</title>
  //     </head>
  //     <body>
  //       <h1>hello world</h1>
  //     </body>
  //   </html>
  // `;
  const content = ReactDOMServer.renderToString(<Home />);
  res.send(content)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
