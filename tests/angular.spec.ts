import {browser, element, by} from 'protractor';

describe('Angular page', () => {
	it('As a visitor I want to be greeted', async () => {
		// Add the logger
		await browser.executeScript("sauce:context=As a visitor I want to be greeted");
		// Go to the url
		await browser.get('http://www.angularjs.org');

		await element(by.model('yourName')).sendKeys('Julie');
		expect(await element(by.binding('yourName')).getText()).toEqual('Hello Julie!')
	});

	it('Validate todo list', async () => {
		// Add the logger
		await browser.executeScript("sauce:context=Validate todo list");

		// Go to the url
		await browser.get('http://www.angularjs.org');

		const todoList = element.all(by.repeater('todo in todoList.todos'));

		expect(todoList.count()).toEqual(2);
		expect(await todoList.last().getText()).toEqual('build an AngularJS app');
	});

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

