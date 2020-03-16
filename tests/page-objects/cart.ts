import Base from './base';
import {$, $$, ElementArrayFinder, ElementFinder} from 'protractor';

const SCREEN_SELECTOR = '#cart_contents_container';

class CartContent extends Base {
	constructor() {
		super(SCREEN_SELECTOR);
	}

	get screen(): ElementFinder {
		return $(SCREEN_SELECTOR);
	}

	get checkoutButton(): ElementFinder {
		return $('.checkout_button');
	}

	get continueShoppingButton(): ElementFinder {
		return $('.btn_secondary');
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
	 * Get the text of the cart item text
	 */
	async getItemText(needle: string | number): Promise<string> {
		return (await this.swagItem(needle)).getText();
	}

	/**
	 * Remove an item from the cart
	 */
	async removeItem(needle: string | number): Promise<void> {
		return (await this.swagItem(needle)).$('.remove-from-cart-button').click();
	}

	/**
	 * Continue shopping
	 */
	async continueShopping(): Promise<void> {
		return this.continueShoppingButton.click();
	}

	/**
	 * Go to the checkout process
	 *
	 * @return {void}
	 */
	async goToCheckout(): Promise<void> {
		return this.checkoutButton.click();
	}
}

export default new CartContent();
