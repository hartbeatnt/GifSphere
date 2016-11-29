angular.module('home',[])
.controller('HomeCtrl', function($scope, Gifs){
  $scope.searchGifs=function(){
    var query = $scope.search.replace(/\s/g,'+');
    console.log(query)
    Gifs.searchGifs(query)
  }
})