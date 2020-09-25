const path = require('path');
const express = require('express');
require('dotenv-flow').config();
const port = process.env.PORT || 8080;
const publicRoot = path.resolve(path.join(__dirname, '/target/classes/static'), '');
const app = express();
app.use(
  express.static(publicRoot, {
    setHeaders(res) {
      res.set('X-Frame-Options', 'DENY');
    },
  }),
);


app.get('*', (req, res) => {
    res.sendFile('index.html', { root: publicRoot });
  });

app.listen(port);