import {After, HookScenarioResult, Status} from 'cucumber';
import {browser} from 'protractor';

After(async function (scenarioResult: HookScenarioResult): Promise<string> {
	const status = scenarioResult.result.status;

	if (status === Status.FAILED) {
		const screenshot = await (browser.takeScreenshot());
		this.attach(screenshot, 'image/png');
	}

	return Promise.resolve(status);
});
