var cv = require( './Content/curriculum.json' );

module.exports = function ( io ) {

  io.on( 'connection', function ( socket ) {
    console.log( 'Connection received' );

    socket.on( 'getCv', function (lang) {


      socket.emit( 'receiveCv', cv );
    } );

  } );
};
