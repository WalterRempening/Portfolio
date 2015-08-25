(function ( angular ) {
  angular.module( 'wpWorkDetail', [] )
    .controller( 'DetailController',
    [ 'SocketFactory', '$state', '$scope', function ( SocketFactory, $state,
                                                      $scope ) {
      $scope.portfolio = {};
      $scope.workIndex = $state.params.index;

      SocketFactory.emit( 'getPortfolio', 'en' );

      SocketFactory.on( 'receivePortfolio', function ( data ) {
        $scope.portfolio = data.details[$scope.workIndex];

      } );


    } ] );

})( angular );