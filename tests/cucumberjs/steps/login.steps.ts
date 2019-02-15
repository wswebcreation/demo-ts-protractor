import {When, Then, Given} from 'cucumber';
import {browser} from 'protractor';
import {expect} from '../helpers/chai-imports';
import LoginScreen from '../../page-objects/login';
import {LOGIN_ERROR_MESSAGES, LOGIN_USERS} from '../../helpers/e2eConstants';
import InventoryListScreen from '../../page-objects/inventoryList';

Given('I launch de Sauce Labs Swag Lab', async () => {
	// Navigate to the url of the Sauce Labs Sample app
	await browser.get('/');

	// Wait for the page to be loaded
	await LoginScreen.waitForIsDisplayed();
});

When('I login as a {string} user', async (userType: string) => {
	let user;
	switch (userType) {
		case 'locked':
			user = LOGIN_USERS.LOCKED;
			break;
		case 'no username':
			user = LOGIN_USERS.NO_USER_DETAILS;
			break;
		case 'no password':
			user = LOGIN_USERS.NO_PASSWORD;
			break;
		case 'no match':
			user = LOGIN_USERS.NO_MATCH;
			break;
		default:
			user = LOGIN_USERS.STANDARD;
	}

	await LoginScreen.signIn(user);
});

Then('I should be able to see the swag item overview page', async () => {
	await InventoryListScreen.waitForIsDisplayed();

	// Assert that the inventory page displayed appropriately
	expect(await InventoryListScreen.isDisplayed()).to.equal(true);
});

Then('I should be able to see the {string} error message', async (errorType: string) => {
	let errorMessage;

	switch (errorType) {
		case 'locked':
			errorMessage = LOGIN_ERROR_MESSAGES.LOCKED;
			break;
		case 'no username':
			errorMessage = LOGIN_ERROR_MESSAGES.NO_USER_DETAILS;
			break;
		case 'no password':
			errorMessage = LOGIN_ERROR_MESSAGES.NO_PASSWORD;
			break;
		case 'no match':
			errorMessage = LOGIN_ERROR_MESSAGES.NO_MATCH;
			break;
		default:
			return Promise.reject(`The error message for '${errorType}' does not exists`);
	}

	// Assert that the error message text is correct
	expect(await LoginScreen.getErrorMessage()).to.contain(errorMessage, 'The error message is not as expected');
});