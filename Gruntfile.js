module.exports = function( grunt ) {
	"use strict";

	function readOptionalJSON( filepath ) {
<<<<<<< HEAD
		var data = {};
=======
		var stripJSONComments = require( "strip-json-comments" ),
			data = {};
>>>>>>> refs/remotes/jquery/master
		try {
			data = JSON.parse( stripJSONComments(
				fs.readFileSync( filepath, { encoding: "utf8" } )
			) );
		} catch ( e ) {}
		return data;
	}

	var fs = require( "fs" ),
<<<<<<< HEAD
		stripJSONComments = require( "strip-json-comments" ),
		gzip = require( "gzip-js" ),
		srcHintOptions = readOptionalJSON( "src/.jshintrc" ),
		newNode = !/^v0/.test( process.version ),

		// Allow to skip jsdom-related tests in Node.js < 1.0.0
		runJsdomTests = newNode || ( function() {
			try {
				require( "jsdom" );
				return true;
			} catch ( e ) {
				return false;
			}
		} )();

	// The concatenated file won't pass onevar
	// But our modules can
	delete srcHintOptions.onevar;
=======
		gzip = require( "gzip-js" );

	if ( !grunt.option( "filename" ) ) {
		grunt.option( "filename", "jquery.js" );
	}
>>>>>>> refs/remotes/jquery/master

	grunt.initConfig( {
		pkg: grunt.file.readJSON( "package.json" ),
		dst: readOptionalJSON( "dist/.destination.json" ),
		"compare_size": {
			files: [ "dist/jquery.js", "dist/jquery.min.js" ],
			options: {
				compress: {
					gz: function( contents ) {
						return gzip.zip( contents, {} ).length;
					}
				},
				cache: "build/.sizecache.json"
			}
		},
		babel: {
			options: {
				sourceMap: "inline",
				retainLines: true
			},
			nodeSmokeTests: {
				files: {
					"test/node_smoke_tests/lib/ensure_iterability.js":
						"test/node_smoke_tests/lib/ensure_iterability_es6.js"
				}
			}
		},
		build: {
			all: {
				dest: "dist/jquery.js",
				minimum: [
					"core",
					"selector"
				],
<<<<<<< HEAD
				removeWith: {
					ajax: [ "manipulation/_evalUrl", "event/ajax" ],
					callbacks: [ "deferred" ],
					css: [ "effects", "dimensions", "offset" ]
=======

				// Exclude specified modules if the module matching the key is removed
				removeWith: {
					ajax: [ "manipulation/_evalUrl", "event/ajax" ],
					callbacks: [ "deferred" ],
					css: [ "effects", "dimensions", "offset" ],
					"css/showHide": [ "effects" ],
					deferred: {
						remove: [ "ajax", "effects", "queue", "core/ready" ],
						include: [ "core/ready-no-deferred" ]
					},
					sizzle: [ "css/hiddenVisibleSelectors", "effects/animatedSelector" ]
>>>>>>> refs/remotes/jquery/master
				}
			}
		},
		npmcopy: {
			all: {
				options: {
					destPrefix: "external"
				},
				files: {
					"sizzle/dist": "sizzle/dist",
					"sizzle/LICENSE.txt": "sizzle/LICENSE.txt",

<<<<<<< HEAD
					"qunit/qunit.js": "qunitjs/qunit/qunit.js",
					"qunit/qunit.css": "qunitjs/qunit/qunit.css",
					"qunit/LICENSE.txt": "qunitjs/LICENSE.txt",

					"qunit-assert-step/qunit-assert-step.js":
					"qunit-assert-step/qunit-assert-step.js",
					"qunit-assert-step/MIT-LICENSE.txt":
					"qunit-assert-step/MIT-LICENSE.txt",

					"requirejs/require.js": "requirejs/require.js",

					"sinon/fake_timers.js": "sinon/lib/sinon/util/fake_timers.js",
					"sinon/timers_ie.js": "sinon/lib/sinon/util/timers_ie.js",
=======
					"npo/npo.js": "native-promise-only/npo.js",

					"qunit/qunit.js": "qunitjs/qunit/qunit.js",
					"qunit/qunit.css": "qunitjs/qunit/qunit.css",
					"qunit/LICENSE.txt": "qunitjs/LICENSE.txt",

					"qunit-assert-step/qunit-assert-step.js":
					"qunit-assert-step/qunit-assert-step.js",
					"qunit-assert-step/MIT-LICENSE.txt":
					"qunit-assert-step/MIT-LICENSE.txt",

					"requirejs/require.js": "requirejs/require.js",

					"sinon/sinon.js": "sinon/pkg/sinon.js",
>>>>>>> refs/remotes/jquery/master
					"sinon/LICENSE.txt": "sinon/LICENSE"
				}
			}
		},
		jsonlint: {
			pkg: {
				src: [ "package.json" ]
			}
		},
<<<<<<< HEAD
		jshint: {
			all: {
				src: [
					"src/**/*.js", "Gruntfile.js", "test/**/*.js", "build/**/*.js"
				],
				options: {
					jshintrc: true
				}
			},
			dist: {
				src: "dist/jquery.js",
				options: srcHintOptions
			}
		},
		jscs: {
			src: "src",
			gruntfile: "Gruntfile.js",

			// Check parts of tests that pass
			test: [
				"test/data/testrunner.js",
				"test/unit/basic.js",
				"test/unit/wrap.js"
			],
			build: "build"
		},
=======
		eslint: {
			options: {

				// See https://github.com/sindresorhus/grunt-eslint/issues/119
				quiet: true
			},

			// We have to explicitly declare "src" property otherwise "newer"
			// task wouldn't work properly :/
			dist: {
				src: "dist/jquery.js"
			},
			dev: {
				src: [ "src/**/*.js", "Gruntfile.js", "test/**/*.js", "build/**/*.js" ]
			}
		},
>>>>>>> refs/remotes/jquery/master
		testswarm: {
			tests: [

				// A special module with basic tests, meant for
				// not fully supported environments like Android 2.3,
				// jsdom or PhantomJS. We run it everywhere, though,
				// to make sure tests are not broken.
				"basic",

				"ajax",
<<<<<<< HEAD
=======
				"animation",
>>>>>>> refs/remotes/jquery/master
				"attributes",
				"callbacks",
				"core",
				"css",
				"data",
				"deferred",
				"deprecated",
				"dimensions",
				"effects",
				"event",
				"manipulation",
				"offset",
				"queue",
				"selector",
				"serialize",
				"support",
<<<<<<< HEAD
				"traversing"
			]
		},
		watch: {
			files: [ "<%= jshint.all.src %>" ],
=======
				"traversing",
				"tween"
			]
		},
		watch: {
			files: [ "<%= eslint.dev.src %>" ],
>>>>>>> refs/remotes/jquery/master
			tasks: [ "dev" ]
		},
		uglify: {
			all: {
				files: {
					"dist/<%= grunt.option('filename').replace('.js', '.min.js') %>":
						"dist/<%= grunt.option('filename') %>"
				},
				options: {
					preserveComments: false,
					sourceMap: true,
<<<<<<< HEAD
					sourceMapName: "dist/jquery.min.map",
=======
					ASCIIOnly: true,
					sourceMapName:
						"dist/<%= grunt.option('filename').replace('.js', '.min.map') %>",
>>>>>>> refs/remotes/jquery/master
					report: "min",
					beautify: {
						"ascii_only": true
					},
					banner: "/*! jQuery v<%= pkg.version %> | " +
<<<<<<< HEAD
						"(c) jQuery Foundation | jquery.org/license */",
=======
						"(c) JS Foundation and other contributors | jquery.org/license */",
>>>>>>> refs/remotes/jquery/master
					compress: {
						"hoist_funs": false,
						loops: false,
						unused: false
					}
				}
			}
		}
	} );
<<<<<<< HEAD

	// Load grunt tasks from NPM packages
	require( "load-grunt-tasks" )( grunt );

	// Integrate jQuery specific tasks
	grunt.loadTasks( "build/tasks" );

	grunt.registerTask( "lint", [ "jsonlint", "jshint", "jscs" ] );

	// Don't run Node-related tests in Node.js < 1.0.0 as they require an old
	// jsdom version that needs compiling, making it harder for people to compile
	// jQuery on Windows. (see gh-2519)
	grunt.registerTask( "test_fast", runJsdomTests ? [ "node_smoke_tests" ] : [] );

	grunt.registerTask( "test", [ "test_fast" ] );

	// Short list as a high frequency watch task
	grunt.registerTask( "dev", [ "build:*:*", "lint", "uglify", "remove_map_comment", "dist:*" ] );

	grunt.registerTask( "default", [ "dev", "test_fast", "compare_size" ] );
=======

	// Load grunt tasks from NPM packages
	require( "load-grunt-tasks" )( grunt );

	// Integrate jQuery specific tasks
	grunt.loadTasks( "build/tasks" );

	grunt.registerTask( "lint", [
		"jsonlint",

		// Running the full eslint task without breaking it down to targets
		// would run the dist target first which would point to errors in the built
		// file, making it harder to fix them. We want to check the built file only
		// if we already know the source files pass the linter.
		"eslint:dev",
		"eslint:dist"
	] );

	grunt.registerTask( "lint:newer", [
		"newer:jsonlint",

		// Don't replace it with just the task; see the above comment.
		"newer:eslint:dev",
		"newer:eslint:dist"
	] );

	grunt.registerTask( "test:fast", "node_smoke_tests" );
	grunt.registerTask( "test:slow", "promises_aplus_tests" );

	grunt.registerTask( "test", [
		"test:fast",
		"test:slow"
	] );

	grunt.registerTask( "dev", [
		"build:*:*",
		"newer:eslint:dev",
		"newer:uglify",
		"remove_map_comment",
		"dist:*",
		"compare_size"
	] );

	grunt.registerTask( "default", [
		"eslint:dev",
		"build:*:*",
		"uglify",
		"remove_map_comment",
		"dist:*",
		"eslint:dist",
		"test:fast",
		"compare_size"
	] );
>>>>>>> refs/remotes/jquery/master
};
