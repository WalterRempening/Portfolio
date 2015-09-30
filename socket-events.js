var cv = require( './content/curriculum.json' );
var work = require( './content/portfolio.json' );
//var html5pdf = require( "html5-to-pdf" )

var outputPath = "public/Curriculum.pdf"


module.exports = function ( io ) {

  io.on( 'connection', function ( socket ) {
    console.log( 'Connection received' );

    socket.on( 'getCv', function ( lang ) {

      socket.emit( 'receiveCv', cv );
    } );

    socket.on( 'getPortfolio', function ( lang ) {
      socket.emit( 'receivePortfolio', work );
    } )

    socket.on( 'getPDF', function ( dom ) {

      //html5pdf().from.string( dom ).to( outputPath, function () {
      //  console.log( "Created curriculum PDF", outputPath );
      //  console.log( dom );
      //  socket.emit( 'receivePDF', outputPath );
      //} )
    } );

  } );
};
