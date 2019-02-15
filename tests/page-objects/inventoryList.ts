import {$, $$, ElementArrayFinder, ElementFinder} from 'protractor';
import Base from './base';

const SCREEN_SELECTOR = '.inventory_list';

class InventoryListScreen extends Base {
	constructor() {
		super(SCREEN_SELECTOR);
	}

	get screen(): ElementFinder {
		return $(SCREEN_SELECTOR);
	}

	get swagItems(): ElementArrayFinder {
		return $$('.inventory_item');
	}

	/**
	 * Get a swag Item based on a search string or a number of the visible items
	 */
	async swagItem(needle: string | number): Promise<ElementFinder> {
		if (typeof needle === 'string') {
			return this.swagItems.filter(async (elm: ElementFinder) => (await elm.getText()).includes(needle)).first();
		}

		return this.swagItems.get(needle);
	}

	/**
	 * Get the text of the swag item text
	 */
	async getSwagItemText(needle: string | number): Promise<string> {
		return (await this.swagItem(needle)).getText();
	}

	/**
	 * Add a swag items to the cart
	 */
	async addSwagItemToCart(needle: string | number): Promise<void> {
		return (await this.swagItem(needle)).$('.add-to-cart-button').click();
	}

	/**
	 * Remove a swag items from the cart
	 */
	async removeSwagItemFromCart(needle: string | number): Promise<void> {
		return (await this.swagItem(needle)).$('.remove-from-cart-button').click();
	}

	/**
	 * Open the details of a swag item
	 */
	async openSwagItemDetails(needle: string | number): Promise<void> {
		return (await this.swagItem(needle)).click();
	}
}

export default new InventoryListScreen();
