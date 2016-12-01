var app = angular.module('GifSphere', [
  'home',
  'vr',
  'auth',
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
  const loginState = {
    name: 'login',
    url: '/login',
    templateUrl: 'app/auth/login.html',
    controller: 'AuthCtrl'
  };
  const registerState = {
    name: 'register',
    url: '/register',
    templateUrl: 'app/auth/register.html',
    controller: 'AuthCtrl'
  }

  $stateProvider.state(homeState);
  $stateProvider.state(vrState);
  $stateProvider.state(loginState);
  $stateProvider.state(registerState);
  $urlRouterProvider.otherwise('/home')
})
.run(function ($state,$rootScope) {
    $rootScope.$state = $state;
})