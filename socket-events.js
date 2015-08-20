var cv = require( './content/curriculum.json' );
var work = require( './content/portfolio.json' );
module.exports = function ( io ) {

  io.on( 'connection', function ( socket ) {
    console.log( 'Connection received' );

    socket.on( 'getCv', function (lang) {

      socket.emit( 'receiveCv', cv );
    } );

    socket.on('getPortfolio', function (lang) {
      socket.emit( 'receivePortfolio', work );
    })

  } );
};
