'use strict';
var app = angular.module( 'MainApp',
  [ 'ngAnimate',
    'ngMaterial',
    'ui.router',
    'wpNav',
    'wcSocket',
    'wpCurriculum',
    'wpGsap',
    'wcFooter']
);

app.config(
  [ '$stateProvider',
    '$urlRouterProvider',
    '$mdThemingProvider',
    '$locationProvider',
    function ( $stateProvider,
               $urlRouterProvider,
               $mdThemingProvider,
               $locationProvider) {

      // Setup angular material theme
      $mdThemingProvider.theme( 'default' )
        .primaryPalette( 'blue' )
        .accentPalette( 'yellow' )
        .warnPalette( 'pink' )
        .backgroundPalette( 'grey' );

      $urlRouterProvider.otherwise( function ( $injector, $location ) {
          var state = $injector.get( '$state' );
          state.go( 'home' );
          return $location.path();
        }
      );

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });

      $stateProvider.state( 'home', {
        url: '/',
        templateUrl: '../../views/home-page.html'
      } )
        .state('portfolio', {
          url:'/portfolio',
          templateUrl:'../../views/works-partial.html'
        })
        .state('about', {
          url:'/about',
          templateUrl:'../../views/about-partial.html'
        })
        .state('contact', {
          url:'/contact',
          templateUrl:'../../views/contact-partial.html'
        });

    } ] );