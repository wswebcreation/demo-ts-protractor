import {LOGIN_USERS, PERSONAL_INFO} from '../helpers/e2eConstants';
import CartContent from '../page-objects/cart';
import CheckoutComplete from '../page-objects/checkoutComplete';
import CheckoutPageOne from '../page-objects/checkoutPageOne';
import CheckoutPageTwo from '../page-objects/checkoutPageTwo';
import {browser} from 'protractor';

describe('Parallelization - Checkout', () => {
	beforeEach(async () => {
		// Navigate to the url of the Sauce Labs Sample app
		await browser.get('/');

		// Set the storage
		await browser.executeScript(
			'sessionStorage.setItem("session-username", "standard_user"); sessionStorage.setItem("cart-contents", "[0]")'
		);

		// Now got to the cart page
		await browser.get('/cart.html');
	});

	it('should validate that user can checkout', async () => {
		await CartContent.waitForIsDisplayed();
		await CartContent.goToCheckout();

		// Submit personal info
		await CheckoutPageOne.waitForIsDisplayed();
		await CheckoutPageOne.submitPersonalInfo(PERSONAL_INFO.STANDARD);
		await CheckoutPageTwo.waitForIsDisplayed();

		expect(await CheckoutPageTwo.swagItems.count()).toEqual(1);

		// Finish it
		await CheckoutPageTwo.finishCheckout();

		// Wait that the checkout was successful
		await CheckoutComplete.waitForIsDisplayed();
	});
});
