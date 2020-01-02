var express = require('express');
var app = express();
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index.pug');
})

var server = app.listen(8081, function() {
  
})
