(function ( angular ) {
  angular.module( 'wpContact', [] )
    .controller( 'ContactCtrl', [ '$window', function ( $window ) {

    this.goToLink= function(link){
      $window.location.href = link;
    }
  } ] );
})( angular );