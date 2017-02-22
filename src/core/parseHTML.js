define( [
	"../core",
	"../var/document",
	"./var/rsingleTag",
<<<<<<< HEAD
	"../manipulation/buildFragment"
], function( jQuery, document, rsingleTag, buildFragment ) {

// data: string of html
=======
	"../manipulation/buildFragment",

	// This is the only module that needs core/support
	"./support"
], function( jQuery, document, rsingleTag, buildFragment, support ) {

"use strict";

// Argument "data" should be string of html
>>>>>>> refs/remotes/jquery/master
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
<<<<<<< HEAD
	if ( !data || typeof data !== "string" ) {
		return null;
=======
	if ( typeof data !== "string" ) {
		return [];
>>>>>>> refs/remotes/jquery/master
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
<<<<<<< HEAD
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];
=======

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];
>>>>>>> refs/remotes/jquery/master

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};

return jQuery.parseHTML;

} );
