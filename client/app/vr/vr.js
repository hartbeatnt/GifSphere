angular.module('vr',[])
.controller('VrCtrl', function($scope, Gifs){
  var pluckUrls = function(){
    $scope.gifs = Gifs.showArray().map((gif)=>{
      return gif.images.original.url
    });
  }

  if (Gifs.showArray()) {
    pluckUrls();
  } else {
    Gifs.searchGifs('errors')
    .then(function(resp){
      Gifs.setArray(resp.data.data);
      console.log(Gifs.showArray())
      pluckUrls();      
    })
  }
})