var express = require('express')
var app = express()

require('./utils/middleware.js')(app,express);
require('./utils/routes.js')(app,express);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

module.exports = app;