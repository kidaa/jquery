define( [
	"./core",
	"./selector",
	"./traversing",
	"./callbacks",
	"./deferred",
<<<<<<< HEAD
	"./core/ready",
	"./support",
=======
	"./deferred/exceptionHook",
	"./core/ready",
>>>>>>> refs/remotes/jquery/master
	"./data",
	"./queue",
	"./queue/delay",
	"./attributes",
	"./event",
	"./event/alias",
<<<<<<< HEAD
=======
	"./event/focusin",
>>>>>>> refs/remotes/jquery/master
	"./manipulation",
	"./manipulation/_evalUrl",
	"./wrap",
	"./css",
	"./css/hiddenVisibleSelectors",
	"./serialize",
	"./ajax",
	"./ajax/xhr",
	"./ajax/script",
	"./ajax/jsonp",
	"./ajax/load",
	"./event/ajax",
	"./effects",
	"./effects/animatedSelector",
	"./offset",
	"./dimensions",
	"./deprecated",
<<<<<<< HEAD
	"./exports/amd"
], function( jQuery ) {

return ( window.jQuery = window.$ = jQuery );
=======
	"./exports/amd",
	"./exports/global"
], function( jQuery ) {

"use strict";

return jQuery;
>>>>>>> refs/remotes/jquery/master

} );
