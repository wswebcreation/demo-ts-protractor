import {Before, HookScenarioResult} from 'cucumber';
import {browser} from 'protractor';

Before(async (scenario: HookScenarioResult): Promise<void> => {
	return browser.executeScript(`sauce:context=${scenario.pickle.name}`);
});
