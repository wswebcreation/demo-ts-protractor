import {config} from './protractor.conf';

/**
 * Use sauceBuild if you want to group test capabilites by a build ID
 */
config.sauceBuild = 'Demo - parallel';

/**
 * Required. Spec patterns are relative to the location of this config.
 *
 * Example:
 * specs: [
 *   'spec/*_spec.js'
 * ]
 */
config.specs = [
	'tests/angular.add.spec.js',
	'tests/angular.greet.spec.js',
	'tests/angular.validate.spec.js',
];

/**
 * If you would like to run more than one instance of WebDriver on the same
 * tests, use multiCapabilities, which takes an array of capabilities.
 * If this is specified, capabilities will be ignored.
 */
config.multiCapabilities= [
	{
		browserName: 'chrome',
		version: 'latest',
		platform: 'Windows 10',
		name: 'demo-ts-protractor-angular',
		/**
		 * If this is set to be true, specs will be sharded by file (i.e. all
		 * files to be run by this set of capabilities will run in parallel).
		 * Default is false.
		 */
		shardTestFiles: true,
		/**
		 * Maximum number of browser instances that can run in parallel for this
		 * set of capabilities. This is only needed if shardTestFiles is true.
		 * Default is 1.
		 */
		maxInstances: 60,
	}
];

exports.config = config;