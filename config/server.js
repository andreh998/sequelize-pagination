var express = require('express');
var consign = require('consign');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));

consign()
    .include('config/database.js')
    .then('app/routes')
    .then('app/controllers')
    .into(app);

module.exports = app;