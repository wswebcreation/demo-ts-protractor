# Important News
If you look at Protractor you can get the feeling that, in spite of all the effort that the Open Source Community is putting in it, it is not being maintained by Google anymore.
To be honest, I'm pretty sure about it. If you look at the facts, see [here](https://github.com/angular/protractor/graphs/contributors), you will notice that:
- the amount of issues is increasing
- the amount of PR's is increasing
- the activity in the project is decreasing

This is not giving me a good feeling. As a contributor to the Protractor project in the last years, I also have the feeling that there won't be a big chance that this is going to change.
 
I'm not the only one who thinks about Protractor like this, please take a look at [this great article](https://dev.to/davert/5-reasons-you-should-not-use-protractor-in-2019-3l4b) which might also give you some insights.

# TypeScript demonstration scripts for Protractor

Here you'll find some sample code on how to get started with Protractor and parallel execution on Sauce Labs. The tests are written with TypeScript.

> **Note 1:** This project holds a JASMINE and a CUCUMBERJS setup, see the configuration files in the root of this project and the test folders int he `./tests/`-folder for all the tests

> **Note 2:** This setup uses TypeScript, the main language for developing Angular-projects. By running the test command, see below, all the files, including the config file, are being transpiled to standard JS files.

## Getting started
Make sure you have a valid NodeJS environment set up. Then:

- Clone the project to your machine with `git clone https://github.com/saucelabs-training/demo-ts-protractor.git`
- Install all dependencies with `npm install`
- After all dependencies are installed make sure you've setup your Sauce Labs account with a username and an access key, save them to your environment variables with the name `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY`, or `RDC_USERNAME` and `RDC_ACCESS_KEY` for connecting to the Real Device Cloud.
- Run `npm run test.jasmine` to run the Jasmine tests against your cloud
- Run `npm run test.cucumber` to run the CucumberJS tests against your cloud

After running a test you will get a console log like this for Jasmine

```log
➜  demo-ts-protractor git:(master) ✗ npm run test.jasmine

> demo-ts-protractor@0.2.0 pretest.jasmine /Users/wswebcreation/demo-ts-protractor
> npm run tsc


> demo-ts-protractor@0.2.0 tsc /Users/wswebcreation/demo-ts-protractor
> tsc


> demo-ts-protractor@0.2.0 test.jasmine /Users/wswebcreation/demo-ts-protractor
> protractor output/protractor.jasmine.conf.js

[09:30:24] I/launcher - Running 8 instances of WebDriver
.......[09:31:04] I/testLogger - 
------------------------------------

[09:31:04] I/testLogger - [chrome latest Windows 10 #01-2] PID: 27588
[chrome latest Windows 10 #01-2] Specs: /Users/wswebcreation/demo-ts-protractor/output/tests/jasmine/swag.list.spec.js
[chrome latest Windows 10 #01-2] 
[chrome latest Windows 10 #01-2] [09:30:24] I/sauce - Using SauceLabs selenium server at https://ondemand.saucelabs.com:443/wd/hub
[chrome latest Windows 10 #01-2] Jasmine started
[chrome latest Windows 10 #01-2] 
[chrome latest Windows 10 #01-2]   Swag List
[chrome latest Windows 10 #01-2]     ✓ should validate that all products are present
[chrome latest Windows 10 #01-2]     ✓ should validate that a product can be added to a cart
[chrome latest Windows 10 #01-2] 
[chrome latest Windows 10 #01-2] Executed 2 of 2 specs SUCCESS in 27 secs.
[chrome latest Windows 10 #01-2] [09:31:02] I/sauce - SauceLabs results available at http://saucelabs.com/jobs/5b60f65fcf3c480ab89d504e9c36665e

[09:31:04] I/testLogger - 

//...

[09:32:15] I/testLogger - 

[09:32:15] I/launcher - 0 instance(s) of WebDriver still running
[09:32:15] I/launcher - chromelatest #01-2 passed
[09:32:15] I/launcher - firefoxlatest #11-3 passed
[09:32:15] I/launcher - firefoxlatest #11-2 passed
[09:32:15] I/launcher - chromelatest #01-3 passed
[09:32:15] I/launcher - chromelatest #01-0 passed
[09:32:15] I/launcher - firefoxlatest #11-0 passed
[09:32:15] I/launcher - chromelatest #01-1 passed
[09:32:15] I/launcher - firefoxlatest #11-1 passed
```

For CucumberJS you will get a console log like this. The link will show you a nice CucumberJS report

```log
➜  demo-ts-protractor git:(master) ✗ npm run test.cucumber

> demo-ts-protractor@0.2.0 pretest.cucumber /Users/wswebcreation/demo-ts-protractor
> npm run tsc


> demo-ts-protractor@0.2.0 tsc /Users/wswebcreation/demo-ts-protractor
> tsc


> demo-ts-protractor@0.2.0 test.cucumber /Users/wswebcreation/demo-ts-protractor
> protractor output/protractor.cucumber.conf.js

[09:23:24] I/launcher - Running 6 instances of WebDriver
...........[09:24:12] I/testLogger -
------------------------------------

[09:24:12] I/testLogger - [chrome latest Windows 10 #01-2] PID: 27362
[chrome latest Windows 10 #01-2] Specs: /Users/wswebcreation/demo-ts-protractor/tests/cucumberjs/features/swag.list.feature
[chrome latest Windows 10 #01-2]
[chrome latest Windows 10 #01-2] [09:23:24] I/sauce - Using SauceLabs selenium server at https://ondemand.saucelabs.com:443/wd/hub
[chrome latest Windows 10 #01-2] ...........
[chrome latest Windows 10 #01-2]
[chrome latest Windows 10 #01-2] 2 scenarios (2 passed)
[chrome latest Windows 10 #01-2] 7 steps (7 passed)
[chrome latest Windows 10 #01-2] 0m31.337s
[chrome latest Windows 10 #01-2] [09:24:10] I/sauce - SauceLabs results available at http://saucelabs.com/jobs/96f9b10b8d70482b8a577302017da2d8
[chrome latest Windows 10 #01-2]
[chrome latest Windows 10 #01-2]
[chrome latest Windows 10 #01-2] =====================================================================================
[chrome latest Windows 10 #01-2]     Multiple Cucumber HTML report generated in:
[chrome latest Windows 10 #01-2]
[chrome latest Windows 10 #01-2]     /Users/wswebcreation/demo-ts-protractor/.tmp/report/index.html
[chrome latest Windows 10 #01-2] =====================================================================================
[chrome latest Windows 10 #01-2]

//.........

[09:25:15] I/testLogger -

[09:25:15] I/launcher - 0 instance(s) of WebDriver still running
[09:25:15] I/launcher - chromelatest #01-2 passed
[09:25:15] I/launcher - firefoxlatest #11-0 passed
[09:25:15] I/launcher - firefoxlatest #11-2 passed
[09:25:15] I/launcher - chromelatest #01-0 passed
[09:25:15] I/launcher - chromelatest #01-1 passed
[09:25:15] I/launcher - firefoxlatest #11-1 passed
```

> **Note:**

> Protractor already holds the Sauce-service to connect to Sauce Labs. It will automatically update the testrun in the Sauce Labs cloud for you 
