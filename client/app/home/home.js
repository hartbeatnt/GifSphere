angular.module('home',[])
.controller('HomeCtrl', function($scope, $state, Gifs, Search, Auth){
  $scope.user = Auth.isLoggedIn()

  if($scope.user) {
    $scope.recents = [];
    Search.getRecent($scope.user)
    .then(function(result){
      $scope.recents = result.data.map(obj=>{
        return obj.query;
      }).filter((item, pos, self) => {
        return self.indexOf(item) === pos;
      }).reverse();
      console.log($scope.recents)
    })
  }

  $scope.searchGifs=function(searchWords){
    query = searchWords.replace(/\s/g,'+');
    Gifs.searchGifs(query)
    .then(function(resp){
      Gifs.setArray(resp.data.data);
      if ($scope.user){
        Search.saveSearch({
          query: searchWords,
          user: $scope.user._id
        }).then($state.go('vr'))
      } else $state.go('vr')
    })
  }
  $scope.logOut=function(){
    Auth.logOut();
  }

})