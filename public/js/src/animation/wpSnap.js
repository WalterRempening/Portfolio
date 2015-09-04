(function ( angular ) {
  'use strict';
  var app = angular.module( 'wpSnap', [] );

  app.factory( 'Snap', [
    function () {
      return window.Snap;
    }
  ] );

})( angular );