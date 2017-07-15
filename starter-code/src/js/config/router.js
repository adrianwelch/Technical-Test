angular
  .module('precedentApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  //routes go here
  $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/js/views/home.html'
      })
      .state('slide2', {
        url: '/slide2',
        templateUrl: '/js/views/slide2.html'
      })
      .state('slide3', {
        url: '/slide3',
        templateUrl: '/js/views/slide3.html'
      });
      
  $urlRouterProvider.otherwise('/');
}
