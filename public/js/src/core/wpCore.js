(function ( angular ) {
  angular.module( 'wpCore', [] )
    .controller( 'CoreController',
    [ '$scope', '$state', function ( $scope, $state ) {
      $scope.viewClass = $state.current.name !== 'content.detail' ? "content" : "works";

      $scope.$on( "$stateChangeSuccess", function () {
        $scope.viewClass = $state.current.name !== 'content.detail' ? "content" : "works";
      } );

    } ] );
})( angular );