angular.module('auth',[])
.controller('AuthCtrl', function($scope, $state, Auth){
  $scope.user = {};
  $scope.register = function(){
    Auth.register($scope.user)
    .error(function(error){
      $scope.error = error;
    }).then(function(resp){
      Auth.setLoggedIn(resp.data);
      $state.go('home')
    })
  }
  $scope.logIn = function(){
    Auth.logIn($scope.user)
    .error(function(error){
      $scope.error = error;
    }).then(function(resp){
      Auth.setLoggedIn(resp.data);
      $state.go('home')
    })
  }
})