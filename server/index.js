const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.get('/', (req, res) => { 
  res.send('Hello!'); 
});

app.listen(3500, () => console.log('Tic Tac Toe Game is listening on port 3500'));
