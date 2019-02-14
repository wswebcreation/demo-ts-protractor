import {browser, ElementFinder, protractor} from 'protractor';
import {DEFAULT_TIMEOUT} from './e2eConstants';

export async function waitForElementVisible(elementFinder: ElementFinder, timeout: number = DEFAULT_TIMEOUT): Promise<void> {
	const EC = protractor.ExpectedConditions;

	// Waits for the element to be visible on the dom.
	await browser.wait(EC.visibilityOf(elementFinder), timeout);
}