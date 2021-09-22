const express = require('express');

const app = express();

const port = 3000;

app.get('/', (_req, res) => {
  res.send('Olá mundo');
});

app.listen(port, (_req, res) =>
  console.log('App de exemplo escutando na pota 3000!')
);
