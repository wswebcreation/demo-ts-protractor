import {$, ElementFinder} from 'protractor';
import Base from './base';
import {DEFAULT_TIMEOUT} from '../helpers/e2eConstants';
import {waitForElementVisible} from '../helpers/utils';

const SCREEN_SELECTOR = '#login_button_container';

class LoginScreen extends Base {
	constructor() {
		super(SCREEN_SELECTOR);
	}

	get screen(): ElementFinder {
		return $(SCREEN_SELECTOR);
	}

	get username(): ElementFinder {
		return $('#user-name');
	}

	get password(): ElementFinder {
		return $('#password');
	}

	get loginButton(): ElementFinder {
		return $('.login-button');
	}

	get errorMessage(): ElementFinder {
		return $('[data-test="error"]');
	}

	/**
	 * Sign in
	 */
	async signIn(userDetails: { password: string, username: string }): Promise<void> {
		const {password, username} = userDetails;

		await this.username.sendKeys(username);
		await this.password.sendKeys(password);
		await this.loginButton.click();
	}

	/**
	 * Get the text or the error message container
	 */
	async getErrorMessage(): Promise<string> {
		await waitForElementVisible(this.errorMessage, DEFAULT_TIMEOUT);

		return this.errorMessage.getText();
	}

	/**
	 * Check if the error message is displayed
	 */
	async isErrorMessageDisplayed(): Promise<boolean> {
		return this.errorMessage.isPresent();
	}
}

export default new LoginScreen();
