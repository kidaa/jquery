define( [
	"../core",
	"../selector",
	"../effects"
], function( jQuery ) {

<<<<<<< HEAD
jQuery.expr.filters.animated = function( elem ) {
=======
"use strict";

jQuery.expr.pseudos.animated = function( elem ) {
>>>>>>> refs/remotes/jquery/master
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};

} );
