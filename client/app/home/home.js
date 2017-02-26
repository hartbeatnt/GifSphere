angular.module('home',[])
.controller('HomeCtrl', function($scope, $state, Gifs){

  $scope.searchGifs=function(){
    let query = $scope.query.replace(/\s/g,'+');
    Gifs.searchGifs(query)
    .then(function(resp){
      Gifs.setArray(resp.data.data);
      $state.go('vr')
    })
  }
})