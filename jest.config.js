/** @type {import('jest').Config} */

module.exports = {
	testRegex: '((\\.|/*.)(test|spec))\\.js?$',
	transform: {
		'\\.[jt]s?$': 'babel-jest',
	},
};
