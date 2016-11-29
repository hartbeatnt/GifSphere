angular.module('services', [])
.factory('Gifs', function($http){
  var obj = {}
  var searchGifs = function(query) {
    var gifArray = [];
    let limit = 14;
    $http.get("http://api.giphy.com/v1/gifs/search?q="
      +query+"&api_key=dc6zaTOxFJmzC&limit="+limit)
    .then(function(resp){
      console.log(resp.data.data);
      return obj.gifArray = resp.data.data;
    })
  }
  var showArray=function(){
    console.log(obj.gifArray)
  }

  return {
    searchGifs: searchGifs,
    showArray: showArray
  }
})