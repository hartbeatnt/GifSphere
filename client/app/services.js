angular.module('services', [])
.factory('Gifs', function($http, $q){
  var apiKey = 'dc6zaTOxFJmzC';
  var obj = {limit:14}

  var showLimit = function(){
    return obj.limit;
  }

  var searchGifs = function(query) {
    return $http.get("http://api.giphy.com/v1/gifs/search?q="
      +query+"&api_key="+apiKey+"&limit="+obj.limit)
  }

  var setArray = function(array) {
    obj.gifArray=array;
  }

  var showArray=function(){
    return obj.gifArray;
  }

  return {
    searchGifs: searchGifs,
    showArray: showArray,
    showLimit: showLimit,
    setArray: setArray
  }
})
.factory('Auth', function($state, $http){
  var obj = {loggedIn: false, error: null}

  var isLoggedIn = function(){
    return obj.loggedIn
  }

  var setLoggedIn = function(user){
    obj.loggedIn = user;
  }

  var logIn = function(user) {
    return $http.post('/users/login', user)
  }

  var register = function(user){
    return $http.post('/users/register', user)
  }

  var logOut = function(){
    console.log('logout')
    obj.loggedIn = false;
    $state.reload();
  }

  return {
    isLoggedIn: isLoggedIn,
    setLoggedIn: setLoggedIn,
    logIn: logIn,
    register: register,
    logOut: logOut
  }
})
.factory('Search', function($http){
  var getRecent = function(user){
    return $http.get('/searches/'+user._id)
  }

  var saveSearch = function(query){
    console.log('hitting saveSearch')
    return $http.post('/searches', query)
  }

  return {
    getRecent: getRecent,
    saveSearch: saveSearch
  }

})