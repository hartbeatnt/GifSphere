angular.module('home',[])
.controller('HomeCtrl', function($scope, $state, Gifs){
  $scope.searchGifs=function(){
    var query = $scope.search.replace(/\s/g,'+');
    Gifs.searchGifs(query)
    .then(function(resp){
      Gifs.setArray(resp.data.data);
      console.log(Gifs.showArray());
      $state.go('vr')
    })
  }
})