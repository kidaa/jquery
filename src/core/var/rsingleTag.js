define( function() {
<<<<<<< HEAD

	// Match a standalone tag
	return ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );
=======
	"use strict";

	// Match a standalone tag
	return ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );
>>>>>>> refs/remotes/jquery/master
} );
