( function() {
<<<<<<< HEAD

// Can't test what ain't there
if ( !jQuery.fx ) {
	return;
}

module( "effects", {
	setup: function() {
		this.clock = sinon.useFakeTimers( 505877050 );
		this._oldInterval = jQuery.fx.interval;
		jQuery.fx.interval = 10;
	},
	teardown: function() {
		this.clock.restore();
		jQuery.fx.stop();
		jQuery.fx.interval = this._oldInterval;
		return moduleTeardown.apply( this, arguments );
	}
} );

QUnit.test( "sanity check", function( assert ) {
	assert.expect( 1 );
	assert.equal( jQuery( "#dl:visible, #qunit-fixture:visible, #foo:visible" ).length, 3, "QUnit state is correct for testing effects" );
} );

QUnit.test( "show() basic", 2, function() {
	var div,
		hiddendiv = jQuery( "div.hidden" );
=======

// Can't test what ain't there
if ( !jQuery.fx ) {
	return;
}

var oldRaf = window.requestAnimationFrame,
	hideOptions = {
		inline: function() { jQuery.style( this, "display", "none" ); },
		cascade: function() { this.className = "hidden"; }
	};

QUnit.module( "effects", {
	setup: function() {
		window.requestAnimationFrame = null;
		this.sandbox = sinon.sandbox.create();
		this.clock = this.sandbox.useFakeTimers( 505877050 );
		this._oldInterval = jQuery.fx.interval;
		jQuery.fx.step = {};
		jQuery.fx.interval = 10;
		jQuery.now = Date.now;
	},
	teardown: function() {
		this.sandbox.restore();
		jQuery.now = Date.now;
		jQuery.fx.stop();
		jQuery.fx.interval = this._oldInterval;
		window.requestAnimationFrame = oldRaf;
		return moduleTeardown.apply( this, arguments );
	}
} );
>>>>>>> refs/remotes/jquery/master

QUnit[ jQuery.find.compile ? "test" : "skip" ]( "sanity check", function( assert ) {
	assert.expect( 1 );
	assert.equal( jQuery( "#dl:visible, #qunit-fixture:visible, #foo:visible" ).length, 3, "QUnit state is correct for testing effects" );
} );

<<<<<<< HEAD
	equal( hiddendiv.css( "display" ), "block", "Make sure a pre-hidden div is visible." );

	div = jQuery( "<div>" ).hide().appendTo( "#qunit-fixture" ).show();

	equal( div.css( "display" ), "block", "Make sure pre-hidden divs show" );
=======
QUnit.test( "show() basic", function( assert ) {
	assert.expect( 1 );

	var div = jQuery( "<div>" ).hide().appendTo( "#qunit-fixture" ).show();

	assert.equal( div.css( "display" ), "block", "Make sure pre-hidden divs show" );
>>>>>>> refs/remotes/jquery/master

	// Clean up the detached node
	div.remove();
} );

<<<<<<< HEAD
	QUnit.expectJqData( this, hiddendiv, "olddisplay" );
} );

QUnit.test( "show()", 27, function() {
	var div, speeds, test, old,
		displaysActual, displaysExpected,
		hiddendiv = jQuery( "div.hidden" );

	equal( jQuery.css( hiddendiv[ 0 ], "display" ), "none", "hiddendiv is display: none" );

	hiddendiv.css( "display", "block" );
	equal( jQuery.css( hiddendiv[ 0 ], "display" ), "block", "hiddendiv is display: block" );

	hiddendiv.show();
	equal( jQuery.css( hiddendiv[ 0 ], "display" ), "block", "hiddendiv is display: block" );

	hiddendiv.css( "display", "" );

	displaysActual = [];
	displaysExpected = [];

	div = jQuery( "#fx-queue div" ).slice( 0, 4 );
	div.show().each( function() {
		notEqual( this.style.display, "none", "don't change any <div> with display block" );
=======
QUnit.test( "show()", function( assert ) {
	assert.expect( 27 );

	var div, speeds, test,
		hiddendiv = jQuery( "div.hidden" );

	assert.equal( jQuery.css( hiddendiv[ 0 ], "display" ), "none", "hiddendiv is display: none" );

	hiddendiv.css( "display", "block" );
	assert.equal( jQuery.css( hiddendiv[ 0 ], "display" ), "block", "hiddendiv is display: block" );

	hiddendiv.show();
	assert.equal( jQuery.css( hiddendiv[ 0 ], "display" ), "block", "hiddendiv is display: block" );

	hiddendiv.css( "display", "" );

	div = jQuery( "#fx-queue div" ).slice( 0, 4 );
	div.show().each( function() {
		assert.notEqual( this.style.display, "none", "don't change any <div> with display block" );
>>>>>>> refs/remotes/jquery/master
	} );

	speeds = {
		"null speed": null,
		"undefined speed": undefined,
		"false speed": false
	};

	jQuery.each( speeds, function( name, speed ) {
		var pass = true;
		div.hide().show( speed ).each( function() {
			if ( this.style.display === "none" ) {
				pass = false;
			}
		} );
<<<<<<< HEAD
		ok( pass, "Show with " + name );
=======
		assert.ok( pass, "Show with " + name );
>>>>>>> refs/remotes/jquery/master
	} );

	jQuery.each( speeds, function( name, speed ) {
		var pass = true;
		div.hide().show( speed, function() {
			pass = false;
		} );
<<<<<<< HEAD
		ok( pass, "Show with " + name + " does not call animate callback" );
	} );

	// Tolerate data from show()/hide()
	QUnit.expectJqData( this, div, "olddisplay" );

	// #show-tests * is set display: none in CSS
	jQuery( "#qunit-fixture" )
		.append( "<div id='show-tests'><div><p><a href='#'></a></p><code></code><pre></pre><span></span></div><table><thead><tr><th></th></tr></thead><tbody><tr><td></td></tr></tbody></table><ul><li></li></ul></div><table id='test-table'></table>" );

	old = jQuery( "#test-table" ).show().css( "display" ) !== "table";
	jQuery( "#test-table" ).remove();
=======
		assert.ok( pass, "Show with " + name + " does not call animate callback" );
	} );

	// Tolerate data from show()/hide()
	assert.expectJqData( this, div, "olddisplay" );

	jQuery(
		"<div id='show-tests'>" +
		"<div><p><a href='#'></a></p><code></code><pre></pre><span></span></div>" +
		"<table><thead><tr><th></th></tr></thead><tbody><tr><td></td></tr></tbody></table>" +
		"<ul><li></li></ul></div>"
	).appendTo( "#qunit-fixture" ).find( "*" ).css( "display", "none" );
>>>>>>> refs/remotes/jquery/master

	test = {
		"div": "block",
		"p": "block",
		"a": "inline",
		"code": "inline",
		"pre": "block",
		"span": "inline",
<<<<<<< HEAD
		"table": old ? "block" : "table",
		"thead": old ? "block" : "table-header-group",
		"tbody": old ? "block" : "table-row-group",
		"tr": old ? "block" : "table-row",
		"th": old ? "block" : "table-cell",
		"td": old ? "block" : "table-cell",
		"ul": "block",
		"li": old ? "block" : "list-item"
=======
		"table": "table",
		"thead": "table-header-group",
		"tbody": "table-row-group",
		"tr": "table-row",
		"th": "table-cell",
		"td": "table-cell",
		"ul": "block",
		"li": "list-item"
>>>>>>> refs/remotes/jquery/master
	};

	jQuery.each( test, function( selector, expected ) {
		var elem = jQuery( selector, "#show-tests" ).show();
<<<<<<< HEAD
		equal( elem.css( "display" ), expected, "Show using correct display type for " + selector );
=======
		assert.equal( elem.css( "display" ), expected, "Show using correct display type for " + selector );
>>>>>>> refs/remotes/jquery/master
	} );

	jQuery( "#show-tests" ).remove();

	// Make sure that showing or hiding a text node doesn't cause an error
	jQuery( "<div>test</div> text <span>test</span>" ).show().remove();
	jQuery( "<div>test</div> text <span>test</span>" ).hide().remove();
} );

<<<<<<< HEAD
QUnit.test( "show(Number) - other displays", function() {
	expect( 15 );

	// #show-tests * is set display: none in CSS
	jQuery( "#qunit-fixture" ).append( "<div id='show-tests'><div><p><a href='#'></a></p><code></code><pre></pre><span></span></div><table><thead><tr><th></th></tr></thead><tbody><tr><td></td></tr></tbody></table><ul><li></li></ul></div><table id='test-table'></table>" );

	var test,
		old = jQuery("#test-table").show().css("display") !== "table";
	jQuery("#test-table").remove();

	// Note: inline elements are expected to be inline-block
	// because we're showing width/height
	// Can't animate width/height inline
	// See #14344
	test = {
		"div": "block",
		"p": "block",
		"a": "inline-block",
		"code": "inline-block",
		"pre": "block",
		"span": "inline-block",
		"table": old ? "block" : "table",
		"thead": old ? "block" : "table-header-group",
		"tbody": old ? "block" : "table-row-group",
		"tr": old ? "block" : "table-row",
		"th": old ? "block" : "table-cell",
		"td": old ? "block" : "table-cell",
		"ul": "block",
		"li": old ? "block" : "list-item"
	};

	jQuery.each( test, function( selector, expected ) {
		var elem = jQuery( selector, "#show-tests" ).show( 1, function() {
			equal( elem.css( "display" ), expected, "Show using correct display type for " + selector );
		} );
	} );
	this.clock.tick( 10 );

	jQuery( "#show-tests" ).remove();
} );

// Supports #7397
QUnit.test( "Persist correct display value", function() {
	expect( 3 );

	// #show-tests * is set display: none in CSS
	jQuery( "#qunit-fixture" ).append( "<div id='show-tests'><span style='position:absolute;'>foo</span></div>" );

	var $span = jQuery( "#show-tests span" ),
		displayNone = $span.css( "display" ),
		display = "",
		clock = this.clock;

	$span.show();

	display = $span.css( "display" );

	$span.hide();

	$span.fadeIn( 100, function() {
		equal( $span.css( "display" ), display, "Expecting display: " + display );
		$span.fadeOut( 100, function() {
			equal( $span.css( "display" ), displayNone, "Expecting display: " + displayNone );
			$span.fadeIn( 100, function() {
				equal( $span.css( "display" ), display, "Expecting display: " + display );
			} );
		} );
	} );

	clock.tick( 300 );

	QUnit.expectJqData( this, $span, "olddisplay" );
} );

QUnit.test( "animate(Hash, Object, Function)", function() {
	expect( 1 );
	var hash = { opacity: "show" },
		hashCopy = jQuery.extend( {}, hash );
	jQuery( "#foo" ).animate( hash, 0, function() {
		equal( hash.opacity, hashCopy.opacity, "Check if animate changed the hash parameter" );
	} );
} );

QUnit.test( "animate relative values", function() {
=======
supportjQuery.each( hideOptions, function( type, setup ) {
	QUnit.test( "show(Number) - " + type + " hidden", function( assert ) {
		assert.expect( 30 );

		jQuery(
			"<div id='show-tests'>" +
			"<div><p><a href='#'></a></p><code></code><pre></pre><span></span></div>" +
			"<table><thead><tr><th></th></tr></thead><tbody><tr><td></td></tr></tbody>" +
				"</table>" +
			"<ul><li></li></ul></div>"
		).appendTo( "#qunit-fixture" ).find( "*" ).each( setup );

		// Note: inline elements are expected to be inline-block
		// because we're showing width/height
		// Can't animate width/height inline
		// See #14344
		var test = {
			"div": "block",
			"p": "block",
			"a": "inline",
			"code": "inline",
			"pre": "block",
			"span": "inline",
			"table": "table",
			"thead": "table-header-group",
			"tbody": "table-row-group",
			"tr": "table-row",
			"th": "table-cell",
			"td": "table-cell",
			"ul": "block",
			"li": "list-item"
		};

		jQuery.each( test, function( selector ) {
			jQuery( selector, "#show-tests" ).show( 100 );
		} );
		this.clock.tick( 50 );
		jQuery.each( test, function( selector, expected ) {
			jQuery( selector, "#show-tests" ).each( function() {
				assert.equal(
					jQuery( this ).css( "display" ),
					expected === "inline" ? "inline-block" : expected,
					"Correct display type during animation for " + selector
				);
			} );
		} );
		this.clock.tick( 50 );
		jQuery.each( test, function( selector, expected ) {
			jQuery( selector, "#show-tests" ).each( function() {
				assert.equal( jQuery( this ).css( "display" ), expected,
					"Correct display type after animation for " + selector );
			} );
		} );

		jQuery( "#show-tests" ).remove();
	} );
} );

// Supports #7397
supportjQuery.each( hideOptions, function( type, setup ) {
	QUnit.test( "Persist correct display value - " + type + " hidden", function( assert ) {
		assert.expect( 3 );

		jQuery( "<div id='show-tests'><span style='position:absolute;'>foo</span></div>" )
			.appendTo( "#qunit-fixture" ).find( "*" ).each( setup );

		var $span = jQuery( "#show-tests span" ),
			displayNone = $span.css( "display" ),
			display = "",
			clock = this.clock;

		$span.show();

		display = $span.css( "display" );

		$span.hide();

		$span.fadeIn( 100, function() {
			assert.equal( $span.css( "display" ), display, "Expecting display: " + display );
			$span.fadeOut( 100, function() {
				assert.equal( $span.css( "display" ), displayNone, "Expecting display: " + displayNone );
				$span.fadeIn( 100, function() {
					assert.equal( $span.css( "display" ), display, "Expecting display: " + display );
				} );
			} );
		} );

		clock.tick( 300 );

		assert.expectJqData( this, $span, "olddisplay" );
	} );
} );

QUnit.test( "animate(Hash, Object, Function)", function( assert ) {
	assert.expect( 1 );
	var hash = { opacity: "show" },
		hashCopy = jQuery.extend( {}, hash );
	jQuery( "#foo" ).animate( hash, 0, function() {
		assert.equal( hash.opacity, hashCopy.opacity, "Check if animate changed the hash parameter" );
	} );
} );

QUnit.test( "animate relative values", function( assert ) {
>>>>>>> refs/remotes/jquery/master

	var value = 40,
		clock = this.clock,
		bases = [ "%", "px", "em" ],
		adjustments = [ "px", "em" ],
		container = jQuery( "<div></div>" )
			.css( { position: "absolute", height: "50em", width: "50em" } ),
		animations = bases.length * adjustments.length;

<<<<<<< HEAD
	expect( 2 * animations );
=======
	assert.expect( 2 * animations );
>>>>>>> refs/remotes/jquery/master

	jQuery.each( bases, function( _, baseUnit ) {
		jQuery.each( adjustments, function( _, adjustUnit ) {
			var base = value + baseUnit,
				adjust = { height: "+=2" + adjustUnit, width: "-=2" + adjustUnit },
				elem = jQuery( "<div></div>" )
					.appendTo( container.clone().appendTo( "#qunit-fixture" ) )
					.css( {
						position: "absolute",
						height: base,
						width: value + adjustUnit
					} ),
				baseScale = elem[ 0 ].offsetHeight / value,
				adjustScale = elem[ 0 ].offsetWidth / value;

			elem.css( "width", base ).animate( adjust, 100, function() {
<<<<<<< HEAD
				equal( this.offsetHeight, value * baseScale + 2 * adjustScale,
					baseUnit + "+=" + adjustUnit );
				equal( this.offsetWidth, value * baseScale - 2 * adjustScale,
=======
				assert.equal( this.offsetHeight, value * baseScale + 2 * adjustScale,
					baseUnit + "+=" + adjustUnit );
				assert.equal( this.offsetWidth, value * baseScale - 2 * adjustScale,
>>>>>>> refs/remotes/jquery/master
					baseUnit + "-=" + adjustUnit );

			} );

			clock.tick( 100 );
		} );
	} );
} );

<<<<<<< HEAD
QUnit.test( "animate negative height", function() {
	expect( 1 );
	jQuery( "#foo" ).animate( { height: -100 }, 100, function() {
		equal( this.offsetHeight, 0, "Verify height." );
=======
QUnit.test( "animate negative height", function( assert ) {
	assert.expect( 1 );
	jQuery( "#foo" ).animate( { height: -100 }, 100, function() {
		assert.equal( this.offsetHeight, 0, "Verify height." );
>>>>>>> refs/remotes/jquery/master
	} );
	this.clock.tick( 100 );
} );

<<<<<<< HEAD
QUnit.test( "animate negative margin", function() {
	expect( 1 );
	jQuery( "#foo" ).animate( { "marginTop": -100 }, 100, function() {
		equal( jQuery( this ).css( "marginTop" ), "-100px", "Verify margin." );
=======
QUnit.test( "animate negative margin", function( assert ) {
	assert.expect( 1 );
	jQuery( "#foo" ).animate( { "marginTop": -100 }, 100, function() {
		assert.equal( jQuery( this ).css( "marginTop" ), "-100px", "Verify margin." );
>>>>>>> refs/remotes/jquery/master
	} );
	this.clock.tick( 100 );
} );

<<<<<<< HEAD
QUnit.test( "animate negative margin with px", function() {
	expect( 1 );
	jQuery( "#foo" ).animate( { marginTop: "-100px" }, 100, function() {
		equal( jQuery( this ).css( "marginTop" ), "-100px", "Verify margin." );
=======
QUnit.test( "animate negative margin with px", function( assert ) {
	assert.expect( 1 );
	jQuery( "#foo" ).animate( { marginTop: "-100px" }, 100, function() {
		assert.equal( jQuery( this ).css( "marginTop" ), "-100px", "Verify margin." );
>>>>>>> refs/remotes/jquery/master
	} );
	this.clock.tick( 100 );
} );

<<<<<<< HEAD
QUnit.test( "animate negative padding", function() {
	expect( 1 );
	jQuery( "#foo" ).animate( { "paddingBottom": -100 }, 100, function() {
		equal( jQuery( this ).css( "paddingBottom" ), "0px", "Verify paddingBottom." );
=======
QUnit.test( "animate negative padding", function( assert ) {
	assert.expect( 1 );
	jQuery( "#foo" ).animate( { "paddingBottom": -100 }, 100, function() {
		assert.equal( jQuery( this ).css( "paddingBottom" ), "0px", "Verify paddingBottom." );
>>>>>>> refs/remotes/jquery/master
	} );
	this.clock.tick( 100 );
} );

<<<<<<< HEAD
QUnit.test( "animate block as inline width/height", function() {
	expect( 3 );

	var span = jQuery("<span>").css("display", "inline-block").appendTo("body"),
		expected = span.css("display");

	span.remove();

	if ( jQuery.support.inlineBlockNeedsLayout || expected === "inline-block" ) {

		jQuery("#foo").css({ display: "inline", width: "", height: "" }).animate({ width: 42, height: 42 }, 100, function() {
			equal( jQuery(this).css("display"), jQuery.support.inlineBlockNeedsLayout ? "inline" : "inline-block", "inline-block was set on non-floated inline element when animating width/height" );
			equal( this.offsetWidth, 42, "width was animated" );
			equal( this.offsetHeight, 42, "height was animated" );
		});

	// Browser doesn't support inline-block
	} else {
		ok( true, "Browser doesn't support inline-block" );
		ok( true, "Browser doesn't support inline-block" );
		ok( true, "Browser doesn't support inline-block" );
	}
	this.clock.tick( 100 );
} );

QUnit.test( "animate native inline width/height", function() {
	expect( 3 );

	var span = jQuery("<span>").css("display", "inline-block").appendTo("body"),
		expected = span.css("display");

	span.remove();

	if ( jQuery.support.inlineBlockNeedsLayout || expected === "inline-block" ) {
		jQuery("#foo").css({ display: "", width: "", height: "" })
			.append("<span>text</span>")
			.children("span")
				.animate({ width: 42, height: 42 }, 100, function() {
					equal( jQuery(this).css("display"), "inline-block", "inline-block was set on non-floated inline element when animating width/height" );
					equal( this.offsetWidth, 42, "width was animated" );
					equal( this.offsetHeight, 42, "height was animated" );
				});

	// Browser doesn't support inline-block
	} else {
		ok( true, "Browser doesn't support inline-block" );
		ok( true, "Browser doesn't support inline-block" );
		ok( true, "Browser doesn't support inline-block" );
	}
	this.clock.tick( 100 );
} );

QUnit.test( "animate block width/height", function() {
	expect( 3 );
=======
QUnit.test( "animate block as inline width/height", function( assert ) {
	assert.expect( 3 );

	jQuery( "#foo" ).css( { display: "inline", width: "", height: "" } ).animate( { width: 42, height: 42 }, 100, function() {
		assert.equal( jQuery( this ).css( "display" ), "inline-block", "inline-block was set on non-floated inline element when animating width/height" );
		assert.equal( this.offsetWidth, 42, "width was animated" );
		assert.equal( this.offsetHeight, 42, "height was animated" );
	} );
	this.clock.tick( 100 );
} );

QUnit.test( "animate native inline width/height", function( assert ) {
	assert.expect( 3 );

	jQuery( "#foo" ).css( { display: "", width: "", height: "" } )
		.append( "<span>text</span>" )
		.children( "span" )
			.animate( { width: 42, height: 42 }, 100, function() {
				assert.equal( jQuery( this ).css( "display" ), "inline-block", "inline-block was set on non-floated inline element when animating width/height" );
				assert.equal( this.offsetWidth, 42, "width was animated" );
				assert.equal( this.offsetHeight, 42, "height was animated" );
			} );
	this.clock.tick( 100 );
} );

QUnit.test( "animate block width/height", function( assert ) {
	assert.expect( 3 );
>>>>>>> refs/remotes/jquery/master

	jQuery( "<div>" ).appendTo( "#qunit-fixture" ).css( {
		display: "block",
		width: 20,
		height: 20,
		paddingLeft: 60
	} ).animate( {
		width: 42,
		height: 42
	}, {
		duration: 100,
		step: function() {
			if ( jQuery( this ).width() > 42 ) {
<<<<<<< HEAD
				ok( false, "width was incorrectly augmented during animation" );
			}
		},
		complete: function() {
			equal( jQuery( this ).css( "display" ), "block", "inline-block was not set on block element when animating width/height" );
			equal( jQuery( this ).width(), 42, "width was animated" );
			equal( jQuery( this ).height(), 42, "height was animated" );
=======
				assert.ok( false, "width was incorrectly augmented during animation" );
			}
		},
		complete: function() {
			assert.equal( jQuery( this ).css( "display" ), "block", "inline-block was not set on block element when animating width/height" );
			assert.equal( jQuery( this ).width(), 42, "width was animated" );
			assert.equal( jQuery( this ).height(), 42, "height was animated" );
>>>>>>> refs/remotes/jquery/master
		}
	} );
	this.clock.tick( 100 );
} );

<<<<<<< HEAD
QUnit.test("animate table width/height", function() {
	expect( 1 );

	var displayMode = jQuery( "#table" ).css( "display" ) !== "table" ? "block" : "table";

	jQuery( "#table" ).animate( { width: 42, height: 42 }, 100, function() {
		equal( jQuery( this ).css( "display" ), displayMode, "display mode is correct" );
=======
QUnit.test( "animate table width/height", function( assert ) {
	assert.expect( 1 );

	jQuery( "#table" ).animate( { width: 42, height: 42 }, 100, function() {
		assert.equal( jQuery( this ).css( "display" ), "table", "display mode is correct" );
>>>>>>> refs/remotes/jquery/master
	} );
	this.clock.tick( 100 );
} );

<<<<<<< HEAD
QUnit.test("animate table-row width/height", function() {
	expect( 3 );
	var displayMode,
		tr = jQuery( "#table" )
=======
QUnit.test( "animate table-row width/height", function( assert ) {
	assert.expect( 3 );
	var tr = jQuery( "#table" )
>>>>>>> refs/remotes/jquery/master
			.attr( { "cellspacing": 0, "cellpadding": 0, "border": 0 } )
			.html( "<tr style='height:42px;'><td style='padding:0;'><div style='width:20px;height:20px;'></div></td></tr>" )
			.find( "tr" );

<<<<<<< HEAD
	// IE<8 uses "block" instead of the correct display type
	displayMode = tr.css( "display" ) !== "table-row" ? "block" : "table-row";

	tr.animate( { width: 10, height: 10 }, 100, function() {
		equal( jQuery( this ).css( "display" ), displayMode, "display mode is correct" );
		equal( this.offsetWidth, 20, "width animated to shrink wrap point" );
		equal( this.offsetHeight, 20, "height animated to shrink wrap point" );
=======
	tr.animate( { width: 10, height: 10 }, 100, function() {
		assert.equal( jQuery( this ).css( "display" ), "table-row", "display mode is correct" );
		assert.equal( this.offsetWidth, 20, "width animated to shrink wrap point" );
		assert.equal( this.offsetHeight, 20, "height animated to shrink wrap point" );
>>>>>>> refs/remotes/jquery/master
	} );
	this.clock.tick( 100 );
} );

<<<<<<< HEAD
QUnit.test( "animate table-cell width/height", function() {
	expect( 3 );
	var displayMode,
		td = jQuery( "#table" )
			.attr({ "cellspacing": 0, "cellpadding": 0, "border": 0 })
			.html( "<tr><td style='width:42px;height:42px;padding:0;'><div style='width:20px;height:20px;'></div></td></tr>" )
			.find( "td" );

	// IE<8 uses "block" instead of the correct display type
	displayMode = td.css( "display" ) !== "table-cell" ? "block" : "table-cell";

	td.animate( { width: 10, height: 10 }, 100, function() {
		equal( jQuery( this ).css( "display" ), displayMode, "display mode is correct" );
		equal( this.offsetWidth, 20, "width animated to shrink wrap point" );
		equal( this.offsetHeight, 20, "height animated to shrink wrap point" );
=======
QUnit.test( "animate table-cell width/height", function( assert ) {
	assert.expect( 3 );

	var td = jQuery( "#table" )
			.attr( { "cellspacing": 0, "cellpadding": 0, "border": 0 } )
			.html( "<tr><td style='width:42px;height:42px;padding:0;'><div style='width:20px;height:20px;'></div></td></tr>" )
			.find( "td" );

	td.animate( { width: 10, height: 10 }, 100, function() {
		assert.equal( jQuery( this ).css( "display" ), "table-cell", "display mode is correct" );
		assert.equal( this.offsetWidth, 20, "width animated to shrink wrap point" );
		assert.equal( this.offsetHeight, 20, "height animated to shrink wrap point" );
>>>>>>> refs/remotes/jquery/master
	} );
	this.clock.tick( 100 );
} );

<<<<<<< HEAD
QUnit.test( "animate percentage(%) on width/height", function() {
	expect( 2 );
=======
QUnit.test( "animate percentage(%) on width/height", function( assert ) {
	assert.expect( 2 );
>>>>>>> refs/remotes/jquery/master

	var $div = jQuery( "<div style='position:absolute;top:-999px;left:-999px;width:60px;height:60px;'><div style='width:50%;height:50%;'></div></div>" )
		.appendTo( "#qunit-fixture" ).children( "div" );

	$div.animate( { width: "25%", height: "25%" }, 13, function() {
		var $this = jQuery( this );
<<<<<<< HEAD
		equal( $this.css( "width" ), "15px", "Width was animated to 15px rather than 25px" );
		equal( $this.css( "height" ), "15px", "Height was animated to 15px rather than 25px" );
=======
		assert.equal( $this.css( "width" ), "15px", "Width was animated to 15px rather than 25px" );
		assert.equal( $this.css( "height" ), "15px", "Height was animated to 15px rather than 25px" );
>>>>>>> refs/remotes/jquery/master
	} );
	this.clock.tick( 20 );
} );

<<<<<<< HEAD
QUnit.test( "animate resets overflow-x and overflow-y when finished", function() {
	expect( 2 );
	jQuery( "#foo" )
		.css( { display: "block", width: 20, height: 20, overflowX: "visible", overflowY: "auto" } )
		.animate( { width: 42, height: 42 }, 100, function() {
			equal( this.style.overflowX, "visible", "overflow-x is visible" );
			equal( this.style.overflowY, "auto", "overflow-y is auto" );
=======
QUnit.test( "animate resets overflow-x and overflow-y when finished", function( assert ) {
	assert.expect( 2 );
	jQuery( "#foo" )
		.css( { display: "block", width: 20, height: 20, overflowX: "visible", overflowY: "auto" } )
		.animate( { width: 42, height: 42 }, 100, function() {
			assert.equal( this.style.overflowX, "visible", "overflow-x is visible" );
			assert.equal( this.style.overflowY, "auto", "overflow-y is auto" );
>>>>>>> refs/remotes/jquery/master
		} );
	this.clock.tick( 100 );
} );

/* // This test ends up being flaky depending upon the CPU load
<<<<<<< HEAD
QUnit.test("animate option (queue === false)", function () {
	expect(1);
	stop();
=======
QUnit.test("animate option (queue === false)", function( assert ) {
	assert.expect(1);
	QUnit.stop();
>>>>>>> refs/remotes/jquery/master

	var order = [];

	var $foo = jQuery("#foo");
	$foo.animate({width:"100px"}, 3000, function () {
		// should finish after unqueued animation so second
		order.push(2);
		assert.deepEqual( order, [ 1, 2 ], "Animations finished in the correct order" );
		QUnit.start();
	});
	$foo.animate({fontSize:"2em"}, {queue:false, duration:10, complete:function () {
		// short duration and out of queue so should finish first
		order.push(1);
	}});
});
*/

<<<<<<< HEAD
QUnit.test( "animate option { queue: false }", function() {
	expect( 2 );
=======
QUnit.test( "animate option { queue: false }", function( assert ) {
	assert.expect( 2 );
>>>>>>> refs/remotes/jquery/master
	var foo = jQuery( "#foo" );

	foo.animate( {
		fontSize: "2em"
	}, {
		queue: false,
		duration: 10,
		complete: function() {
<<<<<<< HEAD
			ok( true, "Animation Completed" );
=======
			assert.ok( true, "Animation Completed" );
>>>>>>> refs/remotes/jquery/master
		}
	} );
	this.clock.tick( 10 );

<<<<<<< HEAD
	equal( foo.queue().length, 0, "Queue is empty" );
} );

QUnit.test( "animate option { queue: true }", function() {
	expect( 2 );
=======
	assert.equal( foo.queue().length, 0, "Queue is empty" );
} );

QUnit.test( "animate option { queue: true }", function( assert ) {
	assert.expect( 2 );
>>>>>>> refs/remotes/jquery/master
	var foo = jQuery( "#foo" );

	foo.animate( {
		fontSize: "2em"
	}, {
		queue: true,
		duration: 10,
		complete: function() {
<<<<<<< HEAD
			ok( true, "Animation Completed" );
		}
	} );

	notEqual( foo.queue().length, 0, "Default queue is not empty" );

	//clear out existing timers before next test
	this.clock.tick( 10 );
} );

QUnit.test( "animate option { queue: 'name' }", function() {
	expect( 5 );
=======
			assert.ok( true, "Animation Completed" );
		}
	} );

	assert.notEqual( foo.queue().length, 0, "Default queue is not empty" );

	//clear out existing timers before next test
	this.clock.tick( 10 );
} );

QUnit.test( "animate option { queue: 'name' }", function( assert ) {
	assert.expect( 5 );
>>>>>>> refs/remotes/jquery/master
	var foo = jQuery( "#foo" ),
		origWidth = parseFloat( foo.css( "width" ) ),
		order = [];

	foo.animate( { width: origWidth + 100 }, {
		queue: "name",
		duration: 1,
		complete: function() {

			// second callback function
			order.push( 2 );
<<<<<<< HEAD
			equal( parseFloat( foo.css( "width" ) ), origWidth + 100, "Animation ended" );
			equal( foo.queue( "name" ).length, 1, "Queue length of 'name' queue" );
=======
			assert.equal( parseFloat( foo.css( "width" ) ), origWidth + 100, "Animation ended" );
			assert.equal( foo.queue( "name" ).length, 1, "Queue length of 'name' queue" );
>>>>>>> refs/remotes/jquery/master
		}
	} ).queue( "name", function() {

		// last callback function
<<<<<<< HEAD
		deepEqual( order, [ 1, 2 ], "Callbacks in expected order" );
=======
		assert.deepEqual( order, [ 1, 2 ], "Callbacks in expected order" );
>>>>>>> refs/remotes/jquery/master
	} );

	// this is the first callback function that should be called
	order.push( 1 );
<<<<<<< HEAD
	equal( parseFloat( foo.css( "width" ) ), origWidth, "Animation does not start on its own." );
	equal( foo.queue( "name" ).length, 2, "Queue length of 'name' queue" );
=======
	assert.equal( parseFloat( foo.css( "width" ) ), origWidth, "Animation does not start on its own." );
	assert.equal( foo.queue( "name" ).length, 2, "Queue length of 'name' queue" );
>>>>>>> refs/remotes/jquery/master

	foo.dequeue( "name" );
	this.clock.tick( 10 );

} );

<<<<<<< HEAD
QUnit.test( "animate with no properties", function() {
	expect( 2 );
=======
QUnit.test( "animate with no properties", function( assert ) {
	assert.expect( 2 );
>>>>>>> refs/remotes/jquery/master

	var foo,
		divs = jQuery( "div" ),
		count = 0;

	divs.animate( {}, function() {
		count++;
	} );

<<<<<<< HEAD
	equal( divs.length, count, "Make sure that callback is called for each element in the set." );

	foo = jQuery( "#foo" );

	foo.animate( {} );
	foo.animate( { top: 10 }, 100, function() {
		ok( true, "Animation was properly dequeued." );
=======
	assert.equal( divs.length, count, "Make sure that callback is called for each element in the set." );

	foo = jQuery( "#foo" );

	foo.animate( {} );
	foo.animate( { top: 10 }, 100, function() {
		assert.ok( true, "Animation was properly dequeued." );
>>>>>>> refs/remotes/jquery/master
	} );
	this.clock.tick( 100 );
} );

<<<<<<< HEAD
QUnit.test( "animate duration 0", function() {
	expect( 11 );
=======
QUnit.test( "animate duration 0", function( assert ) {
	assert.expect( 11 );
>>>>>>> refs/remotes/jquery/master

	var $elem,
		$elems = jQuery( [ { a:0 }, { a:0 } ] ),
		counter = 0;

	assert.equal( jQuery.timers.length, 0, "Make sure no animation was running from another test" );

	$elems.eq( 0 ).animate( { a:1 }, 0, function() {
<<<<<<< HEAD
		ok( true, "Animate a simple property." );
=======
		assert.ok( true, "Animate a simple property." );
>>>>>>> refs/remotes/jquery/master
		counter++;
	} );

	// Failed until [6115]
	assert.equal( jQuery.timers.length, 0, "Make sure synchronic animations are not left on jQuery.timers" );

	assert.equal( counter, 1, "One synchronic animations" );

	$elems.animate( { a:2 }, 0, function() {
<<<<<<< HEAD
		ok( true, "Animate a second simple property." );
=======
		assert.ok( true, "Animate a second simple property." );
>>>>>>> refs/remotes/jquery/master
		counter++;
	} );

	assert.equal( counter, 3, "Multiple synchronic animations" );

	$elems.eq( 0 ).animate( { a:3 }, 0, function() {
<<<<<<< HEAD
		ok( true, "Animate a third simple property." );
=======
		assert.ok( true, "Animate a third simple property." );
>>>>>>> refs/remotes/jquery/master
		counter++;
	} );
	$elems.eq( 1 ).animate( { a:3 }, 200, function() {
		counter++;
<<<<<<< HEAD

		// Failed until [6115]
		equal( counter, 5, "One synchronic and one asynchronic" );
	} );
	this.clock.tick( 200 );

	$elem = jQuery( "<div />" );
	$elem.show( 0, function() {
		ok( true, "Show callback with no duration" );
	} );
	$elem.hide( 0, function() {
		ok( true, "Hide callback with no duration" );
=======

		// Failed until [6115]
		assert.equal( counter, 5, "One synchronic and one asynchronic" );
	} );
	this.clock.tick( 200 );

	$elem = jQuery( "<div />" );
	$elem.show( 0, function() {
		assert.ok( true, "Show callback with no duration" );
	} );
	$elem.hide( 0, function() {
		assert.ok( true, "Hide callback with no duration" );
>>>>>>> refs/remotes/jquery/master
	} );

	// manually clean up detached elements
	$elem.remove();
} );

<<<<<<< HEAD
QUnit.test( "animate hyphenated properties", function() {
	expect( 1 );
=======
QUnit.test( "animate hyphenated properties", function( assert ) {
	assert.expect( 1 );
>>>>>>> refs/remotes/jquery/master

	jQuery( "#foo" )
		.css( "font-size", 10 )
		.animate( { "font-size": 20 }, 200, function() {
<<<<<<< HEAD
			equal( this.style.fontSize, "20px", "The font-size property was animated." );
		} );

	// FIXME why is this double only when run with other tests
	this.clock.tick( 400 );

} );

QUnit.test( "animate non-element", function() {
	expect( 1 );
=======
			assert.equal( this.style.fontSize, "20px", "The font-size property was animated." );
		} );

	// FIXME why is this double only when run with other tests
	this.clock.tick( 400 );

} );

QUnit.test( "animate non-element", function( assert ) {
	assert.expect( 1 );
>>>>>>> refs/remotes/jquery/master

	var obj = { test: 0 };

	jQuery( obj ).animate( { test: 200 }, 200, function() {
<<<<<<< HEAD
		equal( obj.test, 200, "The custom property should be modified." );
=======
		assert.equal( obj.test, 200, "The custom property should be modified." );
>>>>>>> refs/remotes/jquery/master
	} );
	this.clock.tick( 200 );
} );

<<<<<<< HEAD
QUnit.test( "stop()", function() {
	expect( 4 );
=======
QUnit.test( "stop()", function( assert ) {
	assert.expect( 4 );
>>>>>>> refs/remotes/jquery/master

	var $one, $two,
		$foo = jQuery( "#foo" ),
		w = 0,
		nw;

	$foo.hide().css( "width", 200 )
		.animate( { "width": "show" }, 1500 );

	this.clock.tick( 100 );
	nw = $foo.css( "width" );
<<<<<<< HEAD
	notEqual( parseFloat( nw ), w, "An animation occurred " + nw + " " + w + "px" );
	$foo.stop();

	nw = $foo.css( "width" );
	notEqual( parseFloat( nw ), w, "Stop didn't reset the animation " + nw + " " + w + "px" );

	this.clock.tick( 100 );

	$foo.removeData();
	$foo.removeData( undefined, true );
	equal( nw, $foo.css( "width" ), "The animation didn't continue" );

	$one = jQuery( "#fadein" );
	$two = jQuery( "#show" );
	$one.fadeTo( 100, 0, function() {
		$one.stop();
	} );
	this.clock.tick( 100 );
	$two.fadeTo( 100, 0, function() {
		equal( $two.css( "opacity" ), "0", "Stop does not interfere with animations on other elements (#6641)" );

		// Reset styles
		$one.add( $two ).css( "opacity", "" );
	} );
	this.clock.tick( 100 );
} );

QUnit.test( "stop() - several in queue", function() {
	expect( 5 );

	var nw, $foo = jQuery( "#foo" );
=======
	assert.notEqual( parseFloat( nw ), w, "An animation occurred " + nw + " " + w + "px" );
	$foo.stop();

	nw = $foo.css( "width" );
	assert.notEqual( parseFloat( nw ), w, "Stop didn't reset the animation " + nw + " " + w + "px" );

	this.clock.tick( 100 );

	$foo.removeData();
	$foo.removeData( undefined, true );
	assert.equal( nw, $foo.css( "width" ), "The animation didn't continue" );

	$one = jQuery( "#fadein" );
	$two = jQuery( "#show" );
	$one.fadeTo( 100, 0, function() {
		$one.stop();
	} );
	this.clock.tick( 100 );
	$two.fadeTo( 100, 0, function() {
		assert.equal( $two.css( "opacity" ), "0", "Stop does not interfere with animations on other elements (#6641)" );

		// Reset styles
		$one.add( $two ).css( "opacity", "" );
	} );
	this.clock.tick( 100 );
} );

// In IE9 inside testswarm this test doesn't work properly
( function() {
	var type = "test";

	if ( QUnit.isSwarm && /msie 9\.0/i.test( window.navigator.userAgent ) ) {
		type = "skip";
	}

	QUnit[ type ]( "stop() - several in queue", function( assert ) {
		assert.expect( 5 );

		var nw, $foo = jQuery( "#foo" );
>>>>>>> refs/remotes/jquery/master

		// default duration is 400ms, so 800px ensures we aren't 0 or 1 after 1ms
		$foo.hide().css( "width", 800 );

<<<<<<< HEAD
	$foo.animate( { "width": "show" }, 400, "linear" );
	$foo.animate( { "width": "hide" } );
	$foo.animate( { "width": "show" } );

	this.clock.tick( 1 );
=======
		$foo.animate( { "width": "show" }, 400, "linear" );
		$foo.animate( { "width": "hide" } );
		$foo.animate( { "width": "show" } );

		this.clock.tick( 1 );
>>>>>>> refs/remotes/jquery/master

		jQuery.fx.tick();
		assert.equal( $foo.queue().length, 3, "3 in the queue" );

		nw = $foo.css( "width" );
		assert.notEqual( parseFloat( nw ), 1, "An animation occurred " + nw );
		$foo.stop();

		assert.equal( $foo.queue().length, 2, "2 in the queue" );
		nw = $foo.css( "width" );
		assert.notEqual( parseFloat( nw ), 1, "Stop didn't reset the animation " + nw );

		$foo.stop( true );

		assert.equal( $foo.queue().length, 0, "0 in the queue" );
	} );
} )();

QUnit.test( "stop(clearQueue)", function( assert ) {
	assert.expect( 4 );

	var $foo = jQuery( "#foo" ),
		w = 0,
		nw;
	$foo.hide().css( "width", 200 ).css( "width" );

	$foo.animate( { "width": "show" }, 1000 );
	$foo.animate( { "width": "hide" }, 1000 );
	$foo.animate( { "width": "show" }, 1000 );
	this.clock.tick( 100 );
	nw = $foo.css( "width" );
	assert.ok( parseFloat( nw ) !== w, "An animation occurred " + nw + " " + w + "px" );
	$foo.stop( true );

<<<<<<< HEAD
	equal( $foo.queue().length, 0, "0 in the queue" );
} );

QUnit.test( "stop(clearQueue)", function() {
	expect( 4 );

	var $foo = jQuery( "#foo" ),
		w = 0,
		nw;
	$foo.hide().css( "width", 200 ).css( "width" );

	$foo.animate( { "width": "show" }, 1000 );
	$foo.animate( { "width": "hide" }, 1000 );
	$foo.animate( { "width": "show" }, 1000 );
	this.clock.tick( 100 );
	nw = $foo.css( "width" );
	ok( parseFloat( nw ) !== w, "An animation occurred " + nw + " " + w + "px" );
	$foo.stop( true );

	nw = $foo.css( "width" );
	ok( parseFloat( nw ) !== w, "Stop didn't reset the animation " + nw + " " + w + "px" );

	equal( $foo.queue().length, 0, "The animation queue was cleared" );
	this.clock.tick( 100 );
	equal( nw, $foo.css( "width" ), "The animation didn't continue" );
} );

QUnit.test( "stop(clearQueue, gotoEnd)", function() {
	expect( 1 );

	var $foo = jQuery( "#foo" ),
		w = 0,
		nw;
	$foo.hide().css( "width", 200 ).css( "width" );

	$foo.animate( { width: "show" }, 1000 );
	$foo.animate( { width: "hide" }, 1000 );
	$foo.animate( { width: "show" }, 1000 );
	$foo.animate( { width: "hide" }, 1000 );
	this.clock.tick( 100 );
	nw = $foo.css( "width" );
	ok( parseFloat( nw ) !== w, "An animation occurred " + nw + " " + w + "px" );
	$foo.stop( false, true );

	nw = $foo.css( "width" );

	// Disabled, being flaky
	//equal( nw, 1, "Stop() reset the animation" );

	this.clock.tick( 100 );

	// Disabled, being flaky
	//equal( $foo.queue().length, 2, "The next animation continued" );
	$foo.stop( true );
} );

QUnit.test( "stop( queue, ..., ... ) - Stop single queues", function() {
	expect( 3 );
=======
	nw = $foo.css( "width" );
	assert.ok( parseFloat( nw ) !== w, "Stop didn't reset the animation " + nw + " " + w + "px" );

	assert.equal( $foo.queue().length, 0, "The animation queue was cleared" );
	this.clock.tick( 100 );
	assert.equal( nw, $foo.css( "width" ), "The animation didn't continue" );
} );

QUnit.test( "stop(clearQueue, gotoEnd)", function( assert ) {
	assert.expect( 1 );

	var $foo = jQuery( "#foo" ),
		w = 0,
		nw;
	$foo.hide().css( "width", 200 ).css( "width" );

	$foo.animate( { width: "show" }, 1000 );
	$foo.animate( { width: "hide" }, 1000 );
	$foo.animate( { width: "show" }, 1000 );
	$foo.animate( { width: "hide" }, 1000 );
	this.clock.tick( 100 );
	nw = $foo.css( "width" );
	assert.ok( parseFloat( nw ) !== w, "An animation occurred " + nw + " " + w + "px" );
	$foo.stop( false, true );

	nw = $foo.css( "width" );

	// Disabled, being flaky
	//equal( nw, 1, "Stop() reset the animation" );

	this.clock.tick( 100 );

	// Disabled, being flaky
	//equal( $foo.queue().length, 2, "The next animation continued" );
	$foo.stop( true );
} );

QUnit.test( "stop( queue, ..., ... ) - Stop single queues", function( assert ) {
	assert.expect( 3 );
>>>>>>> refs/remotes/jquery/master
	var saved,
		foo = jQuery( "#foo" ).css( { width: 200, height: 200 } );

	foo.animate( {
		width: 400
	}, {
		duration: 500,
		complete: function() {
<<<<<<< HEAD
			equal( parseFloat( foo.css( "width" ) ), 400, "Animation completed for standard queue" );
			equal( parseFloat( foo.css( "height" ) ), saved, "Height was not changed after the second stop" );
=======
			assert.equal( parseFloat( foo.css( "width" ) ), 400, "Animation completed for standard queue" );
			assert.equal( parseFloat( foo.css( "height" ) ), saved, "Height was not changed after the second stop" );
>>>>>>> refs/remotes/jquery/master
		}
	} );

	foo.animate( {
		height: 400
	}, {
		duration: 1000,
		queue: "height"
	} ).dequeue( "height" ).stop( "height", false, true );

<<<<<<< HEAD
	equal( parseFloat( foo.css( "height" ) ), 400, "Height was stopped with gotoEnd" );
=======
	assert.equal( parseFloat( foo.css( "height" ) ), 400, "Height was stopped with gotoEnd" );
>>>>>>> refs/remotes/jquery/master

	foo.animate( {
		height: 200
	}, {
		duration: 1000,
		queue: "height"
	} ).dequeue( "height" ).stop( "height", false, false );
	saved = parseFloat( foo.css( "height" ) );
<<<<<<< HEAD
	this.clock.tick( 500 );
} );

QUnit.test( "toggle()", function() {
	expect( 6 );
	var x = jQuery( "#foo" );
	ok( x.is( ":visible" ), "is visible" );
	x.toggle();
	ok( x.is( ":hidden" ), "is hidden" );
	x.toggle();
	ok( x.is( ":visible" ), "is visible again" );

	x.toggle( true );
	ok( x.is( ":visible" ), "is visible" );
	x.toggle( false );
	ok( x.is( ":hidden" ), "is hidden" );
	x.toggle( true );
	ok( x.is( ":visible" ), "is visible again" );
} );

QUnit.test( "jQuery.fx.prototype.cur() - <1.8 Back Compat", 7, function() {
=======
        this.clock.tick( 500 );
} );

QUnit[ jQuery.find.compile ? "test" : "skip" ]( "toggle()", function( assert ) {
	assert.expect( 6 );
	var x = jQuery( "#foo" );
	assert.ok( x.is( ":visible" ), "is visible" );
	x.toggle();
	assert.ok( x.is( ":hidden" ), "is hidden" );
	x.toggle();
	assert.ok( x.is( ":visible" ), "is visible again" );

	x.toggle( true );
	assert.ok( x.is( ":visible" ), "is visible" );
	x.toggle( false );
	assert.ok( x.is( ":hidden" ), "is hidden" );
	x.toggle( true );
	assert.ok( x.is( ":visible" ), "is visible again" );
} );

QUnit.test( "jQuery.fx.prototype.cur() - <1.8 Back Compat", function( assert ) {
	assert.expect( 7 );

>>>>>>> refs/remotes/jquery/master
	var div = jQuery( "<div></div>" ).appendTo( "#qunit-fixture" ).css( {
			color: "#ABC",
			border: "5px solid black",
			left: "auto",
			marginBottom: "-11000px"
		} )[ 0 ];

	assert.equal(
		( new jQuery.fx( div, {}, "color" ) ).cur(),
		jQuery.css( div, "color" ),
		"Return the same value as jQuery.css for complex properties (bug #7912)"
	);

	assert.strictEqual(
		( new jQuery.fx( div, {}, "borderLeftWidth" ) ).cur(),
		5,
		"Return simple values parsed as Float"
	);

	// backgroundPosition actually returns 0% 0% in most browser
	// this fakes a "" return
	// hook now gets called twice because Tween will grab the current
	// value as it is being newed
	jQuery.cssHooks.backgroundPosition = {
		get: function() {
			assert.ok( true, "hook used" );
			return "";
		}
	};

	assert.strictEqual(
		( new jQuery.fx( div, {}, "backgroundPosition" ) ).cur(),
		0,
		"Return 0 when jQuery.css returns an empty string"
	);

	delete jQuery.cssHooks.backgroundPosition;

	assert.strictEqual(
		( new jQuery.fx( div, {}, "left" ) ).cur(),
		0,
		"Return 0 when jQuery.css returns 'auto'"
	);

	assert.equal(
		( new jQuery.fx( div, {}, "marginBottom" ) ).cur(),
		-11000,
		"support negative values < -10000 (bug #7193)"
	);

	jQuery( div ).remove();
} );

<<<<<<< HEAD
QUnit.test( "Overflow and Display", function() {
	expect( 4 );
=======
QUnit.test( "Overflow and Display", function( assert ) {
	assert.expect( 4 );
>>>>>>> refs/remotes/jquery/master

	var
		testClass = jQuery.makeTest( "Overflow and Display" )
			.addClass( "overflow inline" ),
		testStyle = jQuery.makeTest( "Overflow and Display (inline style)" )
			.css( { overflow: "visible", display: "inline" } ),
		done = function() {
<<<<<<< HEAD
			equal( jQuery.css( this, "overflow" ), "visible", "Overflow should be 'visible'" );
			equal( jQuery.css( this, "display" ), "inline", "Display should be 'inline'" );
=======
			assert.equal( jQuery.css( this, "overflow" ), "visible", "Overflow should be 'visible'" );
			assert.equal( jQuery.css( this, "display" ), "inline", "Display should be 'inline'" );
>>>>>>> refs/remotes/jquery/master
		};

	testClass.add( testStyle )
		.addClass( "widewidth" )
		.text( "Some sample text." )
		.before( "text before" )
		.after( "text after" )
		.animate( { opacity: 0.5 }, "slow", done );
	this.clock.tick( 600 );
} );

jQuery.each( {
	"CSS Auto": function( elem, prop ) {
		jQuery( elem ).addClass( "auto" + prop )
			.text( "This is a long string of text." );
		return "";
	},
	"JS Auto": function( elem, prop ) {
		jQuery( elem ).css( prop, "" )
			.text( "This is a long string of text." );
		return "";
	},
	"CSS 100": function( elem, prop ) {
		jQuery( elem ).addClass( "large" + prop );
		return "";
	},
	"JS 100": function( elem, prop ) {
		jQuery( elem ).css( prop, prop === "opacity" ? 1 : "100px" );
		return prop === "opacity" ? 1 : 100;
	},
	"CSS 50": function( elem, prop ) {
		jQuery( elem ).addClass( "med" + prop );
		return "";
	},
	"JS 50": function( elem, prop ) {
		jQuery( elem ).css( prop, prop === "opacity" ? 0.50 : "50px" );
		return prop === "opacity" ? 0.5 : 50;
	},
	"CSS 0": function( elem, prop ) {
		jQuery( elem ).addClass( "no" + prop );
		return "";
	},
	"JS 0": function( elem, prop ) {
		jQuery( elem ).css( prop, prop === "opacity" ? 0 : "0px" );
		return 0;
	}
}, function( fn, f ) {
	jQuery.each( {
		"show": function( elem, prop ) {
			jQuery( elem ).hide().addClass( "wide" + prop );
			return "show";
		},
		"hide": function( elem, prop ) {
			jQuery( elem ).addClass( "wide" + prop );
			return "hide";
		},
		"100": function( elem, prop ) {
			jQuery( elem ).addClass( "wide" + prop );
			return prop === "opacity" ? 1 : 100;
		},
		"50": function( elem, prop ) {
			return prop === "opacity" ? 0.50 : 50;
		},
		"0": function( elem ) {
			jQuery( elem ).addClass( "noback" );
			return 0;
		}
	}, function( tn, t ) {
<<<<<<< HEAD
		QUnit.test( fn + " to " + tn, function() {
=======
		QUnit.test( fn + " to " + tn, function( assert ) {
>>>>>>> refs/remotes/jquery/master
			var num, anim,
				elem = jQuery.makeTest( fn + " to " + tn ),
				t_w = t( elem, "width" ),
				f_w = f( elem, "width" ),
				t_h = t( elem, "height" ),
				f_h = f( elem, "height" ),
				t_o = t( elem, "opacity" ),
				f_o = f( elem, "opacity" );

			if ( f_o === "" ) {
				f_o = 1;
			}

			num = 0;
<<<<<<< HEAD

			// TODO: uncrowd this
			if ( t_h === "show" ) {num++;}
			if ( t_w === "show" ) {num++;}
			if ( t_w === "hide" || t_w === "show" ) {num++;}
			if ( t_h === "hide" || t_h === "show" ) {num++;}
			if ( t_o === "hide" || t_o === "show" ) {num++;}
			if ( t_w === "hide" ) {num++;}
			if ( t_o.constructor === Number ) {num += 2;}
			if ( t_w.constructor === Number ) {num += 2;}
			if ( t_h.constructor === Number ) {num += 2;}

			expect( num );

			anim = { width: t_w, height: t_h, opacity: t_o };

			elem.animate( anim, 50 );

			jQuery.when( elem ).done( function( elem ) {
				var cur_o, cur_w, cur_h, old_h;
=======

			// TODO: uncrowd this
			if ( t_h === "show" ) { num++; }
			if ( t_w === "show" ) { num++; }
			if ( t_w === "hide" || t_w === "show" ) { num++; }
			if ( t_h === "hide" || t_h === "show" ) { num++; }
			if ( t_o === "hide" || t_o === "show" ) { num++; }
			if ( t_w === "hide" ) { num++; }
			if ( t_o.constructor === Number ) { num += 2; }
			if ( t_w.constructor === Number ) { num += 2; }
			if ( t_h.constructor === Number ) { num += 2; }

			assert.expect( num );

			anim = { width: t_w, height: t_h, opacity: t_o };

			elem.animate( anim, 50 );
>>>>>>> refs/remotes/jquery/master

			jQuery.when( elem ).done( function( $elem ) {
				var cur_o, cur_w, cur_h, old_h,
					elem = $elem[ 0 ];

				if ( t_w === "show" ) {
<<<<<<< HEAD
					equal( elem.style.display, "block", "Showing, display should block: " + elem.style.display );
				}

				if ( t_w === "hide" || t_w === "show" ) {
					ok( f_w === "" ? elem.style.width === f_w : elem.style.width.indexOf( f_w ) === 0, "Width must be reset to " + f_w + ": " + elem.style.width );
				}

				if ( t_h === "hide" || t_h === "show" ) {
					ok( f_h === "" ? elem.style.height === f_h : elem.style.height.indexOf( f_h ) === 0, "Height must be reset to " + f_h + ": " + elem.style.height );
=======
					assert.equal( $elem.css( "display" ), "block",
						"Showing, display should block: " + elem.style.display );
				}

				if ( t_w === "hide" || t_w === "show" ) {
					assert.ok( f_w === "" ? elem.style.width === f_w : elem.style.width.indexOf( f_w ) === 0, "Width must be reset to " + f_w + ": " + elem.style.width );
				}

				if ( t_h === "hide" || t_h === "show" ) {
					assert.ok( f_h === "" ? elem.style.height === f_h : elem.style.height.indexOf( f_h ) === 0, "Height must be reset to " + f_h + ": " + elem.style.height );
>>>>>>> refs/remotes/jquery/master
				}

				cur_o = jQuery.style( elem, "opacity" );

				if ( f_o !== jQuery.css( elem, "opacity" ) ) {
					f_o = f( elem, "opacity" );
				}

<<<<<<< HEAD
				// The only time an _empty_string_ will be matched is in IE
				// otherwise, the correct values will be tested as usual
				if ( f_o === "" ) {
					f_o = 1;
				}

				// See above
				if ( cur_o === "" ) {
					cur_o = 1;
				}

				if ( t_o === "hide" || t_o === "show" ) {
					equal( cur_o, f_o, "Opacity must be reset to " + f_o + ": " + cur_o );
				}

				if ( t_w === "hide" ) {
					equal( elem.style.display, "none", "Hiding, display should be none: " + elem.style.display );
				}

				if ( t_o.constructor === Number ) {
					equal( cur_o, t_o, "Final opacity should be " + t_o + ": " + cur_o );

					ok( jQuery.css( elem, "opacity" ) !== "" || cur_o === t_o, "Opacity should be explicitly set to " + t_o + ", is instead: " + cur_o );
				}

				if ( t_w.constructor === Number ) {
					equal( elem.style.width, t_w + "px", "Final width should be " + t_w + ": " + elem.style.width );

					cur_w = jQuery.css( elem, "width" );

					ok( elem.style.width !== "" || cur_w === t_w, "Width should be explicitly set to " + t_w + ", is instead: " + cur_w );
				}

				if ( t_h.constructor === Number ) {
					equal( elem.style.height, t_h + "px", "Final height should be " + t_h + ": " + elem.style.height );

					cur_h = jQuery.css( elem, "height" );

					ok( elem.style.height !== "" || cur_h === t_h, "Height should be explicitly set to " + t_h + ", is instead: " + cur_h );
=======
				if ( t_o === "hide" || t_o === "show" ) {
					assert.equal( cur_o, f_o, "Opacity must be reset to " + f_o + ": " + cur_o );
				}

				if ( t_w === "hide" ) {
					assert.equal( elem.style.display, "none", "Hiding, display should be none: " + elem.style.display );
				}

				if ( t_o.constructor === Number ) {
					assert.equal( cur_o, t_o, "Final opacity should be " + t_o + ": " + cur_o );

					assert.ok( jQuery.css( elem, "opacity" ) !== "" || cur_o === t_o, "Opacity should be explicitly set to " + t_o + ", is instead: " + cur_o );
				}

				if ( t_w.constructor === Number ) {
					assert.equal( elem.style.width, t_w + "px", "Final width should be " + t_w + ": " + elem.style.width );

					cur_w = jQuery.css( elem, "width" );

					assert.ok( elem.style.width !== "" || cur_w === t_w, "Width should be explicitly set to " + t_w + ", is instead: " + cur_w );
				}

				if ( t_h.constructor === Number ) {
					assert.equal( elem.style.height, t_h + "px", "Final height should be " + t_h + ": " + elem.style.height );

					cur_h = jQuery.css( elem, "height" );

					assert.ok( elem.style.height !== "" || cur_h === t_h, "Height should be explicitly set to " + t_h + ", is instead: " + cur_h );
>>>>>>> refs/remotes/jquery/master
				}

				if ( t_h === "show" ) {
					old_h = jQuery.css( elem, "height" );
					jQuery( elem ).append( "<br/>Some more text<br/>and some more..." );

					if ( /Auto/.test( fn ) ) {
						assert.notEqual( jQuery.css( elem, "height" ), old_h, "Make sure height is auto." );
					} else {
						assert.equal( jQuery.css( elem, "height" ), old_h, "Make sure height is not auto." );
					}
				}

				// manually remove generated element
				jQuery( elem ).remove();

			} );
<<<<<<< HEAD
			this.clock.tick( 50 );
=======
			this.clock.tick( 100 );
>>>>>>> refs/remotes/jquery/master
		} );
	} );
} );

<<<<<<< HEAD
QUnit.test( "Effects chaining", function() {
	var remaining = 16,
		shrinkwrap = jQuery.support.shrinkWrapBlocks(),
=======
QUnit.test( "Effects chaining", function( assert ) {
	var remaining = 16,
>>>>>>> refs/remotes/jquery/master
		props = [ "opacity", "height", "width", "display", "overflow" ],
		setup = function( name, selector ) {
			var $el = jQuery( selector );
			return $el.data( getProps( $el[ 0 ] ) ).data( "name", name );
		},
		check = function() {
			var data = jQuery.data( this ),
				name = data.name;
			delete data.name;

			assert.deepEqual( getProps( this ), data, name );

			jQuery.removeData( this );
		},
		getProps = function( el ) {
			var obj = {};
			jQuery.each( props, function( i, prop ) {
<<<<<<< HEAD
				obj[ prop ] = prop === "overflow" && hiddenOverflow ? "hidden" : el.style[ prop ] || jQuery.css( el, prop );
=======
				obj[ prop ] = prop === "overflow" && el.style[ prop ] || jQuery.css( el, prop );
>>>>>>> refs/remotes/jquery/master
			} );
			return obj;
		};

<<<<<<< HEAD
	expect( remaining );

	// We need to pass jQuery.support.shrinkWrapBlocks for all methods that
	// set overflow hidden (slide* and show/hide with speed)
	setup( ".fadeOut().fadeIn()", "#fadein div" ).fadeOut( "fast" ).fadeIn( "fast", assert );
	setup( ".fadeIn().fadeOut()", "#fadeout div" ).fadeIn( "fast" ).fadeOut( "fast", assert );
	setup( ".hide().show()", "#show div",  shrinkwrap ).hide("fast").show( "fast", assert );
	setup( ".show().hide()", "#hide div",  shrinkwrap ).show("fast").hide( "fast", assert );
	setup( ".show().hide(easing)", "#easehide div", shrinkwrap ).show("fast").hide( "fast", "linear", assert );
	setup( ".toggle().toggle() - in", "#togglein div", shrinkwrap ).toggle("fast").toggle( "fast", assert );
	setup( ".toggle().toggle() - out", "#toggleout div", shrinkwrap ).toggle("fast").toggle( "fast", assert );
	setup( ".toggle().toggle(easing) - out", "#easetoggleout div", shrinkwrap ).toggle("fast").toggle( "fast", "linear", assert );
	setup( ".slideDown().slideUp()", "#slidedown div", shrinkwrap ).slideDown("fast").slideUp( "fast", assert );
	setup( ".slideUp().slideDown()", "#slideup div", shrinkwrap ).slideUp("fast").slideDown( "fast", assert );
	setup( ".slideUp().slideDown(easing)", "#easeslideup div", shrinkwrap ).slideUp("fast").slideDown( "fast", "linear", assert );
	setup( ".slideToggle().slideToggle() - in", "#slidetogglein div", shrinkwrap ).slideToggle("fast").slideToggle( "fast", assert );
	setup( ".slideToggle().slideToggle() - out", "#slidetoggleout div", shrinkwrap ).slideToggle("fast").slideToggle( "fast", assert );
	setup( ".fadeToggle().fadeToggle() - in", "#fadetogglein div" ).fadeToggle( "fast" ).fadeToggle( "fast", assert );
	setup( ".fadeToggle().fadeToggle() - out", "#fadetoggleout div" ).fadeToggle( "fast" ).fadeToggle( "fast", assert );
	setup( ".fadeTo(0.5).fadeTo(1.0, easing)", "#fadeto div" ).fadeTo( "fast", 0.5 ).fadeTo( "fast", 1.0, "linear", assert );
	this.clock.tick( 400 );
} );

jQuery.makeTest = function( text ) {
	var elem = jQuery( "<div></div>" )
		.attr( "id", "test" + jQuery.makeTest.id++ )
		.addClass( "box" );

	jQuery( "<h4></h4>" )
		.text( text )
		.appendTo( "#fx-tests" )
		.after( elem );

	return elem;
=======
	assert.expect( remaining );

	setup( ".fadeOut().fadeIn()", "#fadein div" ).fadeOut( "fast" ).fadeIn( "fast", check );
	setup( ".fadeIn().fadeOut()", "#fadeout div" ).fadeIn( "fast" ).fadeOut( "fast", check );
	setup( ".hide().show()", "#show div" ).hide( "fast" ).show( "fast", check );
	setup( ".show().hide()", "#hide div" ).show( "fast" ).hide( "fast", check );
	setup( ".show().hide(easing)", "#easehide div" ).show( "fast" ).hide( "fast", "linear", check );
	setup( ".toggle().toggle() - in", "#togglein div" ).toggle( "fast" ).toggle( "fast", check );
	setup( ".toggle().toggle() - out", "#toggleout div" ).toggle( "fast" ).toggle( "fast", check );
	setup( ".toggle().toggle(easing) - out", "#easetoggleout div" ).toggle( "fast" ).toggle( "fast", "linear", check );
	setup( ".slideDown().slideUp()", "#slidedown div" ).slideDown( "fast" ).slideUp( "fast", check );
	setup( ".slideUp().slideDown()", "#slideup div" ).slideUp( "fast" ).slideDown( "fast", check );
	setup( ".slideUp().slideDown(easing)", "#easeslideup div" ).slideUp( "fast" ).slideDown( "fast", "linear", check );
	setup( ".slideToggle().slideToggle() - in", "#slidetogglein div" ).slideToggle( "fast" ).slideToggle( "fast", check );
	setup( ".slideToggle().slideToggle() - out", "#slidetoggleout div" ).slideToggle( "fast" ).slideToggle( "fast", check );
	setup( ".fadeToggle().fadeToggle() - in", "#fadetogglein div" ).fadeToggle( "fast" ).fadeToggle( "fast", check );
	setup( ".fadeToggle().fadeToggle() - out", "#fadetoggleout div" ).fadeToggle( "fast" ).fadeToggle( "fast", check );
	setup( ".fadeTo(0.5).fadeTo(1.0, easing)", "#fadeto div" ).fadeTo( "fast", 0.5 ).fadeTo( "fast", 1.0, "linear", check );

    this.clock.tick( 400 );
} );

jQuery.makeTest = function( text ) {
        var elem = jQuery( "<div></div>" )
                .attr( "id", "test" + jQuery.makeTest.id++ )
                .addClass( "box" );

        jQuery( "<h4></h4>" )
                .text( text )
                .appendTo( "#fx-tests" )
                .after( elem );

        return elem;
>>>>>>> refs/remotes/jquery/master
};

jQuery.makeTest.id = 1;

<<<<<<< HEAD
QUnit.test( "jQuery.show('fast') doesn't clear radio buttons (bug #1095)", function() {
	expect( 4 );

	var $checkedtest = jQuery( "#checkedtest" );
	$checkedtest.hide().show( "fast", function() {
		ok( jQuery( "input[type='radio']", $checkedtest ).first().attr( "checked" ), "Check first radio still checked." );
		ok( !jQuery( "input[type='radio']", $checkedtest ).last().attr( "checked" ), "Check last radio still NOT checked." );
		ok( jQuery( "input[type='checkbox']", $checkedtest ).first().attr( "checked" ), "Check first checkbox still checked." );
		ok( !jQuery( "input[type='checkbox']", $checkedtest ).last().attr( "checked" ), "Check last checkbox still NOT checked." );
	} );
	this.clock.tick( 200 );
} );

QUnit.test( "interrupt toggle", function() {
	expect( 24 );
=======
QUnit.test( "jQuery.show('fast') doesn't clear radio buttons (bug #1095)", function( assert ) {
	assert.expect( 4 );

	var $checkedtest = jQuery( "#checkedtest" );
	$checkedtest.hide().show( "fast", function() {
		assert.ok( jQuery( "input[type='radio']", $checkedtest ).first().attr( "checked" ), "Check first radio still checked." );
		assert.ok( !jQuery( "input[type='radio']", $checkedtest ).last().attr( "checked" ), "Check last radio still NOT checked." );
		assert.ok( jQuery( "input[type='checkbox']", $checkedtest ).first().attr( "checked" ), "Check first checkbox still checked." );
		assert.ok( !jQuery( "input[type='checkbox']", $checkedtest ).last().attr( "checked" ), "Check last checkbox still NOT checked." );
	} );
	this.clock.tick( 200 );
} );

QUnit.test( "interrupt toggle", function( assert ) {
	assert.expect( 24 );
>>>>>>> refs/remotes/jquery/master

	var env = this,
		longDuration = 2000,
		shortDuration = 500,
		remaining = 0,
		$elems = jQuery( ".chain-test" ),
		clock = this.clock,
		finish = function() {
		};

	jQuery.each( { slideToggle: "height", fadeToggle: "opacity", toggle: "width" }, function( method, prop ) {
		var $methodElems = $elems.filter( "[id^='" + method.toLowerCase() + "']" ).each( function() {

			// Don't end test until we're done with this element
			remaining++;

			// Save original property value for comparison
			jQuery.data( this, "startVal", jQuery( this ).css( prop ) );

			// Expect olddisplay data from our .hide() call below
<<<<<<< HEAD
			QUnit.expectJqData( env, this, "olddisplay" );
=======
			assert.expectJqData( env, this, "olddisplay" );
>>>>>>> refs/remotes/jquery/master
		} );

		// Interrupt a hiding toggle
		$methodElems[ method ]( longDuration );
		setTimeout( function() {
			$methodElems.stop().each( function() {
<<<<<<< HEAD
				notEqual( jQuery( this ).css( prop ), jQuery.data( this, "startVal" ), ".stop() before completion of hiding ." + method + "() - #" + this.id );
=======
				assert.notEqual( jQuery( this ).css( prop ), jQuery.data( this, "startVal" ), ".stop() before completion of hiding ." + method + "() - #" + this.id );
>>>>>>> refs/remotes/jquery/master
			} );

			// Restore
			$methodElems[ method ]( shortDuration, function() {
				var id = this.id,
					$elem = jQuery( this ),
					startVal = $elem.data( "startVal" );

				$elem.removeData( "startVal" );

				assert.equal( $elem.css( prop ), startVal, "original value restored by ." + method + "() - #" + id );

				// Interrupt a showing toggle
				$elem.hide()[ method ]( longDuration );
				setTimeout( function() {
					$elem.stop();
					assert.notEqual( $elem.css( prop ), startVal, ".stop() before completion of showing ." + method + "() - #" + id );

					// Restore
					$elem[ method ]( shortDuration, function() {
						assert.equal( $elem.css( prop ), startVal, "original value restored by ." + method + "() - #" + id );
						finish();
					} );
				}, shortDuration );
			} );
		}, shortDuration );
	} );
	clock.tick( longDuration );

	// FIXME untangle the set timeouts
} );

<<<<<<< HEAD
QUnit.test( "animate with per-property easing", function() {

	expect( 5 );
=======
QUnit.test( "animate with per-property easing", function( assert ) {

	assert.expect( 5 );
>>>>>>> refs/remotes/jquery/master

	var data = { a: 0, b: 0, c: 0 },
		test1Called = false,
		test2Called = false,
		defaultTestCalled = false,
		props = {
			a: [ 100, "_test1" ],
			b: [ 100, "_test2" ],
			c: 100
		};

	jQuery.easing._test1 = function( p ) {
		test1Called = true;
		return p;
	};

	jQuery.easing._test2 = function( p ) {
		test2Called = true;
		return p;
	};

	jQuery.easing._defaultTest = function( p ) {
		defaultTestCalled = true;
		return p;
	};

	jQuery( data ).animate( props, 400, "_defaultTest", function() {
<<<<<<< HEAD
		ok( test1Called, "Easing function (_test1) called" );
		ok( test2Called, "Easing function (_test2) called" );
		ok( defaultTestCalled, "Easing function (_default) called" );
		equal( props.a[ 1 ], "_test1", "animate does not change original props (per-property easing would be lost)" );
		equal( props.b[ 1 ], "_test2", "animate does not change original props (per-property easing would be lost)" );
=======
		assert.ok( test1Called, "Easing function (_test1) called" );
		assert.ok( test2Called, "Easing function (_test2) called" );
		assert.ok( defaultTestCalled, "Easing function (_default) called" );
		assert.equal( props.a[ 1 ], "_test1", "animate does not change original props (per-property easing would be lost)" );
		assert.equal( props.b[ 1 ], "_test2", "animate does not change original props (per-property easing would be lost)" );
>>>>>>> refs/remotes/jquery/master
	} );

	this.clock.tick( 400 );
} );

<<<<<<< HEAD
QUnit.test( "animate with CSS shorthand properties", function() {
	expect( 11 );
=======
QUnit.test( "animate with CSS shorthand properties", function( assert ) {
	assert.expect( 11 );
>>>>>>> refs/remotes/jquery/master

	var easeAnimation_count = 0,
		easeProperty_count = 0,
		propsBasic = { "padding": "10 20 30" },
		propsSpecial = { "padding": [ "1 2 3", "propertyScope" ] };

	jQuery.easing.animationScope = function( p ) {
		if ( p >= 1 ) {
			easeAnimation_count++;
		}
		return p;
	};

	jQuery.easing.propertyScope = function( p ) {
		if ( p >= 1 ) {
			easeProperty_count++;
		}
		return p;
	};

	jQuery( "#foo" )
		.animate( propsBasic, 200, "animationScope", function() {
<<<<<<< HEAD
			equal( this.style.paddingTop, "10px", "padding-top was animated" );
			equal( this.style.paddingLeft, "20px", "padding-left was animated" );
			equal( this.style.paddingRight, "20px", "padding-right was animated" );
			equal( this.style.paddingBottom, "30px", "padding-bottom was animated" );
			equal( easeAnimation_count, 4, "per-animation default easing called for each property" );
			easeAnimation_count = 0;
		} )
		.animate( propsSpecial, 200, "animationScope", function() {
			equal( this.style.paddingTop, "1px", "padding-top was animated again" );
			equal( this.style.paddingLeft, "2px", "padding-left was animated again" );
			equal( this.style.paddingRight, "2px", "padding-right was animated again" );
			equal( this.style.paddingBottom, "3px", "padding-bottom was animated again" );
			equal( easeAnimation_count, 0, "per-animation default easing not called" );
			equal( easeProperty_count, 4, "special easing called for each property" );

			jQuery( this ).css( "padding", "0" );
			delete jQuery.easing.animationScope;
			delete jQuery.easing.propertyScope;
		} );
		this.clock.tick( 400 );
} );

QUnit.test( "hide hidden elements, with animation (bug #7141)", function() {
	expect( 3 );

	var div = jQuery( "<div style='display:none'></div>" ).appendTo( "#qunit-fixture" );
	equal( div.css( "display" ), "none", "Element is hidden by default" );
	div.hide( 1, function() {
		ok( !jQuery._data( div, "olddisplay" ), "olddisplay is undefined after hiding an already-hidden element" );
		div.show( 1, function() {
			equal( div.css( "display" ), "block", "Show a double-hidden element" );
		} );
	} );
	this.clock.tick( 10 );
} );

QUnit.test( "animate unit-less properties (#4966)", 2, function() {
	var div = jQuery( "<div style='z-index: 0; position: absolute;'></div>" ).appendTo( "#qunit-fixture" );
	equal( div.css( "z-index" ), "0", "z-index is 0" );
	div.animate( { zIndex: 2 }, function() {
		equal( div.css( "z-index" ), "2", "z-index is 2" );
=======
			assert.equal( this.style.paddingTop, "10px", "padding-top was animated" );
			assert.equal( this.style.paddingLeft, "20px", "padding-left was animated" );
			assert.equal( this.style.paddingRight, "20px", "padding-right was animated" );
			assert.equal( this.style.paddingBottom, "30px", "padding-bottom was animated" );
			assert.equal( easeAnimation_count, 4, "per-animation default easing called for each property" );
			easeAnimation_count = 0;
		} )
		.animate( propsSpecial, 200, "animationScope", function() {
			assert.equal( this.style.paddingTop, "1px", "padding-top was animated again" );
			assert.equal( this.style.paddingLeft, "2px", "padding-left was animated again" );
			assert.equal( this.style.paddingRight, "2px", "padding-right was animated again" );
			assert.equal( this.style.paddingBottom, "3px", "padding-bottom was animated again" );
			assert.equal( easeAnimation_count, 0, "per-animation default easing not called" );
			assert.equal( easeProperty_count, 4, "special easing called for each property" );

			jQuery( this ).css( "padding", "0" );
			delete jQuery.easing.animationScope;
			delete jQuery.easing.propertyScope;
		} );
		this.clock.tick( 400 );
} );

QUnit.test( "hide hidden elements, with animation (bug #7141)", function( assert ) {
	assert.expect( 4 );

	var div = jQuery( "<div id='bug7141' style='display:none'/>" ).appendTo( "#qunit-fixture" );
	assert.equal( div.css( "display" ), "none", "Element is initially hidden" );
	div.hide( 10, function() {
		assert.equal( div.css( "display" ), "none", "Element is hidden in .hide() callback" );
		div.show( 11, function() {
			assert.equal( div.css( "display" ), "block", "Element is visible in .show() callback" );
		} );
	} );
	this.clock.tick( 50 );
	assert.equal( div.css( "display" ), "block", "Element is visible after animations" );
} );

QUnit.test( "animate unit-less properties (#4966)", function( assert ) {
	assert.expect( 2 );

	var div = jQuery( "<div style='z-index: 0; position: absolute;'></div>" ).appendTo( "#qunit-fixture" );
	assert.equal( div.css( "z-index" ), "0", "z-index is 0" );
	div.animate( { zIndex: 2 }, function() {
		assert.equal( div.css( "z-index" ), "2", "z-index is 2" );
>>>>>>> refs/remotes/jquery/master
	} );
	this.clock.tick( 400 );
} );

<<<<<<< HEAD
QUnit.test( "animate properties missing px w/ opacity as last (#9074)", 2, function() {
	expect( 6 );
=======
QUnit.test( "animate properties missing px w/ opacity as last (#9074)", function( assert ) {
	assert.expect( 6 );

>>>>>>> refs/remotes/jquery/master
	var ml, l,
		div = jQuery( "<div style='position: absolute; margin-left: 0; left: 0px;'></div>" )
		.appendTo( "#qunit-fixture" );
	function cssInt( prop ) {
		return parseInt( div.css( prop ), 10 );
	}
<<<<<<< HEAD
	equal( cssInt( "marginLeft" ), 0, "Margin left is 0" );
	equal( cssInt( "left" ), 0, "Left is 0" );
=======
	assert.equal( cssInt( "marginLeft" ), 0, "Margin left is 0" );
	assert.equal( cssInt( "left" ), 0, "Left is 0" );
>>>>>>> refs/remotes/jquery/master
	div.animate( {
		left: 200,
		marginLeft: 200,
		opacity: 0
	}, 2000 );

	this.clock.tick( 500 );
<<<<<<< HEAD

	ml = cssInt( "marginLeft" );
	l = cssInt( "left" );
	notEqual( ml, 0, "Margin left is not 0 after partial animate" );
	notEqual( ml, 200, "Margin left is not 200 after partial animate" );
	notEqual( l, 0, "Left is not 0 after partial animate" );
	notEqual( l, 200, "Left is not 200 after partial animate" );
	div.stop().remove();
} );

QUnit.test( "callbacks should fire in correct order (#9100)", function() {
	expect( 1 );

	var a = 1,
		cb = 0;

	jQuery( "<p data-operation='*2'></p><p data-operation='^2'></p>" )
		.appendTo( "#qunit-fixture" )

		// The test will always pass if no properties are animated or if the duration is 0
		.animate( { fontSize: 12 }, 13, function() {
			a *= jQuery( this ).data( "operation" ) === "*2" ? 2 : a;
			cb++;
			if ( cb === 2 ) {
				equal( a, 4, "test value has been *2 and _then_ ^2" );
			}
		} );
	this.clock.tick( 20 );
} );

QUnit.test( "callbacks that throw exceptions will be removed (#5684)", function() {
	expect( 2 );
=======

	ml = cssInt( "marginLeft" );
	l = cssInt( "left" );
	assert.notEqual( ml, 0, "Margin left is not 0 after partial animate" );
	assert.notEqual( ml, 200, "Margin left is not 200 after partial animate" );
	assert.notEqual( l, 0, "Left is not 0 after partial animate" );
	assert.notEqual( l, 200, "Left is not 200 after partial animate" );
	div.stop().remove();
} );

QUnit.test( "callbacks should fire in correct order (#9100)", function( assert ) {
	assert.expect( 1 );

	var a = 1,
		cb = 0;

	jQuery( "<p data-operation='*2'></p><p data-operation='^2'></p>" ).appendTo( "#qunit-fixture" )

		// The test will always pass if no properties are animated or if the duration is 0
		.animate( { fontSize: 12 }, 13, function() {
			a *= jQuery( this ).data( "operation" ) === "*2" ? 2 : a;
			cb++;
			if ( cb === 2 ) {
				assert.equal( a, 4, "test value has been *2 and _then_ ^2" );
			}
		} );
	this.clock.tick( 20 );
} );

QUnit.test( "callbacks that throw exceptions will be removed (#5684)", function( assert ) {
	assert.expect( 2 );
>>>>>>> refs/remotes/jquery/master

	var foo = jQuery( "#foo" );

	function TestException() {
	}

	foo.animate( { height: 1 }, 1, function() {
		throw new TestException();
	} );

	// this test thoroughly abuses undocumented methods - please feel free to update
	// with any changes internally to these functions.

	// make sure that the standard timer loop will NOT run.
	jQuery.fx.stop();

<<<<<<< HEAD
	this.clock.tick( 1 );
	throws( jQuery.fx.tick, TestException, "Exception was thrown" );
=======
        this.clock.tick( 1 );
	assert.throws( jQuery.fx.tick, TestException, "Exception was thrown" );
>>>>>>> refs/remotes/jquery/master

	// the second call shouldn't
	jQuery.fx.tick();

<<<<<<< HEAD
	ok( true, "Test completed without throwing a second exception" );

} );

QUnit.test( "animate will scale margin properties individually", function() {
	expect( 2 );
=======
	assert.ok( true, "Test completed without throwing a second exception" );

} );

QUnit.test( "animate will scale margin properties individually", function( assert ) {
	assert.expect( 2 );
>>>>>>> refs/remotes/jquery/master

	var foo = jQuery( "#foo" ).css( {
		"margin": 0,
		"marginLeft": 100
	} );

	assert.ok( foo.css( "marginLeft" ) !== foo.css( "marginRight" ), "Sanity Check" );

	foo.animate( {
		"margin": 200
	} ).stop();

<<<<<<< HEAD
	ok( foo.css( "marginLeft" ) !== foo.css( "marginRight" ), "The margin properties are different" );
=======
	assert.ok( foo.css( "marginLeft" ) !== foo.css( "marginRight" ), "The margin properties are different" );
>>>>>>> refs/remotes/jquery/master

	// clean up for next test
	foo.css( {
		"marginLeft": "",
		"marginRight": "",
		"marginTop": "",
		"marginBottom": ""
	} );
} );

<<<<<<< HEAD
QUnit.test( "Do not append px to 'fill-opacity' #9548", 1, function() {
	var $div = jQuery( "<div>" ).appendTo( "#qunit-fixture" );

	$div.css( "fill-opacity", 0 ).animate( { "fill-opacity": 1.0 }, 0, function() {

		// Support: Android 2.3 (no support for fill-opacity)
		if ( jQuery( this ).css( "fill-opacity" ) ) {
			equal( jQuery( this ).css( "fill-opacity" ), 1, "Do not append px to 'fill-opacity'" );
		} else {
			ok( true, "No support for fill-opacity CSS property" );
		}
=======
QUnit.test( "Do not append px to 'fill-opacity' #9548", function( assert ) {
	assert.expect( 1 );

	var $div = jQuery( "<div>" ).appendTo( "#qunit-fixture" );

	$div.css( "fill-opacity", 0 ).animate( { "fill-opacity": 1.0 }, 0, function() {
		assert.equal( jQuery( this ).css( "fill-opacity" ), 1, "Do not append px to 'fill-opacity'" );
>>>>>>> refs/remotes/jquery/master
		$div.remove();
	} );
} );

<<<<<<< HEAD
QUnit.test( "line-height animates correctly (#13855)", 12, function() {
=======
QUnit.test( "line-height animates correctly (#13855)", function( assert ) {
	assert.expect( 12 );

>>>>>>> refs/remotes/jquery/master
	var t0,
		clock = this.clock,
		longDuration = 2000,
		shortDuration = 500,
		animated = jQuery(
			"<p style='line-height: 100;'>unitless</p>" +
			"<p style='line-height: 5000px;'>px</p>" +
			"<p style='line-height: 5000%;'>percent</p>" +
			"<p style='line-height: 100em;'>em</p>"
		).appendTo( "#qunit-fixture" ),
		initialHeight = jQuery.map( animated, function( el ) {
			return jQuery( el ).height();
		} ),
		tolerance = 1.5;

	// Delay start to improve test stability
	setTimeout( function() {

		t0 = +( new Date() );
		animated.animate( { "line-height": "hide" }, longDuration, "linear" );

		setTimeout( function() {
			var progress = ( ( new Date() ) - t0 ) / longDuration;

			animated.each( function( i ) {
				var label = jQuery.text( this ),
					initial = initialHeight[ i ],
					height = jQuery( this ).height(),
					lower = initial * ( 1 - progress ) / tolerance;
<<<<<<< HEAD
				ok( height < initial, "hide " + label + ": upper bound; " +
					height + " < " + initial + " @ " + ( progress * 100 ) + "%" );
				ok( height > lower, "hide " + label + ": lower bound; "  +
=======
				assert.ok( height < initial, "hide " + label + ": upper bound; " +
					height + " < " + initial + " @ " + ( progress * 100 ) + "%" );
				assert.ok( height > lower, "hide " + label + ": lower bound; "  +
>>>>>>> refs/remotes/jquery/master
					height + " > " + lower + " @ " + ( progress * 100 ) + "%" );
			} );

			t0 = +( new Date() );
			animated.stop( true, true ).hide()
					.animate( { "line-height": "show" }, longDuration, "linear" );

			setTimeout( function() {
				var progress = ( ( new Date() ) - t0 ) / longDuration;

				animated.each( function( i ) {
					var label = jQuery.text( this ),
						initial = initialHeight[ i ],
						height = jQuery( this ).height(),
						upper = initial * progress * tolerance;
<<<<<<< HEAD
					ok( height < upper, "show " + label + ": upper bound; " +
=======
					assert.ok( height < upper, "show " + label + ": upper bound; " +
>>>>>>> refs/remotes/jquery/master
						height + " < " + upper + " @ " + ( progress * 100 ) + "%" );
				} );

				animated.stop( true, true );
			}, shortDuration );
clock.tick( shortDuration );
		}, shortDuration );
clock.tick( shortDuration );
	}, 50 );
clock.tick( 50 );
} );

// Start 1.8 Animation tests
<<<<<<< HEAD
QUnit.test( "jQuery.Animation( object, props, opts )", 4, function() {
=======
QUnit.test( "jQuery.Animation( object, props, opts )", function( assert ) {
	assert.expect( 4 );

>>>>>>> refs/remotes/jquery/master
	var animation,
		testObject = {
			"foo": 0,
			"bar": 1,
			"width": 100
		},
		testDest = {
			"foo": 1,
			"bar": 0,
			"width": 200
		};

	animation = jQuery.Animation( testObject, testDest, { "duration": 1 } );
	animation.done( function() {
		for ( var prop in testDest ) {
			assert.equal( testObject[ prop ], testDest[ prop ], "Animated: " + prop );
		}
		animation.done( function() {
<<<<<<< HEAD
			deepEqual( testObject, testDest, "No unexpected properties" );
=======
			assert.deepEqual( testObject, testDest, "No unexpected properties" );
>>>>>>> refs/remotes/jquery/master
		} );
	} );
	this.clock.tick( 10 );
} );
<<<<<<< HEAD

QUnit.test( "Animate Option: step: function( percent, tween )", 1, function() {
=======

QUnit.test( "Animate Option: step: function( percent, tween )", function( assert ) {
	assert.expect( 1 );

>>>>>>> refs/remotes/jquery/master
	var counter = {};
	jQuery( "#foo" ).animate( {
		prop1: 1,
		prop2: 2,
		prop3: 3
	}, {
		duration: 1,
		step: function( value, tween ) {
			var calls = counter[ tween.prop ] = counter[ tween.prop ] || [];

			// in case this is called multiple times for either, lets store it in
			// 0 or 1 in the array
			calls[ value === 0 ? 0 : 1 ] = value;
		}
	} ).queue( function( next ) {
<<<<<<< HEAD
		deepEqual( counter, {
=======
		assert.deepEqual( counter, {
>>>>>>> refs/remotes/jquery/master
			prop1: [ 0, 1 ],
			prop2: [ 0, 2 ],
			prop3: [ 0, 3 ]
		}, "Step function was called once at 0% and once at 100% for each property" );
		next();
	} );
	this.clock.tick( 10 );
} );
<<<<<<< HEAD

QUnit.test( "Animate callbacks have correct context", 2, function() {
=======

QUnit.test( "Animate callbacks have correct context", function( assert ) {
	assert.expect( 2 );

>>>>>>> refs/remotes/jquery/master
	var foo = jQuery( "#foo" );
	foo.animate( {
		height: 10
	}, 10, function() {
<<<<<<< HEAD
		equal( foo[ 0 ], this, "Complete callback after stop(true) `this` is element" );
=======
		assert.equal( foo[ 0 ], this, "Complete callback after stop(true) `this` is element" );
>>>>>>> refs/remotes/jquery/master
	} ).stop( true, true );
	foo.animate( {
		height: 100
	}, 10, function() {
<<<<<<< HEAD
		equal( foo[ 0 ], this, "Complete callback `this` is element" );
	} );
	this.clock.tick( 10 );
} );

QUnit.test( "User supplied callback called after show when fx off (#8892)", 2, function() {
=======
		assert.equal( foo[ 0 ], this, "Complete callback `this` is element" );
	} );
	this.clock.tick( 10 );
} );

QUnit.test( "User supplied callback called after show when fx off (#8892)", function( assert ) {
	assert.expect( 2 );

>>>>>>> refs/remotes/jquery/master
	var foo = jQuery( "#foo" );
	jQuery.fx.off = true;
	foo.hide();
	foo.fadeIn( 500, function() {
		assert.ok( supportjQuery( this ).is( ":visible" ), "Element is visible in callback" );
		foo.fadeOut( 500, function() {
			assert.ok( supportjQuery( this ).is( ":hidden" ), "Element is hidden in callback" );
			jQuery.fx.off = false;
		} );
	} );
	this.clock.tick( 1000 );
} );

<<<<<<< HEAD
QUnit.test( "animate should set display for disconnected nodes", function() {
	expect( 18 );

	var env = this,
		methods = {
			toggle: [ 1 ],
			slideToggle: [],
=======
QUnit.test( "animate should set display for disconnected nodes", function( assert ) {
	assert.expect( 20 );

	var env = this,
		showMethods = {
>>>>>>> refs/remotes/jquery/master
			fadeIn: [],
			fadeTo: [ "fast", 0.5 ],
			slideDown: [ "fast" ],
			show: [ 1 ],
			animate: [ { width: "show" } ]
		},
<<<<<<< HEAD
		$divTest = jQuery( "<div>test</div>" ),

		// parentNode = null
		$divEmpty = jQuery( "<div/>" ),
		$divNone = jQuery( "<div style='display: none;'/>" ),
		$divInline = jQuery( "<div style='display: inline;'/>" ),
		clock = this.clock;

	strictEqual( $divTest.show()[ 0 ].style.display, "block", "set display with show() for element with parentNode = document fragment" );
	strictEqual( $divEmpty.show()[ 0 ].style.display, "block", "set display with show() for element with parentNode = null" );
	strictEqual( $divNone.show()[ 0 ].style.display, "block", "show() should change display if it already set to none" );
	strictEqual( $divInline.show()[ 0 ].style.display, "inline", "show() should not change display if it already set" );

	QUnit.expectJqData( env, $divTest[ 0 ], "olddisplay" );
	QUnit.expectJqData( env, $divEmpty[ 0 ], "olddisplay" );
	QUnit.expectJqData( env, $divNone[ 0 ], "olddisplay" );

	jQuery.each( methods, function( name, opt ) {
		jQuery.each( [

			// parentNode = document fragment
			jQuery( "<div>test</div>" ),

			// parentNode = null
			jQuery( "<div/>" )

		], function() {
			var callback = [ function() {
					strictEqual( this.style.display, "block", "set display to block with " + name );

					QUnit.expectJqData( env, this, "olddisplay" );

			} ];
			jQuery.fn[ name ].apply( this, opt.concat( callback ) );
		} );
	} );
	clock.tick( 400 );
} );

QUnit.test( "Animation callback should not show animated element as :animated (#7157)", 1, function() {
=======
		toggleMethods = {
			toggle: [ 1 ],
			slideToggle: []
		},
		$divEmpty = jQuery( "<div/>" ),
		$divTest = jQuery( "<div>test</div>" ),
		$divNone = jQuery( "<div style='display: none;'/>" ),
		$divInline = jQuery( "<div style='display: inline;'/>" ),
		nullParentDisplay = $divEmpty.css( "display" ),
		underFragmentDisplay = $divTest.css( "display" ),
		clock = this.clock;

	assert.strictEqual( $divEmpty[ 0 ].parentNode, null, "Setup: element with null parentNode" );
	assert.strictEqual( ( $divTest[ 0 ].parentNode || {} ).nodeType, 11, "Setup: element under fragment" );

	assert.strictEqual( $divEmpty.show()[ 0 ].style.display, "",
		"set display with show() for element with null parentNode" );
	assert.strictEqual( $divTest.show()[ 0 ].style.display, "",
		"set display with show() for element under fragment" );
	assert.strictEqual( $divNone.show()[ 0 ].style.display, "",
		"show() should change display if it already set to none" );
	assert.strictEqual( $divInline.show()[ 0 ].style.display, "inline",
		"show() should not change display if it already set" );

	assert.expectJqData( env, $divNone[ 0 ], "olddisplay" );

	jQuery.each( showMethods, function( name, opt ) {
		jQuery.fn[ name ].apply( jQuery( "<div/>" ), opt.concat( [ function() {
			assert.strictEqual( jQuery( this ).css( "display" ), nullParentDisplay,
				"." + name + " block with null parentNode" );
		} ] ) );

		jQuery.fn[ name ].apply( jQuery( "<div>test</div>" ), opt.concat( [ function() {
			assert.strictEqual( jQuery( this ).css( "display" ), underFragmentDisplay,
				"." + name + " block under fragment" );
		} ] ) );
	} );
	jQuery.each( toggleMethods, function( name, opt ) {
		jQuery.fn[ name ].apply( jQuery( "<div/>" ), opt.concat( [ function() {
			assert.strictEqual( jQuery( this ).css( "display" ), "none",
				"." + name + " block with null parentNode" );
		} ] ) );

		jQuery.fn[ name ].apply( jQuery( "<div>test</div>" ), opt.concat( [ function() {
			assert.strictEqual( jQuery( this ).css( "display" ), "none",
				"." + name + " block under fragment" );
		} ] ) );
	} );
	clock.tick( 400 );
} );

QUnit[ jQuery.find.compile ? "test" : "skip" ]( "Animation callback should not show animated element as :animated (#7157)", function( assert ) {
	assert.expect( 1 );

	var foo = jQuery( "#foo" );

	foo.animate( {
		opacity: 0
	}, 100, function() {
		assert.ok( !foo.is( ":animated" ), "The element is not animated" );
	} );
	this.clock.tick( 100 );
} );

QUnit[ jQuery.find.compile ? "test" : "skip" ]( "Initial step callback should show element as :animated (#14623)", function( assert ) {
	assert.expect( 1 );

>>>>>>> refs/remotes/jquery/master
	var foo = jQuery( "#foo" );

	foo.animate( {
		opacity: 0
<<<<<<< HEAD
	}, 100, function() {
		ok( !foo.is( ":animated" ), "The element is not animated" );
	} );
	this.clock.tick( 100 );
} );

QUnit.test( "Initial step callback should show element as :animated (#14623)", 1, function() {
	var foo = jQuery( "#foo" );

	foo.animate( {
		opacity: 0
	}, {
		duration: 100,
		step: function() {
			ok( foo.is( ":animated" ), "The element matches :animated inside step function" );
		}
	} );
	this.clock.tick( 1 );
	foo.stop();
} );

QUnit.test( "hide called on element within hidden parent should set display to none (#10045)", 3, function() {
=======
	}, {
		duration: 100,
		step: function() {
			assert.ok( foo.is( ":animated" ), "The element matches :animated inside step function" );
		}
	} );
	this.clock.tick( 1 );
	foo.stop();
} );

QUnit.test( "hide called on element within hidden parent should set display to none (#10045)", function( assert ) {
	assert.expect( 3 );

>>>>>>> refs/remotes/jquery/master
	var hidden = jQuery( ".hidden" ),
		elems = jQuery( "<div>hide</div><div>hide0</div><div>hide1</div>" );

	hidden.append( elems );

	jQuery.when(
		elems.eq( 0 ).hide(),
		elems.eq( 1 ).hide( 0 ),
		elems.eq( 2 ).hide( 1 )
	).done( function() {
<<<<<<< HEAD
		strictEqual( elems.get( 0 ).style.display, "none", "hide() called on element within hidden parent should set display to none" );
		strictEqual( elems.get( 1 ).style.display, "none", "hide( 0 ) called on element within hidden parent should set display to none" );
		strictEqual( elems.get( 2 ).style.display, "none", "hide( 1 ) called on element within hidden parent should set display to none" );
=======
		assert.strictEqual( elems.get( 0 ).style.display, "none", "hide() called on element within hidden parent should set display to none" );
		assert.strictEqual( elems.get( 1 ).style.display, "none", "hide( 0 ) called on element within hidden parent should set display to none" );
		assert.strictEqual( elems.get( 2 ).style.display, "none", "hide( 1 ) called on element within hidden parent should set display to none" );
>>>>>>> refs/remotes/jquery/master

		elems.remove();
	} );
	this.clock.tick( 10 );
} );

<<<<<<< HEAD
QUnit.test( "hide, fadeOut and slideUp called on element width height and width = 0 should set display to none", 5, function() {
=======
QUnit.test( "hide, fadeOut and slideUp called on element width height and width = 0 should set display to none", function( assert ) {
	assert.expect( 5 );

>>>>>>> refs/remotes/jquery/master
	var foo = jQuery( "#foo" ),
		i = 0,
		elems = jQuery();

	for ( ; i < 5; i++ ) {
		elems = elems.add( "<div style='width:0;height:0;'></div>" );
	}

	foo.append( elems );

	jQuery.when(
		elems.eq( 0 ).hide(),
		elems.eq( 1 ).hide( jQuery.noop ),
		elems.eq( 2 ).hide( 1 ),
		elems.eq( 3 ).fadeOut(),
		elems.eq( 4 ).slideUp()
	).done( function() {
<<<<<<< HEAD
		strictEqual( elems.get( 0 ).style.display, "none", "hide() called on element width height and width = 0 should set display to none" );
		strictEqual( elems.get( 1 ).style.display, "none",
=======
		assert.strictEqual( elems.get( 0 ).style.display, "none", "hide() called on element width height and width = 0 should set display to none" );
		assert.strictEqual( elems.get( 1 ).style.display, "none",
>>>>>>> refs/remotes/jquery/master
												"hide( jQuery.noop ) called on element width height and width = 0 should set display to none" );
		assert.strictEqual( elems.get( 2 ).style.display, "none", "hide( 1 ) called on element width height and width = 0 should set display to none" );
		assert.strictEqual( elems.get( 3 ).style.display, "none", "fadeOut() called on element width height and width = 0 should set display to none" );
		assert.strictEqual( elems.get( 4 ).style.display, "none", "slideUp() called on element width height and width = 0 should set display to none" );

	} );
	this.clock.tick( 400 );
} );

<<<<<<< HEAD
QUnit.test( "hide should not leave hidden inline elements visible (#14848)", 2, function() {
	var el = jQuery( "#simon1" );

	el.hide( 1, function() {
		equal( el.css( "display" ), "none", "hidden" );
		el.hide( 1, function() {
			equal( el.css( "display" ), "none", "still hidden" );
=======
QUnit.test( "hide should not leave hidden inline elements visible (#14848)", function( assert ) {
	assert.expect( 2 );

	var el = jQuery( "#simon1" );

	el.hide( 1, function() {
		assert.equal( el.css( "display" ), "none", "hidden" );
		el.hide( 1, function() {
			assert.equal( el.css( "display" ), "none", "still hidden" );
>>>>>>> refs/remotes/jquery/master
		} );
	} );

	this.clock.tick( 100 );
} );

<<<<<<< HEAD
QUnit.test( "Handle queue:false promises", 10, function() {
=======
QUnit.test( "Handle queue:false promises", function( assert ) {
	assert.expect( 10 );

>>>>>>> refs/remotes/jquery/master
	var foo = jQuery( "#foo" ).clone().addBack(),
		step = 1;

	foo.animate( {
		top: 1
	}, {
		duration: 10,
		queue: false,
		complete: function() {
			assert.ok( step++ <= 2, "Step one or two" );
		}
	} ).animate( {
		bottom: 1
	}, {
		duration: 10,
		complete: function() {
			assert.ok( step > 2 && step < 5, "Step three or four" );
			step++;
		}
	} );

	this.clock.tick( 10 );

	foo.promise().done( function() {
<<<<<<< HEAD
		equal( step++, 5, "steps 1-5: queue:false then queue:fx done" );
=======
		assert.equal( step++, 5, "steps 1-5: queue:false then queue:fx done" );
>>>>>>> refs/remotes/jquery/master
		foo.animate( {
			top: 10
		}, {
			duration: 10,
			complete: function() {
				assert.ok( step > 5 && step < 8, "Step six or seven" );
				step++;
			}
		} ).animate( {
			bottom: 10
		}, {
			duration: 10,
			queue: false,
			complete: function() {
				assert.ok( step > 7 && step < 10, "Step eight or nine" );
				step++;
			}
		} ).promise().done( function() {
<<<<<<< HEAD
			equal( step++, 10, "steps 6-10: queue:fx then queue:false" );
=======
			assert.equal( step++, 10, "steps 6-10: queue:fx then queue:false" );
>>>>>>> refs/remotes/jquery/master
		} );

	} );
	this.clock.tick( 10 );
} );
<<<<<<< HEAD

QUnit.test( "multiple unqueued and promise", 4, function() {
=======

QUnit.test( "multiple unqueued and promise", function( assert ) {
	assert.expect( 4 );

>>>>>>> refs/remotes/jquery/master
	var foo = jQuery( "#foo" ),
		step = 1;
	foo.animate( {
		marginLeft: 300
	}, {
		duration: 500,
		queue: false,
		complete: function() {
			assert.strictEqual( step++, 2, "Step 2" );
		}
	} ).animate( {
		top: 100
	}, {
		duration: 1000,
		queue: false,
		complete: function() {
			assert.strictEqual( step++, 3, "Step 3" );
		}
	} ).animate( {}, {
		duration: 2000,
		queue: false,
		complete: function() {

			// no properties is a non-op and finishes immediately
			assert.strictEqual( step++, 1, "Step 1" );
		}
	} ).promise().done( function() {
<<<<<<< HEAD
		strictEqual( step++, 4, "Step 4" );
	} );
	this.clock.tick( 1000 );
} );

QUnit.test( "animate does not change start value for non-px animation (#7109)", 1, function() {
=======
		assert.strictEqual( step++, 4, "Step 4" );
	} );
	this.clock.tick( 1000 );
} );

QUnit.test( "animate does not change start value for non-px animation (#7109)", function( assert ) {
	assert.expect( 1 );

>>>>>>> refs/remotes/jquery/master
	var parent = jQuery( "<div><div></div></div>" ).css( { width: 284, height: 1 } ).appendTo( "#qunit-fixture" ),
		child = parent.children().css( { fontSize: "98.6in", width: "0.01em", height: 1 } ),
		actual = parseFloat( child.css( "width" ) ),
		computed = [];

	child.animate( { width: "0%" }, {
		duration: 1,
		step: function() {
			computed.push( parseFloat( child.css( "width" ) ) );
		}
	} ).queue( function( next ) {
		var ratio = computed[ 0 ] / actual;
<<<<<<< HEAD
		ok( ratio > 0.9 && ratio < 1.1, "Starting width was close enough" );
=======
		assert.ok( ratio > 0.9 && ratio < 1.1, "Starting width was close enough" );
>>>>>>> refs/remotes/jquery/master
		next();
		parent.remove();
	} );
	this.clock.tick( 10 );
} );

<<<<<<< HEAD
QUnit.test( "non-px animation handles non-numeric start (#11971)", 2, function() {
=======
QUnit.test( "non-px animation handles non-numeric start (#11971)", function( assert ) {
	assert.expect( 2 );

>>>>>>> refs/remotes/jquery/master
	var foo = jQuery( "#foo" ),
		initial = foo.css( "backgroundPositionX" );

	if ( !initial ) {
<<<<<<< HEAD
		expect( 1 );
		ok( true, "Style property not understood" );
=======
		assert.expect( 1 );
		assert.ok( true, "Style property not understood" );
>>>>>>> refs/remotes/jquery/master
		return;
	}

	foo.animate( { backgroundPositionX: "42%" }, {
		duration: 1,
		progress: function( anim, percent ) {
			if ( percent ) {
				return;
			}

			if ( parseFloat( initial ) ) {
				assert.equal( jQuery.style( this, "backgroundPositionX" ), initial, "Numeric start preserved" );
			} else {
				assert.equal( jQuery.style( this, "backgroundPositionX" ), "0%", "Non-numeric start zeroed" );
			}
		},
		done: function() {
<<<<<<< HEAD
			equal( jQuery.style( this, "backgroundPositionX" ), "42%", "End reached" );
=======
			assert.equal( jQuery.style( this, "backgroundPositionX" ), "42%", "End reached" );
>>>>>>> refs/remotes/jquery/master
		}
	} );
	this.clock.tick( 10 );
} );

QUnit.test( "Animation callbacks (#11797)", function( assert ) {
	assert.expect( 16 );

	var prog = 0,
		targets = jQuery( "#foo" ).children(),
		done = false,
		expectedProgress = 0;

	targets.eq( 0 ).animate( {}, {
		duration: 1,
		start: function() {
			assert.ok( true, "empty: start" );
		},
		progress: function( anim, percent ) {
			assert.equal( percent, prog, "empty: progress " + prog );
			prog = 1;
		},
		done: function() {
			assert.ok( true, "empty: done" );
		},
		fail: function() {
			assert.ok( false, "empty: fail" );
		},
		always: function() {
			assert.ok( true, "empty: always" );
			done = true;
		}
	} );

	assert.ok( done, "empty: done immediately" );

	done = false;
	targets.eq( 1 ).animate( {
		opacity: 0
	}, {
		duration: 1,
		start: function() {
			assert.ok( true, "stopped: start" );
		},
		progress: function( anim, percent ) {
			assert.equal( percent, 0, "stopped: progress 0" );
		},
		done: function() {
			assert.ok( false, "stopped: done" );
		},
		fail: function() {
			assert.ok( true, "stopped: fail" );
		},
		always: function() {
			assert.ok( true, "stopped: always" );
			done = true;
		}
	} ).stop();

	assert.ok( done, "stopped: stopped immediately" );

	targets.eq( 2 ).animate( {
		opacity: 0
	}, {
		duration: 1,
		start: function() {
			assert.ok( true, "async: start" );
		},
		progress: function( anim, percent ) {

			// occasionally the progress handler is called twice in first frame.... *shrug*
			if ( percent === 0 && expectedProgress === 1 ) {
				return;
			}
			assert.equal( percent, expectedProgress, "async: progress " + expectedProgress );

			// once at 0, once at 1
			expectedProgress++;
		},
		done: function() {
			assert.ok( true, "async: done" );
		},
		fail: function() {
			assert.ok( false, "async: fail" );
		},
		always: function() {
			assert.ok( true, "async: always" );
		}
	} );
	this.clock.tick( 10 );
} );
<<<<<<< HEAD

QUnit.test( "Animate properly sets overflow hidden when animating width/height (#12117)", 8, function() {
=======

QUnit.test( "Animation callbacks in order (#2292)", function( assert ) {
	assert.expect( 9 );

	var step = 0,
		dur = 50;

	// assert? -> github.com/JamesMGreene/qunit-assert-step
	jQuery( "#foo" ).animate( {
		width: "5px"
	}, {
		duration: dur,
		start: function() {
			assert.step( 1 );
		},
		progress: function( anim, p, ms ) {
			if ( !( step++ ) ) {
				assert.step( 2 );
				assert.strictEqual( p, 0, "first progress callback: progress ratio" );
				assert.strictEqual( ms, dur, "first progress callback: remaining ms" );
			} else {
				assert.step( 3 );
				assert.strictEqual( p, 1, "last progress callback: progress ratio" );
				assert.strictEqual( ms, 0, "last progress callback: remaining ms" );
			}
		},
		done: function() {
			assert.step( 4 );
		},
		fail: function() {
			assert.ok( false, "Animation failed" );
		},
		always: function() {
			assert.step( 5 );
		}
	} ).finish();

	this.clock.tick( dur + 10 );
} );

QUnit.test( "Animate properly sets overflow hidden when animating width/height (#12117)", function( assert ) {
	assert.expect( 8 );

>>>>>>> refs/remotes/jquery/master
	jQuery.each( [ "height", "width" ], function( _, prop ) {
		jQuery.each( [ 100, 0 ], function( _, value ) {
			var div = jQuery( "<div>" ).css( "overflow", "auto" ),
				props = {};
			props[ prop ] = value;
			div.animate( props, 1 );
			assert.equal( div.css( "overflow" ), "hidden",
				"overflow: hidden set when animating " + prop + " to " + value );
			div.stop();
<<<<<<< HEAD
			if ( jQuery.support.shrinkWrapBlocks() ) {
				ok( true, "cannot restore overflow, shrinkWrapBlocks" );
			} else {
				equal( div.css( "overflow" ), "auto",
					"overflow: auto restored after animating " + prop + " to " + value );
			}
=======
			assert.equal( div.css( "overflow" ), "auto",
				"overflow: auto restored after animating " + prop + " to " + value );
>>>>>>> refs/remotes/jquery/master
		} );
	} );
} );

<<<<<<< HEAD
QUnit.test( "Each tick of the timer loop uses a fresh time (#12837)", function() {
=======
QUnit.test( "Each tick of the timer loop uses a fresh time (#12837)", function( assert ) {
>>>>>>> refs/remotes/jquery/master
	var lastVal,
		tmp = jQuery( {
			test: 0
		} );
<<<<<<< HEAD
	expect( 3 );
=======
	assert.expect( 3 );
>>>>>>> refs/remotes/jquery/master
	tmp.animate( {
		test: 100
	}, {
		step: function( p, fx ) {
			assert.ok( fx.now !== lastVal, "Current value is not the last value: " + lastVal + " - " + fx.now );
			lastVal = fx.now;
		}
	} );
	this.clock.tick( 1 );

	// now that we have a new time, run another tick
	jQuery.fx.tick();

	this.clock.tick( 1 );

	jQuery.fx.tick();
	tmp.stop();
} );
<<<<<<< HEAD

QUnit.test( "Animations with 0 duration don't ease (#12273)", 1, function() {
=======

QUnit.test( "Animations with 0 duration don't ease (#12273)", function( assert ) {
	assert.expect( 1 );

>>>>>>> refs/remotes/jquery/master
	jQuery.easing.test = function() {
		assert.ok( false, "Called easing" );
	};

	jQuery( "#foo" ).animate( {
		height: 100
	}, {
		duration: 0,
		easing: "test",
		complete: function() {
			assert.equal( jQuery( this ).height(), 100, "Height is 100" );
		}
	} );

	delete jQuery.easing.test;
} );

jQuery.map( [ "toggle", "slideToggle", "fadeToggle" ], function( method ) {

	// this test would look a lot better if we were using something to override
	// the default timers
	var duration = 1500;
<<<<<<< HEAD
	QUnit.test( "toggle state tests: " + method + " (#8685)", function() {
=======
	QUnit.test( "toggle state tests: " + method + " (#8685)", function( assert ) {
>>>>>>> refs/remotes/jquery/master
		function secondToggle() {
			var stopped = parseFloat( element.css( check ) );
			tested = false;
			element[ method ]( {
				duration: duration,
				step: function( p, fx ) {
					if ( fx.pos > 0.1 && fx.prop === check && !tested ) {
						tested = true;
						assert.equal( fx.start, stopped, check + " starts at " + stopped + " where it stopped" );
						assert.equal( fx.end, original, check + " ending value is " + original );
						element.stop();
					}
				}
			} );
		}

		var tested,
			original,
			check = method === "slideToggle" ? "height" : "opacity",
			element = jQuery( "#foo" ).height( 200 );

		assert.expect( 4 );

		element[ method ]( {
			duration: duration,
			easing: "linear",
			step: function( p, fx ) {
				if ( fx.pos > 0.1 && fx.prop === check && !tested ) {
					tested = true;
					original = fx.start;
					assert.ok( fx.start !== 0, check + " is starting at " + original + " on first toggle (non-zero)" );
					assert.equal( fx.end, 0, check + " is ending at 0 on first toggle" );
					element.stop();
				}
			},
			always: secondToggle
		} );

                //FIXME figure out why 470
		this.clock.tick( 470 );
	} );
} );

<<<<<<< HEAD
QUnit.test( "jQuery.fx.start & jQuery.fx.stop hook points", function() {
=======
QUnit.test( "jQuery.fx.start & jQuery.fx.stop hook points", function( assert ) {
>>>>>>> refs/remotes/jquery/master
	var oldStart = jQuery.fx.start,
		oldStop = jQuery.fx.stop,
		foo = jQuery( { foo: 0 } );

	assert.expect( 3 );

	jQuery.fx.start = function() {
		assert.ok( true, "start called" );
	};
	jQuery.fx.stop = function() {
		assert.ok( true, "stop called" );
	};

	// calls start
	foo.animate( { foo: 1 }, { queue: false } );

	// calls start
	foo.animate( { foo: 2 }, { queue: false } );
	foo.stop();

	// calls stop
	jQuery.fx.tick();

	// cleanup
	jQuery.fx.start = oldStart;
	jQuery.fx.stop = oldStop;
} );

<<<<<<< HEAD
QUnit.test( ".finish() completes all queued animations", function() {
=======
QUnit.test( ".finish() completes all queued animations", function( assert ) {
>>>>>>> refs/remotes/jquery/master
	var animations = {
			top: 100,
			left: 100,
			height: 100,
			width: 100
		},
		div = jQuery( "<div>" );

<<<<<<< HEAD
	expect( 11 );
=======
	assert.expect( 11 );
>>>>>>> refs/remotes/jquery/master

	jQuery.each( animations, function( prop, value ) {
		var anim = {};
		anim[ prop ] = value;

		// the delay shouldn't matter at all!
		div.css( prop, 1 ).animate( anim, function() {
<<<<<<< HEAD
			ok( true, "Called animation callback for " + prop );
		} ).delay( 100 );
	} );
	equal( div.queue().length, 8, "8 animations in the queue" );
	div.finish();
	jQuery.each( animations, function( prop, value ) {
		equal( parseFloat( div.css( prop ) ), value, prop + " finished at correct value" );
	} );
	equal( div.queue().length, 0, "empty queue when done" );
	equal( div.is( ":animated" ), false, ":animated doesn't match" );
=======
			assert.ok( true, "Called animation callback for " + prop );
		} ).delay( 100 );
	} );
	assert.equal( div.queue().length, 8, "8 animations in the queue" );
	div.finish();
	jQuery.each( animations, function( prop, value ) {
		assert.equal( parseFloat( div.css( prop ) ), value, prop + " finished at correct value" );
	} );
	assert.equal( div.queue().length, 0, "empty queue when done" );

	if ( jQuery.find.compile ) {
		assert.equal( div.is( ":animated" ), false, ":animated doesn't match" );
	} else {
		assert.ok( "skip", ":animated selector not supported with selector-native" );
	}
>>>>>>> refs/remotes/jquery/master

	// cleanup
	div.remove();

	// leaves a "shadow timer" which does nothing around, need to force a tick
	jQuery.fx.tick();
} );

<<<<<<< HEAD
QUnit.test( ".finish( false ) - unqueued animations", function() {
=======
QUnit.test( ".finish( false ) - unqueued animations", function( assert ) {
>>>>>>> refs/remotes/jquery/master
	var animations = {
			top: 100,
			left: 100,
			height: 100,
			width: 100
		},
		div = jQuery( "<div>" );

<<<<<<< HEAD
	expect( 10 );
=======
	assert.expect( 10 );
>>>>>>> refs/remotes/jquery/master

	jQuery.each( animations, function( prop, value ) {
		var anim = {};
		anim[ prop ] = value;
		div.css( prop, 1 ).animate( anim, {
			queue: false,
			complete: function() {
<<<<<<< HEAD
				ok( true, "Called animation callback for " + prop );
			}
		} );
	} );
	equal( div.queue().length, 0, "0 animations in the queue" );
	div.finish( false );
	jQuery.each( animations, function( prop, value ) {
		equal( parseFloat( div.css( prop ) ), value, prop + " finished at correct value" );
	} );
	equal( div.is( ":animated" ), false, ":animated doesn't match" );
=======
				assert.ok( true, "Called animation callback for " + prop );
			}
		} );
	} );
	assert.equal( div.queue().length, 0, "0 animations in the queue" );
	div.finish( false );
	jQuery.each( animations, function( prop, value ) {
		assert.equal( parseFloat( div.css( prop ) ), value, prop + " finished at correct value" );
	} );

	if ( jQuery.find.compile ) {
		assert.equal( div.is( ":animated" ), false, ":animated doesn't match" );
	} else {
		assert.ok( "skip", ":animated selector not supported with selector-native" );
	}
>>>>>>> refs/remotes/jquery/master

	// cleanup
	div.remove();

	// leaves a "shadow timer" which does nothing around, need to force a tick
	jQuery.fx.tick();
} );

<<<<<<< HEAD
QUnit.test( ".finish( \"custom\" ) - custom queue animations", function() {
=======
QUnit.test( ".finish( \"custom\" ) - custom queue animations", function( assert ) {
>>>>>>> refs/remotes/jquery/master
	var animations = {
			top: 100,
			left: 100,
			height: 100,
			width: 100
		},
		div = jQuery( "<div>" );
<<<<<<< HEAD

	expect( 11 );

	jQuery.each( animations, function( prop, value ) {
		var anim = {};
		anim[ prop ] = value;
		div.css( prop, 1 ).animate( anim, {
			queue: "custom",
			complete: function() {
				ok( true, "Called animation callback for " + prop );
			}
		} );
	} );
	equal( div.queue( "custom" ).length, 4, "4 animations in the queue" );

	// start the first animation
	div.dequeue( "custom" );
	equal( div.is( ":animated" ), true, ":animated matches" );
	div.finish( "custom" );
	jQuery.each( animations, function( prop, value ) {
		equal( parseFloat( div.css( prop ) ), value, prop + " finished at correct value" );
	} );
	equal( div.is( ":animated" ), false, ":animated doesn't match" );

	// cleanup
	div.remove();

	// leaves a "shadow timer" which does nothing around, need to force a tick
	jQuery.fx.tick();
} );

QUnit.test( ".finish() calls finish of custom queue functions", function() {
	function queueTester( next, hooks ) {
		hooks.stop = function( gotoEnd ) {
			inside++;
			equal( this, div[ 0 ] );
			ok( gotoEnd, "hooks.stop(true) called" );
		};
	}
	var div = jQuery( "<div>" ),
		inside = 0,
		outside = 0;

	expect( 6 );
	queueTester.finish = function() {
		outside++;
		ok( true, "Finish called on custom queue function" );
	};

	div.queue( queueTester ).queue( queueTester ).queue( queueTester ).finish();

	equal( inside, 1, "1 stop(true) callback" );
	equal( outside, 2, "2 finish callbacks" );

	div.remove();
} );

QUnit.test( ".finish() is applied correctly when multiple elements were animated (#13937)", function() {
	expect( 3 );

	var elems = jQuery( "<a>0</a><a>1</a><a>2</a>" );

	elems.animate( { opacity: 0 }, 1500 ).animate( { opacity: 1 }, 1500 );
	setTimeout( function() {
		elems.eq( 1 ).finish();
		ok( !elems.eq( 1 ).queue().length, "empty queue for .finish()ed element" );
		ok( elems.eq( 0 ).queue().length, "non-empty queue for preceding element" );
		ok( elems.eq( 2 ).queue().length, "non-empty queue for following element" );
		elems.stop( true );

	}, 100 );
	this.clock.tick( 1500 );
} );

QUnit.test( "slideDown() after stop() (#13483)", 2, function() {
	var ul = jQuery( "<ul style='height: 100px; display: block;'></ul>" )
			.appendTo( "#qunit-fixture" ),
		origHeight = ul.height(),
		clock = this.clock;

	// First test. slideUp() -> stop() in the middle -> slideDown() until the end
	ul.slideUp( 1000 );
	clock.tick( 500 );
	ul.stop( true );
	ul.slideDown( 1, function() {
		equal( ul.height(), origHeight, "slideDown() after interrupting slideUp() with stop(). Height must be in original value" );

		// Second test. slideDown() -> stop() in the middle -> slideDown() until the end
		ul.slideUp( 1 );
		clock.tick( 10 );
		ul.slideDown( 1000 );
		clock.tick( 500 );
		ul.stop( true );
		ul.slideDown( 1 );
		equal( ul.height(), origHeight, "slideDown() after interrupting slideDown() with stop(). Height must be in original value" );

		// Cleanup
		ul.remove();
		clock.tick( 10 );

	} );

	clock.tick( 10 );
} );

QUnit.test( "Respect display value on inline elements (#14824)", 2, function() {
	var clock = this.clock,
		fromStyleSheet = jQuery( "<span id='span-14824' />" ),
		fromStyleAttr = jQuery( "<span style='display: block;' />" );

	jQuery( "#qunit-fixture" ).append( fromStyleSheet, fromStyleAttr );

	fromStyleSheet.slideUp( function() {
		jQuery( this ).slideDown( function() {
			equal( jQuery( this ).css( "display" ), "block",
				"Respect previous display value (from stylesheet) on span element" );
		} );
	} );

	fromStyleAttr.slideUp( function() {
		jQuery( this ).slideDown( function() {
			equal( jQuery( this ).css( "display" ), "block",
				"Respect previous display value (from style attribute) on span element" );
		} );
	} );

	clock.tick( 800 );
} );

=======

	assert.expect( 11 );

	jQuery.each( animations, function( prop, value ) {
		var anim = {};
		anim[ prop ] = value;
		div.css( prop, 1 ).animate( anim, {
			queue: "custom",
			complete: function() {
				assert.ok( true, "Called animation callback for " + prop );
			}
		} );
	} );
	assert.equal( div.queue( "custom" ).length, 4, "4 animations in the queue" );

	// start the first animation
	div.dequeue( "custom" );

	if ( jQuery.find.compile ) {
		assert.equal( div.is( ":animated" ), true, ":animated matches" );
	} else {
		assert.ok( "skip", ":animated selector not supported with selector-native" );
	}

	div.finish( "custom" );
	jQuery.each( animations, function( prop, value ) {
		assert.equal( parseFloat( div.css( prop ) ), value, prop + " finished at correct value" );
	} );

	if ( jQuery.find.compile ) {
		assert.equal( div.is( ":animated" ), false, ":animated doesn't match" );
	} else {
		assert.ok( "skip", ":animated selector not supported with selector-native" );
	}

	// cleanup
	div.remove();

	// leaves a "shadow timer" which does nothing around, need to force a tick
	jQuery.fx.tick();
} );

QUnit.test( ".finish() calls finish of custom queue functions", function( assert ) {
	function queueTester( next, hooks ) {
		hooks.stop = function( gotoEnd ) {
			inside++;
			assert.equal( this, div[ 0 ] );
			assert.ok( gotoEnd, "hooks.stop(true) called" );
		};
	}
	var div = jQuery( "<div>" ),
		inside = 0,
		outside = 0;

	assert.expect( 6 );
	queueTester.finish = function() {
		outside++;
		assert.ok( true, "Finish called on custom queue function" );
	};

	div.queue( queueTester ).queue( queueTester ).queue( queueTester ).finish();

	assert.equal( inside, 1, "1 stop(true) callback" );
	assert.equal( outside, 2, "2 finish callbacks" );

	div.remove();
} );

QUnit.test( ".finish() is applied correctly when multiple elements were animated (#13937)", function( assert ) {
	assert.expect( 3 );

	var elems = jQuery( "<a>0</a><a>1</a><a>2</a>" );

	elems.animate( { opacity: 0 }, 1500 ).animate( { opacity: 1 }, 1500 );
	setTimeout( function() {
		elems.eq( 1 ).finish();
		assert.ok( !elems.eq( 1 ).queue().length, "empty queue for .finish()ed element" );
		assert.ok( elems.eq( 0 ).queue().length, "non-empty queue for preceding element" );
		assert.ok( elems.eq( 2 ).queue().length, "non-empty queue for following element" );
		elems.stop( true );

	}, 100 );
	this.clock.tick( 1500 );
} );

QUnit.test( "slideDown() after stop() (#13483)", function( assert ) {
		assert.expect( 2 );

		var ul = jQuery( "<ul style='height: 100px; display: block;'></ul>" )
				.appendTo( "#qunit-fixture" ),
			origHeight = ul.height(),
			clock = this.clock;

        // First test. slideUp() -> stop() in the middle -> slideDown() until the end
		ul.slideUp( 1000 );
		clock.tick( 500 );
		ul.stop( true );
		ul.slideDown( 1, function() {
				assert.equal( ul.height(), origHeight, "slideDown() after interrupting slideUp() with stop(). Height must be in original value" );

				// Second test. slideDown() -> stop() in the middle -> slideDown() until the end
				ul.slideUp( 1 );
				clock.tick( 10 );
				ul.slideDown( 1000 );
				clock.tick( 500 );
				ul.stop( true );
				ul.slideDown( 1 );
				assert.equal( ul.height(), origHeight, "slideDown() after interrupting slideDown() with stop(). Height must be in original value" );

				// Cleanup
				ul.remove();
				clock.tick( 10 );

		} );

		clock.tick( 10 );
} );

QUnit.test( "Respect display value on inline elements (#14824)", function( assert ) {
	assert.expect( 2 );

	var clock = this.clock,
		fromStyleSheet = jQuery( "<span id='span-14824' />" ),
		fromStyleAttr = jQuery( "<span style='display: block;' />" );

	jQuery( "#qunit-fixture" ).append( fromStyleSheet, fromStyleAttr );

	fromStyleSheet.slideUp( function() {
		jQuery( this ).slideDown( function() {
			assert.equal( jQuery( this ).css( "display" ), "block",
				"Respect previous display value (from stylesheet) on span element" );
		} );
	} );

	fromStyleAttr.slideUp( function() {
		jQuery( this ).slideDown( function() {
			assert.equal( jQuery( this ).css( "display" ), "block",
				"Respect previous display value (from style attribute) on span element" );
		} );
	} );

	clock.tick( 800 );
} );

QUnit.test( "jQuery.easing._default (gh-2218)", function( assert ) {
	assert.expect( 2 );

	jQuery( "#foo" )
		.animate( { width: "5px" }, {
			duration: 5,
			start: function( anim ) {
				assert.equal( anim.opts.easing, jQuery.easing._default,
					"anim.opts.easing should be equal to jQuery.easing._default when the easing argument is not given" );
			}
		} )
		.animate( { height: "5px" }, {
			duration: 5,
			easing: "linear",
			start: function( anim ) {
				assert.equal( anim.opts.easing, "linear",
					"anim.opts.easing should be equal to the easing argument" );
			}
		} )
		.stop();

	this.clock.tick( 25 );
} );

QUnit.test( "jQuery.easing._default in Animation (gh-2218", function( assert ) {
	assert.expect( 3 );

	var animation,
		defaultEasing = jQuery.easing._default,
		called = false,
		testObject = { "width": 100 },
		testDest = { "width": 200 };

	jQuery.easing.custom = function( p ) {
		called = true;
		return p;
	};
	jQuery.easing._default = "custom";

	animation = jQuery.Animation( testObject, testDest, { "duration": 1 } );
	animation.done( function() {
		assert.equal( testObject.width, testDest.width, "Animated width" );
		assert.ok( called, "Custom jQuery.easing._default called" );
		assert.strictEqual( animation.opts.easing, "custom",
			"Animation used custom jQuery.easing._default" );
		jQuery.easing._default = defaultEasing;
		delete jQuery.easing.custom;
	} );

	this.clock.tick( 10 );
} );

QUnit.test( "jQuery.easing._default in Tween (gh-2218)", function( assert ) {
	assert.expect( 3 );

	var tween,
		defaultEasing = jQuery.easing._default,
		called = false,
		testObject = { "width": 100 };

	jQuery.easing.custom = function( p ) {
		called = true;
		return p;
	};
	jQuery.easing._default = "custom";

	tween = jQuery.Tween( testObject, { "duration": 1 }, "width", 200 );
	tween.run( 1 );
	assert.equal( testObject.width, 200, "Animated width" );
	assert.ok( called, "Custom jQuery.easing._default called" );
	assert.strictEqual( tween.easing, "custom",
		"Animation used custom jQuery.easing._default" );
	jQuery.easing._default = defaultEasing;
	delete jQuery.easing.custom;
} );

QUnit.test( "Display value is correct for disconnected nodes (trac-13310)", function( assert ) {
	assert.expect( 3 );

	var div = jQuery( "<div/>" );

	assert.equal( div.css( "display", "inline" ).hide().show().appendTo( "body" ).css( "display" ), "inline", "Initialized display value has returned" );
	div.remove();

	div.css( "display", "none" ).hide();
	assert.equal( jQuery._data( div[ 0 ], "olddisplay" ), undefined, "olddisplay is undefined after hiding a detached and hidden element" );
	div.remove();

	div.css( "display", "inline-block" ).hide().appendTo( "body" ).fadeIn( function() {
		assert.equal( div.css( "display" ), "inline-block", "Initialized display value has returned" );
		div.remove();
	} );
	this.clock.tick( 1000 );
} );

QUnit.test( "Show/hide/toggle and display: inline", function( assert ) {
	assert.expect( 40 );

	var clock = this.clock;

	jQuery( "<span/><div style='display:inline' title='inline div'/>" ).each( function() {
		var completed, interrupted,
			N = 100,
			fixture = jQuery( "#qunit-fixture" ),
			$el = jQuery( this ),
			kind = this.title || this.nodeName.toLowerCase();

		// Animations allowed to complete
		completed = jQuery.map( [
			$el.clone().data( { call: "hide", done: "none" } ).appendTo( fixture ).hide( N ),
			$el.clone().data( { call: "toggle", done: "none" } ).appendTo( fixture ).toggle( N ),
			$el.clone().data( { call: "hide+show", done: "inline" } ).appendTo( fixture )
				.hide().show( N ),
			$el.clone().data( { call: "hide+toggle", done: "inline" } ).appendTo( fixture )
				.hide().toggle( N )
		], function( $clone ) { return $clone[ 0 ]; } );

		// Animations not allowed to complete
		interrupted = jQuery.map( [
			$el.clone().data( { call: "hide+stop" } ).appendTo( fixture ).hide( N ),
			$el.clone().data( { call: "toggle+stop" } ).appendTo( fixture ).toggle( N ),
			$el.clone().data( { call: "hide+show+stop" } ).appendTo( fixture ).hide().show( N ),
			$el.clone().data( { call: "hide+toggle+stop" } ).appendTo( fixture ).hide().toggle( N )
		], function( $clone ) { return $clone[ 0 ]; } );

		// All elements should be inline-block during the animation
		clock.tick( N / 2 );
		jQuery( completed ).each( function() {
			var $el = jQuery( this ),
				call = $el.data( "call" );
			assert.strictEqual( $el.css( "display" ), "inline-block", kind + " display during " + call );
		} );

		// Interrupted elements should remain inline-block
		jQuery( interrupted ).stop();
		clock.tick( N / 2 );
		jQuery( interrupted ).each( function() {
			var $el = jQuery( this ),
				call = $el.data( "call" );
			assert.strictEqual( $el.css( "display" ), "inline-block", kind + " display after " + call );
		} );

		// Completed elements should not remain inline-block
		clock.tick( N / 2 );
		jQuery( completed ).each( function() {
			var $el = jQuery( this ),
				call = $el.data( "call" ),
				display = $el.data( "done" );
			assert.strictEqual( $el.css( "display" ), display, kind + " display after " + call );
		} );

		// A post-animation toggle should not make any element inline-block
		completed = jQuery( completed.concat( interrupted ) );
		completed.toggle( N / 2 );
		clock.tick( N );
		completed.each( function() {
			var $el = jQuery( this ),
				call = $el.data( "call" );
			assert.ok( $el.css( "display" ) !== "inline-block",
				kind + " display is not inline-block after " + call + "+toggle" );
		} );
	} );
} );

function testEasing( assert, speed, easing, complete ) {
	assert.expect( 4 );
	var options = jQuery.speed( speed, easing, complete );

	assert.equal( options.duration, 10, "Duration set properly" );
	assert.equal(
		jQuery.isFunction( options.easing ) ? options.easing() : options.easing,
		"linear",
		"Easing set properly"
	);
	assert.equal( options.queue, "fx", "Queue defaults to fx" );
	options.complete();
}

QUnit.test( "jQuery.speed( speed, easing, complete )", function( assert ) {
	testEasing( assert, 10, "linear", function() {
		assert.ok( true, "Complete called" );
	} );
} );

QUnit.test( "jQuery.speed( speed, easing, complete ) - with easing function", function( assert ) {
	testEasing(
		assert,
		10,
		function() {
			return "linear";
		},
		function() {
			assert.ok( true, "Complete called" );
		}
	);
} );

QUnit.test( "jQuery.speed( options )", function( assert ) {
	testEasing( assert, {
		duration: 10,
		easing: "linear",
		complete: function() {
			assert.ok( true, "Complete called" );
		}
	} );
} );

QUnit.test( "jQuery.speed( options ) - with easing function", function( assert ) {
	testEasing( assert, {
		duration: 10,
		easing: function() {
			return "linear";
		},
		complete: function() {
			assert.ok( true, "Complete called" );
		}
	} );
} );

QUnit.test( "jQuery.speed( options ) - queue values", function( assert ) {
	assert.expect( 5 );

	var get = function( queue ) {
		return jQuery.speed( { queue: queue } ).queue;
	};

	assert.equal( get( null ), "fx", "null defaults to 'fx'" );
	assert.equal( get( undefined ), "fx", "undefined defaults to 'fx'" );
	assert.equal( get( true ), "fx", "true defaults to 'fx'" );
	assert.equal( get( "fx" ), "fx", "'fx' passed through" );
	assert.equal( get( "custom" ), "custom", "'custom' passed through" );
} );

QUnit.test( "jQuery.speed() - durations", function( assert ) {
	assert.expect( 5 );

	var get = function( duration ) {
		return jQuery.speed( duration ).duration;
	};

	assert.equal( get( 100 ), 100, "jQuery.speed sets number duration" );
	assert.equal( get(), jQuery.fx.speeds._default, "jQuery.speed falls back default duration" );
	assert.equal( get( "slow" ), jQuery.fx.speeds.slow, "jQuery.speed uses preset speeds" );
	assert.equal( get( "fast" ), jQuery.fx.speeds.fast, "jQuery.speed uses preset speeds" );
	jQuery.fx.off = true;
	assert.equal( get( 100 ), 0, "jQuery.speed defaults duration to zero if fx is off" );
	jQuery.fx.off = false;
} );

>>>>>>> refs/remotes/jquery/master
} )();
