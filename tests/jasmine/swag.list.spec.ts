import {browser} from 'protractor';
import {LOGIN_USERS} from '../helpers/e2eConstants';
import AppHeader from '../page-objects/appHeader';
import InventoryListScreen from '../page-objects/inventoryList';

describe('Swag List', () => {
	beforeEach(async () => {
		// Navigate to the url of the Sauce Labs Sample app
		await browser.get('/');

		// Set the storage
		await browser.executeScript('sessionStorage.setItem("session-username", "standard_user")');

		// Now got to the inventory page
		await browser.get('/inventory.html');

		// Wait for the page to be loaded
		await InventoryListScreen.waitForIsDisplayed();
	});

	it('should validate that all products are present', async () => {
		// Validate that the amount of shown swag items is 6
		expect(await InventoryListScreen.swagItems.count()).toEqual(6);
	});

	it('should validate that a product can be added to a cart', async () => {
		expect(await AppHeader.getCartAmount()).toEqual(
			0,
			'The amount of cart items is not equal to nothing',
		);

		// Add an item to the cart
		await InventoryListScreen.addSwagItemToCart('Backpack');

		// Validate the cart
		expect(await AppHeader.getCartAmount()).toEqual(
			1,
			'The amount of cart items is not equal to 1',
		);
	});
});