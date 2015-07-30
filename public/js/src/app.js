'use strict';
var app = angular.module( 'MainApp',
  [ 'ngAnimate',
    'ngMaterial',
    'ui.router' ]
);

app.config(
  [ '$stateProvider',
    '$urlRouterProvider',
    '$mdThemingProvider',
    function ( $stateProvider,
               $urlRouterProvider,
               $mdThemingProvider ) {

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

      $stateProvider.state( 'home', {
        url: '/',
        templateUrl: '../../views/home-page.html'
      } );

    } ] );