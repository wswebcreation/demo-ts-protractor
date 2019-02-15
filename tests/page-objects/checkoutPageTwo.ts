import Base from './base';
import {$, $$, ElementArrayFinder, ElementFinder} from 'protractor';

const SCREEN_SELECTOR = '#checkout_summary_container';

class CheckoutPageTwo extends Base {
	constructor() {
		super(SCREEN_SELECTOR);
	}

	get screen(): ElementFinder {
		return $(SCREEN_SELECTOR);
	}

	async title(needle: string | number): Promise<ElementFinder> {
		return (await this.swagItem(needle)).$('.inventory_item_name');
	}

	async description(needle: string | number): Promise<ElementFinder> {
		return (await this.swagItem(needle)).$('.inventory_item_desc');
	}

	async price(needle: string | number): Promise<ElementFinder> {
		return (await this.swagItem(needle)).$('.inventory_item_price');
	}

	get cancelButton(): ElementFinder {
		return $('.cart_cancel_link');
	}

	get finishButton(): ElementFinder {
		return $('.cart_checkout_link');
	}

	get swagItems(): ElementArrayFinder {
		return $$('.cart_item');
	}

	/**
	 * Get a swag item based on a search string or a number of the visible items
	 */
	async swagItem(needle: string | number): Promise<ElementFinder> {
		if (typeof needle === 'string') {
			return this.swagItems.filter(async (elm: ElementFinder) => (await elm.getText()).includes(needle)).first();
		}

		return this.swagItems.get(needle);
	}

	/**
	 * Get the text of the cart
	 */
	async getSwagItemText(needle: string|number): Promise<string> {
		return `${(await this.title(needle)).getText()} ${(await this.description(needle)).getText()} ${(await this.price(needle)).getText()}`;
	}

	/**
	 * Cancel checkout
	 */
	async cancelCheckout():Promise<void> {
		return this.cancelButton.click();
	}

	/**
	 * Finsh checkout
	 */
	async finishCheckout():Promise<void> {
		return this.finishButton.click();
	}
}

export default new CheckoutPageTwo();
