var preset = require('jest-preset-angular/jest-preset');

module.exports = {
	...preset,
	preset: 'jest-preset-angular',
	setupFilesAfterEnv: ['<rootDir>/projects/ngx-fake-encapsulation/setup-jest.ts'],
	testMatch: ['<rootDir>/projects/ngx-fake-encapsulation/src/**/*.spec.ts'],
	globals: {
		...preset.globals,
		'ts-jest': {
			...preset.globals['ts-jest'],
			tsConfig: '<rootDir>/projects/ngx-fake-encapsulation/tsconfig.spec.json',
			isolatedModules: true
		},
	},
	collectCoverage: true
};
