var app = angular.module('GifSphere', [
  'home',
  'vr',
  'services',
  'ui.router'
  ])
.config(function($stateProvider, $urlRouterProvider){
  const homeState = {
    name: 'home',
    url: '/home',
    templateUrl: 'app/home/home.html',
    controller: 'HomeCtrl'
  };
  const vrState = {
    name: 'vr',
    url: '/vr',
    templateUrl: 'app/vr/vr.html',
    controller: 'VrCtrl'
  };

  $stateProvider.state(homeState);
  $stateProvider.state(vrState);
  $urlRouterProvider.otherwise('/home')
})
.run(function ($state,$rootScope) {
    $rootScope.$state = $state;
})