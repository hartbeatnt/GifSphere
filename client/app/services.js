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