<<<<<<< HEAD
/* jshint node: true */

=======
>>>>>>> refs/remotes/jquery/master
"use strict";

// Run Node with provided parameters: the first one being the Grunt
// done function and latter ones being files to be tested.
// See the comment in ../node_smoke_tests.js for more information.
module.exports = function spawnTest( done ) {
	var testPaths = [].slice.call( arguments, 1 ),
<<<<<<< HEAD
		spawn = require( "win-spawn" );
=======
		spawn = require( "cross-spawn" );
>>>>>>> refs/remotes/jquery/master

	spawn( "node", testPaths, { stdio: "inherit" } )
		.on( "close", function( code ) {
			done( code === 0 );
		} );
<<<<<<< HEAD
} ;
=======
};
>>>>>>> refs/remotes/jquery/master
