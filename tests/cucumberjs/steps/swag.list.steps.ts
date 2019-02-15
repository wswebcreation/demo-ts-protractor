import {Given, When, Then} from 'cucumber';
import {browser} from 'protractor';
import {expect} from '../helpers/chai-imports';
import AppHeader from '../../page-objects/appHeader';
import InventoryListScreen from '../../page-objects/inventoryList';

Given('I go to the swag list page', async () => {
	// Navigate to the url of the Sauce Labs Sample app
	await browser.get('/');

	// Set the storage
	await browser.executeScript('sessionStorage.setItem("session-username", "standard_user")');

	// Now got to the inventory page
	await browser.get('/inventory.html');

	// Wait for the page to be loaded
	await InventoryListScreen.waitForIsDisplayed();
});

When('I add the {string} to the cart', async (product: string) => {
	expect(await AppHeader.getCartAmount()).to.equal(
		0,
		'The amount of cart items is not equal to nothing',
	);

	// Add an item to the cart
	await InventoryListScreen.addSwagItemToCart(product);
});

Then('I should be able to see the swag item overview page containing {int} items', async (amount: number) => {
	// Validate the amount of swag items
	expect(await InventoryListScreen.swagItems.count()).to.equal(amount);
});

Then('the cart should be updated to with {int} item', async (amount: number) => {
	// Validate the cart
	expect(await AppHeader.getCartAmount()).to.equal(amount, `The amount of cart items is not equal to ${amount}`);
});