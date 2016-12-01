var Searches = require('../db/searches/SearchController.js');
var Users = require('../db/users/UserController.js');
var helpers = require('./helpers.js');

module.exports = function(app, express) {
  app.get('/', function (req, res) {
    res.send(index.html)
  })

  app.post('/users/register', Users.signUp)
  app.post('/users/login', Users.signIn)
  app.get('/users/:id', Users.getOneUser)
  app.get('/users', Users.getAllUsers)
  app.delete('/users/:id', Users.deleteOne)

  app.get('/searches', Searches.getAllSearches)
  app.get('/searches/:id', Searches.getSearchesForUser)
  app.post('/searches', Searches.addSearch)
  app.delete('/searches/:id', Searches.deleteOne)

  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);

}