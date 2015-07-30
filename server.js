var express = require( 'express' );
var path = require( 'path' );
var favicon = require( 'serve-favicon' );
var logger = require( 'morgan' );
var cookieParser = require( 'cookie-parser' );
var bodyParser = require( 'body-parser' );
var csrf = require( 'csurf' );
var app = express();

//app.use( csrf() );
//app.use( function ( req, res, next ) {
//  res.cookie( 'XSRF-TOKEN', req.csrfToken() );
//  next();
//} );
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use( logger( 'dev' ) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( cookieParser() );
app.use( require( 'stylus' ).middleware( path.join( __dirname, 'public' ) ) );
app.use( express.static( path.join( __dirname, 'public' ) ) );

app.get( '*', function ( req, res ) {
  res.sendFile( '/public/index.html', { "root": __dirname } );
} );

// catch 404 and forward to error handler
app.use( function ( req, res, next ) {
  var err = new Error( 'Not Found' );
  err.status = 404;
  next( err );
} );

// error handlers

// development error handler
// will print stacktrace
if ( app.get( 'env' ) === 'development' ) {
  app.use( function ( err, req, res, next ) {
    res.status( err.status || 500 );
  } );
}

// production error handler
// no stacktraces leaked to user
app.use( function ( err, req, res, next ) {
  res.status( err.status || 500 );
} );


module.exports = app;
