'use strict';
var app = angular.module( 'wpCurriculum', [] );

app.controller( 'CvController', [ '$scope', 'SocketFactory',function ($scope, SocketFactory) {

  SocketFactory.emit('getCv', 'en');

  $scope.content = {};

  SocketFactory.on( 'receiveCv', function ( data ) {
    $scope.content = data;
  } );

} ] );