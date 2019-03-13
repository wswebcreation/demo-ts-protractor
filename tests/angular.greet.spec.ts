import {browser, element, by} from 'protractor';

describe('Angular page', () => {
	it('As a visitor I want to be greeted', async () => {
		// Add the logger
		await browser.executeScript("sauce:context=As a visitor I want to be greeted");
		// Go to the url
		await browser.get('http://www.angularjs.org');

		await element(by.model('yourName')).sendKeys('Julie');
		expect(await element(by.binding('yourName')).getText()).toEqual('Hello Julie!')
	});
});

