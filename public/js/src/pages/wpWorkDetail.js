(function ( angular ) {
  angular.module( 'wpWorkDetail', [] )
    .controller( 'DetailController',
    [ 'SocketFactory', '$state', '$scope', function ( SocketFactory, $state,
                                                      $scope ) {
      $scope.portContent = {};
      $scope.portStyle = {};
      $scope.workIndex = $state.params.index;

      SocketFactory.emit( 'getPortfolio', 'en' );

      SocketFactory.on( 'receivePortfolio', function ( data ) {
        $scope.portContent = data.details[$scope.workIndex];
        $scope.portStyle = data.tiles[ $scope.workIndex ];
      } );


    } ] );

})( angular );