import { $, protractor, browser } from 'protractor';
import { DEFAULT_TIMEOUT } from '../helpers/e2eConstants';

export default class Base {
	constructor(private readonly selector: string) {
		this.selector = selector;
	}

	/**
	 * Wait for the element to be displayed
	 */
	async waitForIsDisplayed(isShown = true):Promise<any> {
		const EC = protractor.ExpectedConditions;

		if (isShown) {
			return browser.wait(EC.visibilityOf($(this.selector)), DEFAULT_TIMEOUT);
		}

		return browser.wait(EC.invisibilityOf($(this.selector)), DEFAULT_TIMEOUT);
	}

	/**
	 * Give back if the element is displayed
	 */
	async isDisplayed():Promise<boolean> {
		return $(this.selector).isPresent();
	}
}
