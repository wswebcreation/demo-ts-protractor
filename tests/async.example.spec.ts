import {$, browser, protractor} from 'protractor';

describe('async', () => {
	const EC = protractor.ExpectedConditions;

	it('should be able to wait for an element after loading with EC', async () => {
		// Log the testcase name in SL
		await browser.driver.executeScript('sauce:context=It should be able to wait for an element after loading with EC');

		// Start the test
		await browser.get('https://the-internet.herokuapp.com/dynamic_loading/2');
		await $('#start button').click();

		const finish = $('#finish');

		// Log into SL that we are going to start checking for the element
		await browser.driver.executeScript('sauce:context=Start the Expected condition here');
		await browser.wait(EC.visibilityOf(finish), 15000);

		// Log into SL that we check for the text
		await browser.driver.executeScript('sauce:context=Get the text');
		expect(await finish.getText()).toEqual('Hello World!')
	});

	it('should be able to wait for an element after an async call', async () => {
		// Log the testcase name in SL
		await browser.driver.executeScript('sauce:context=It should be able to wait for an element after an async call');

		// Start the test
		await browser.get('https://the-internet.herokuapp.com/dynamic_loading/2');
		await $('#start button').click();

		const finish = $('#finish');

		// Log into SL that we are going to start checking for the element
		await browser.driver.executeScript('sauce:context=Start the async check here');
		// This is a promise, like all the other commands
		await browser.driver.executeAsyncScript(asyncCheck, '#finish');

		await browser.driver.executeScript('sauce:context=Get the text');

		// Log into SL that we check for the text
		expect(await finish.getText()).toEqual('Hello World!')
	});
});



/**
 * Check if the loader spinner is gone with an async script
 * @param {string} selector
 * @param done
 *
 * @return {boolean}
 */
function asyncCheck(selector, done) {
	var animationDone = false, timeoutId, intervalId;
	var maxTimeout = 15000;

	intervalId = setInterval(function checkFinishButtonDone() {
		var button = document.querySelector(selector);
		if (button !== null && isVisible(button)) {
			animationDone = true;
			clearInterval(timeoutId);
			clearInterval(intervalId);
			done(animationDone);
		}
	}, 50);

	/* cancel interval check after maxTimeout */
	timeoutId = setTimeout(function cancelIntervals() {
		clearInterval(timeoutId);
		clearInterval(intervalId);
		done(animationDone);
	}, maxTimeout);

	function isVisible(elem) {
		var style = getComputedStyle(elem);

		/* check some default styles */
		if (style.display === 'none') return false;
		if (style.visibility !== 'visible') return false;
		if (+style.opacity < 0.1) return false;
		if (elem.offsetWidth + elem.offsetHeight + elem.getBoundingClientRect().height + elem.getBoundingClientRect().width === 0) {
			return false;
		}

		/* Check if position of element is not outside the screen */
		const elemCenter = {
			x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
			y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
		};
		if (elemCenter.x < 0) return false;
		if (elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)) return false;
		if (elemCenter.y < 0) return false;
		if (elemCenter.y > (document.documentElement.clientHeight || window.innerHeight)) return false;
		var pointContainer:any = document.elementFromPoint(elemCenter.x, elemCenter.y);

		do {
			if (pointContainer === elem) return true;
		} while (pointContainer = pointContainer.parentNode);

		return false;
	}
}