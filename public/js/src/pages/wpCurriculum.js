(function ( angular ) {
  'use strict';
  angular.module( 'wpCurriculum', [] )

    .controller( 'CvController',
    [ '$scope', 'SocketFactory', '$document',
      function ( $scope, SocketFactory, $document ) {

        $scope.content = {};
        SocketFactory.emit( 'getCv', 'en' );

        SocketFactory.on( 'receiveCv', function ( data ) {
          $scope.content = data;
        } );

        $scope.file = "../../img/Walter_Rempening_Diaz_CV.pdf";
        $scope.getPDF = function () {
          console.log( $document[ 0 ].documentElement.innerHTML );
          SocketFactory.emit( 'getPDF',
            $document[ 0 ].documentElement.innerHTML );
        };

        SocketFactory.on( 'receivePDF', function ( file ) {
          console.log( 'Received File' );
          console.log( file );
        } );

      } ] );
})( angular );