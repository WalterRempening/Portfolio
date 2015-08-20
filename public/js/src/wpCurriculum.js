(function ( angular ) {
  'use strict';
  angular.module( 'wpCurriculum', [] )

    .controller( 'CvController',
    [ '$scope', 'SocketFactory', function ( $scope, SocketFactory ) {

      $scope.content = {};
      SocketFactory.emit( 'getCv', 'en' );

      SocketFactory.on( 'receiveCv', function ( data ) {
        $scope.content = data;
      } );

    } ] );
})( angular );