# TypeScript demonstration scripts for Protractor

Here you'll find some sample code on how to get started with Protractor and Sauce Labs, written with TypeScript.

> **Note 1:** The code doesn't hold a page-object model, it is purely to setup a Protractor project together with Sauce Labs

> **Note 2:** This setup uses TypeScript, the main language for developing Angular-projects. By running the test command, see below, all the files, including the config file, are being transpiled to standard JS files.

## Getting started
Make sure you have a valid NodeJS environment set up. Then:

- Clone the project to your machine with `git clone https://github.com/saucelabs-training/demo-ts-protractor.git`
- Install all dependencies with `npm install`
- After all dependencies are installed make sure you've setup your Sauce Labs account with a username and an access key, save them to your environment variables with the name `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY`, or `RDC_USERNAME` and `RDC_ACCESS_KEY` for connecting to the Real Device Cloud.
- Run `npm test` to run the test against your cloud

After running a test you will get a console log like this

```log
➜  demo-ts-protractor npm t                                       

> demo-ts-protractor@0.1.0 pretest /Users/demo-ts-protractor
> npm run tsc


> demo-ts-protractor@0.1.0 tsc /Users/demo-ts-protractor
> tsc


> demo-ts-protractor@0.1.0 test /Users/demo-ts-protractor
> protractor output/protractor.conf.js

[11:27:50] I/launcher - Running 1 instances of WebDriver
[11:27:50] I/sauce - Using SauceLabs selenium server at https://ondemand.saucelabs.com:443/wd/hub
Jasmine started
[11:28:14] W/element - more than one element found for locator By(css selector, #inventory_container) - the first result will be used
[11:28:16] W/element - more than one element found for locator By(css selector, #inventory_container) - the first result will be used

  Login
    ✓ should be able to login with a standard user

Executed 1 of 1 spec SUCCESS in 16 secs.
[11:28:17] I/sauce - SauceLabs results available at http://saucelabs.com/jobs/db36a94175cd424c9e371b401ebc5a2c
[11:28:18] I/launcher - 0 instance(s) of WebDriver still running
[11:28:18] I/launcher - chromelatest #01 passed

```

> **Note:**

> Protractor already holds the Sauce-service to connect to Sauce Labs. It will automatically update the testrun in the Sauce Labs cloud for you 
