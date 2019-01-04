import {browser, Config} from 'protractor';
import {SpecReporter} from 'jasmine-spec-reporter';

/**
 * See the config file for all the options, this config file holds the basics
 * https://github.com/angular/protractor/blob/master/lib/config.ts
 */
export let config: Config = {
	// ---------------------------------------------------------------------------
	// ----- How to connect to Browser Drivers -----------------------------------
	// ---------------------------------------------------------------------------
	// ---- To use remote browsers via Sauce Labs --------------------------------

	/**
	 * If the sauceUser and sauceKey are specified, seleniumServerJar will be
	 * ignored. The tests will be run remotely using Sauce Labs.
	 */
	sauceUser: process.env.SAUCE_USERNAME,
	/**
	 * If the sauceUser and sauceKey are specified, seleniumServerJar will be
	 * ignored. The tests will be run remotely using Sauce Labs.
	 */
	sauceKey: process.env.SAUCE_ACCESS_KEY,
	/**
	 * If you run your tests on SauceLabs you can specify the region you want to run your tests
	 * in via the `sauceRegion` property. Available short handles for regions are:
	 * us: us-west-1 (default)
	 * eu: eu-central-1
	 */
	sauceRegion: 'eu',

	// ---- To use remote devices via TestObject ---------------------------------

	// testobjectUser: process.env.RDC_USERNAME,
	// testobjectKey: process.env.RDC_ACCESS_KEY,

	// ---------------------------------------------------------------------------
	// ----- What tests to run ---------------------------------------------------
	// ---------------------------------------------------------------------------

	/**
	 * Required. Spec patterns are relative to the location of this config.
	 *
	 * Example:
	 * specs: [
	 *   'spec/*_spec.js'
	 * ]
	 */
	specs: [
		'tests/angular.spec.js'
	],

	// ---------------------------------------------------------------------------
	// ----- How to set up browsers ----------------------------------------------
	// ---------------------------------------------------------------------------

	/**
	 * If you would like to run more than one instance of WebDriver on the same
	 * tests, use multiCapabilities, which takes an array of capabilities.
	 * If this is specified, capabilities will be ignored.
	 */
	multiCapabilities: [
		{
			browserName: 'chrome',
			version: 'latest',
			platform: 'Windows 10',
			name: 'demo-ts-protractor-angular',
		}
	],

	// ---------------------------------------------------------------------------
	// ----- Global test information
	// ---------------------------------------------
	// ---------------------------------------------------------------------------

	/**
	 * A base URL for your application under test. Calls to protractor.get()
	 * with relative paths will be resolved against this URL (via url.resolve)
	 */
	baseUrl: 'https://www.saucedemo.com',

	/**
	 * A callback function called once protractor is ready and available, and
	 * before the specs are executed. If multiple capabilities are being run,
	 * this will run once per capability.
	 *
	 * You can specify a file containing code to run by setting onPrepare to
	 * the filename string. onPrepare can optionally return a promise, which
	 * Protractor will wait for before continuing execution. This can be used if
	 * the preparation involves any asynchronous calls, e.g. interacting with
	 * the browser. Otherwise Protractor cannot guarantee order of execution
	 * and may start the tests before preparation finishes.
	 *
	 * At this point, global variable 'protractor' object will be set up, and
	 * globals from the test framework will be available. For example, if you
	 * are using Jasmine, you can add a reporter with:
	 *
	 *    jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter(
	 *      'outputdir/', true, true));
	 *
	 * If you need access back to the current configuration object,
	 * use a pattern like the following:
	 *
	 *    return browser.getProcessedConfig().then(function(config) {
	 *      // config.capabilities is the CURRENT capability being run, if
	 *      // you are using multiCapabilities.
	 *      console.log('Executing capability', config.capabilities);
	 *    });
	 */
	onPrepare: async () => {
		await browser.waitForAngularEnabled(false);
		//
		// const EC = protractor.ExpectedConditions;
		// // Waits for the element with id 'abc' to be visible on the dom.
		// browser.waitForVisible = async (selector: string, timeout: number): Promise<any> => {
		// 	return browser.wait(EC.visibilityOf($(selector)), timeout);
		// };

		jasmine.getEnv().addReporter(new SpecReporter({
			spec: {
				displayStacktrace: true
			}
		}));
	},

	// ---------------------------------------------------------------------------
	// ----- The test framework
	// --------------------------------------------------
	// ---------------------------------------------------------------------------

	/**
	 * Test framework to use. This may be one of: jasmine, mocha or custom.
	 * Default value is 'jasmine'
	 *
	 * When the framework is set to "custom" you'll need to additionally
	 * set frameworkPath with the path relative to the config file or absolute:
	 *
	 *   framework: 'custom',
	 *   frameworkPath: './frameworks/my_custom_jasmine.js',
	 *
	 * See github.com/angular/protractor/blob/master/lib/frameworks/README.md
	 * to comply with the interface details of your custom implementation.
	 *
	 * Jasmine is fully supported as test and assertion frameworks.
	 * Mocha has limited support. You will need to include your
	 * own assertion framework (such as Chai) if working with Mocha.
	 */
	framework: 'jasmine',

	/**
	 * Options to be passed to jasmine.
	 *
	 * See https://github.com/jasmine/jasmine-npm/blob/master/lib/jasmine.js
	 * for the exact options available.
	 */
	jasmineNodeOpts: {
		print: () => {
		}
	},

	/**
	 * Enable/disable the WebDriver Control Flow.
	 *
	 * WebDriverJS (and by extention, Protractor) uses a Control Flow to manage the order in which
	 * commands are executed and promises are resolved (see docs/control-flow.md for details).
	 * However, as syntax like `async`/`await` are being introduced, WebDriverJS has decided to
	 * deprecate the control flow, and have users manage the asynchronous activity themselves
	 * (details here: https://github.com/SeleniumHQ/selenium/issues/2969).
	 *
	 * At the moment, the WebDriver Control Flow is still enabled by default. You can disable it by
	 * setting the environment variable `SELENIUM_PROMISE_MANAGER` to `0`.  In a webdriver release in
	 * Q4 2017, the Control Flow will be disabled by default, but you will be able to re-enable it by
	 * setting `SELENIUM_PROMISE_MANAGER` to `1`.  At a later point, the control flow will be removed
	 * for good.
	 *
	 * If you don't like managing environment variables, you can set this option in your config file,
	 * and Protractor will handle enabling/disabling the control flow for you.  Setting this option
	 * is higher priority than the `SELENIUM_PROMISE_MANAGER` environment variable.
	 *
	 * @type {boolean=}
	 */
	SELENIUM_PROMISE_MANAGER: false,
};