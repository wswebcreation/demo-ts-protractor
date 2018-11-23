import {browser, element, by} from 'protractor';

describe('Login', () => {
	it('should be able to login with a standard user', async () => {
		// Navigate to the url of the Sauce Labs Sample app
		await browser.get('/');
		// Wait for the user name field to be visible
		await browser.waitForVisible('[type="text"]', 3000);
		// Type the user name string into the user name field
		await element(by.css('[type="text"]')).sendKeys('standard_user');
		// Type the password into the password field
		await element(by.css('[type="password"]')).sendKeys('secret_sauce');
		// Hit Login button
		await element(by.css('[type="submit"]')).click();

		// Synchronize on the next page and make sure it loads
		await browser.waitForVisible('#inventory_container', 3000);

		// Assert that the inventory page displayed appropriately
		expect(await element(by.css('#inventory_container')).isDisplayed()).toEqual(true)
	});
});
