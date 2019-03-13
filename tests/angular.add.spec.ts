import {browser, element, by} from 'protractor';

describe('Angular page', () => {
	it('Add a todo', async () => {
		// Add the logger
		await browser.executeScript("sauce:context=Add a todo");

		// Go to the url
		await browser.get('http://www.angularjs.org');

		await element(by.model('todoList.todoText')).sendKeys('write a protractor test');
		await element(by.css('[value="add"]')).click();

		const todoList = element.all(by.repeater('todo in todoList.todos'));

		expect(await todoList.count()).toEqual(3);
		expect(await todoList.last().getText()).toEqual('write a protractor test');
	});
});

