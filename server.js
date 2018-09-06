const express = require('express');

var app = express();

app.get('/', (req, res) => {
//  res.send('<h1>Hello Express!</h1>');
  res.send({
    name: 'Olga',
    likes: [
      'social justice',
      'architecture'
    ]
  })
});

app.get('/about', (req, res) => {
  res.send('About page')
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Errr'
  })
});

app.listen(3000);
