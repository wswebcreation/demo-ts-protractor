export const DEFAULT_TIMEOUT = 15000;
export const LOGIN_USERS = {
	LOCKED: {
		username: 'locked_out_user',
		password: 'secret_sauce',
	},
	NO_MATCH: {
		username: 'd',
		password: 'd',
	},
	NO_USER_DETAILS: {
		username: '',
		password: '',
	},
	NO_PASSWORD: {
		username: 'standard_user',
		password: '',
	},
	STANDARD: {
		username: 'standard_user',
		password: 'secret_sauce',
	},
};
export const LOGIN_ERROR_MESSAGES = {
	LOCKED: 'Epic sadface: Sorry, this user has been locked out.',
	NO_MATCH: 'Epic sadface: Username and password do not match any user in this service',
	NO_USER_DETAILS: 'Epic sadface: Username is required',
	NO_PASSWORD: 'Epic sadface: Password is required',
};
export const PERSONAL_INFO = {
	STANDARD: {
		firstName: 'Sauce',
		lastName: 'Bot',
		zip: '94105',
	},
	NO_FIRSTNAME: {
		firstName: '',
		lastName: 'Bot',
		zip: '94105',
	},
	NO_LAST_NAME: {
		firstName: 'Sauce',
		lastName: '',
		zip: '94105',
	},
	NO_POSTAL_CODE: {
		firstName: 'Sauce',
		lastName: 'Bot',
		zip: '',
	},
};
