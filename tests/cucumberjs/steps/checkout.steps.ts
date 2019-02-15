import {When, Then} from 'cucumber';
import {browser} from 'protractor';
import {expect} from '../helpers/chai-imports';
import CheckoutComplete from '../../page-objects/checkoutComplete';
import CheckoutPageOne from '../../page-objects/checkoutPageOne';
import CheckoutPageTwo from '../../page-objects/checkoutPageTwo';
import CartContent from '../../page-objects/cart';
import {PERSONAL_INFO} from '../../helpers/e2eConstants';

When('I go to the cart page', async () => {
	// Navigate to the url of the Sauce Labs Sample app
	await browser.get('/');

	// Set the storage
	await browser.executeScript(
		'sessionStorage.setItem("session-username", "standard_user"); sessionStorage.setItem("cart-contents", "[0]")'
	);

	// Now got to the cart page
	await browser.get('/cart.html');
	await CartContent.waitForIsDisplayed();
});

When('I submit my personal info after going to checkout', async () => {
	await CartContent.goToCheckout();

	// Submit personal info
	await CheckoutPageOne.waitForIsDisplayed();
	await CheckoutPageOne.submitPersonalInfo(PERSONAL_INFO.STANDARD);
	await CheckoutPageTwo.waitForIsDisplayed();
});

Then('I would see the checkout complete page after confirming my order', async () => {
	expect(await CheckoutPageTwo.swagItems.count()).to.equal(1);

	// Finish it
	await CheckoutPageTwo.finishCheckout();

	// Wait that the checkout was successful
	await CheckoutComplete.waitForIsDisplayed();
});