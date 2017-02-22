define( [
	"./core",
	"../external/sizzle/dist/sizzle"
], function( jQuery, Sizzle ) {

<<<<<<< HEAD
jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
=======
"use strict";

jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
>>>>>>> refs/remotes/jquery/master
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
<<<<<<< HEAD
=======
jQuery.escapeSelector = Sizzle.escape;
>>>>>>> refs/remotes/jquery/master

} );
