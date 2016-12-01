var express = require('express');
var mongoose = require('mongoose');

var app = express();
mongoose.connect('mongodb://localhost/gifsphere');

require('./utils/middleware.js')(app,express);
require('./utils/routes.js')(app,express);

app.listen(3000, function () {
  console.log('listening on port 3000!')
})

module.exports = app;