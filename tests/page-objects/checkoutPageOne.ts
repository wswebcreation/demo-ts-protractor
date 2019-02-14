import Base from './base';
import {$, ElementFinder} from 'protractor';
import {waitForElementVisible} from '../helpers/utils';

const SCREEN_SELECTOR = '#checkout_info_container';

class CheckoutPageOne extends Base {
	constructor() {
		super(SCREEN_SELECTOR);
	}

	get screen(): ElementFinder {
		return $(SCREEN_SELECTOR);
	}

	get cancelButton(): ElementFinder {
		return $('.cart_cancel_link');
	}

	get continueCheckoutButton(): ElementFinder {
		return $('.cart_checkout_link');
	}

	get firstName(): ElementFinder {
		return $('[data-test="firstName"]');
	}

	get lastName(): ElementFinder {
		return $('[data-test="lastName"]');
	}

	get postalCode(): ElementFinder {
		return $('[data-test="postalCode"]');
	}

	get errorMessage(): ElementFinder {
		return $('[data-test="error"]');
	}

	/**
	 * Submit personal info
	 */
	async submitPersonalInfo(personalInfo: { firstName: string, lastName: string, zip: string }): Promise<void> {
		const {firstName, lastName, zip} = personalInfo;

		await this.waitForIsDisplayed();
		await this.firstName.sendKeys(firstName);
		await this.lastName.sendKeys(lastName);
		await this.postalCode.sendKeys(zip);
		await this.continueCheckoutButton.click();
	}

	/**
	 * Get the text or the error message container
	 */
	async getErrorMessage(): Promise<string> {
		await waitForElementVisible(this.errorMessage);

		return this.errorMessage.getText();
	}

	/**
	 * Check if the error message is displayed
	 */
	async isErrorMessageDisplayed(): Promise<boolean> {
		return this.errorMessage.isPresent();
	}

	/**
	 * Cancel checkout
	 */
	async cancelCheckout(): Promise<void> {
		return this.cancelButton.click();
	}
}

export default new CheckoutPageOne();
