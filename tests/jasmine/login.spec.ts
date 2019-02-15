import {browser} from 'protractor';
import {LOGIN_ERROR_MESSAGES, LOGIN_USERS} from '../helpers/e2eConstants';
import LoginScreen from '../page-objects/login';
import InventoryListScreen from '../page-objects/inventoryList';

describe('Login', () => {
	beforeEach(async () => {
		// Navigate to the url of the Sauce Labs Sample app
		await browser.get('/');

		// Wait for the page to be loaded
		await LoginScreen.waitForIsDisplayed();
	});

	it('should be able to login with a standard user', async () => {

		// Sign in
		await LoginScreen.signIn(LOGIN_USERS.STANDARD);
		await InventoryListScreen.waitForIsDisplayed();

		// Assert that the inventory page displayed appropriately
		expect(await InventoryListScreen.isDisplayed()).toEqual(true);
	});

	it('should not be able to login with a locked user', async () => {
		await LoginScreen.signIn(LOGIN_USERS.LOCKED);

		expect(await LoginScreen.getErrorMessage()).toContain(
			LOGIN_ERROR_MESSAGES.LOCKED,
			'The error message is not as expected',
		);
	});

	it('should show an error when no username is provided', async () => {
		await LoginScreen.signIn(LOGIN_USERS.NO_USER_DETAILS);

		expect(await LoginScreen.getErrorMessage()).toContain(
			LOGIN_ERROR_MESSAGES.NO_USER_DETAILS,
			'The error message is not as expected',
		);
	});

	it('should show an error when no password is provided', async () => {
		await LoginScreen.signIn(LOGIN_USERS.NO_PASSWORD);

		expect(await LoginScreen.getErrorMessage()).toContain(
			LOGIN_ERROR_MESSAGES.NO_PASSWORD,
			'The error message is not as expected',
		);
	});

	it('should show an error when no match is found', async () => {
		await LoginScreen.signIn(LOGIN_USERS.NO_MATCH);

		expect(await LoginScreen.getErrorMessage()).toContain(
			LOGIN_ERROR_MESSAGES.NO_MATCH,
			'The error message is not as expected',
		);
	});
});
