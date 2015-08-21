'use strict';
var app = angular.module( 'MainApp',
  [ 'ngAnimate',
    'ngMaterial',
    'ui.router',
    'wpNav',
    'wcSocket',
    'wpCurriculum',
    'wpGsap',
    'wpSnap',
    'wpPortfolio',
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
        templateUrl: '../../views/landing/home-page.html'
      } )
        .state('content' , {
          templateUrl: '../../views/core/base-page.html'
        })
        .state('content.portfolio', {
          url:'/portfolio',
          templateUrl:'../../views/pages/works-partial.html'
        })
        .state('content.about', {
          url:'/about',
          templateUrl:'../../views/pages/about-partial.html'
        })
        .state('content.contact', {
          url:'/contact',
          templateUrl:'../../views/pages/contact-partial.html'
        });

    } ] );