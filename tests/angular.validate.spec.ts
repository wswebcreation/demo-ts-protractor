import {browser, element, by} from 'protractor';

describe('Angular page', () => {
	it('Validate todo list', async () => {
		// Add the logger
		await browser.executeScript("sauce:context=Validate todo list");

		// Go to the url
		await browser.get('http://www.angularjs.org');

		const todoList = element.all(by.repeater('todo in todoList.todos'));

		expect(todoList.count()).toEqual(2);
		expect(await todoList.last().getText()).toEqual('build an AngularJS app');
	});
});

