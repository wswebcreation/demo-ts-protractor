import {$, browser, ElementFinder} from 'protractor';

class AppHeader {
	get cart(): ElementFinder {
		return $('.shopping_cart_link');
	}

	/**
	 * Get the cart amount
	 */
	async getCartAmount(): Promise<number> {
		await browser.sleep(500);

		return +(await (this.cart.getText()));
	}

	/**
	 * Open the cart
	 */
	async openCart(): Promise<void> {
		return this.cart.click();
	}
}

export default new AppHeader();
