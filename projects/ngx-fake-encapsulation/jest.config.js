var preset = require('jest-preset-angular/jest-preset');

module.exports = {
	...preset,
	preset: 'jest-preset-angular',
	setupFilesAfterEnv: ['<rootDir>/node_modules/jest-preset-angular/build/setupJest.js'],
	testMatch: ['<rootDir>/projects/ngx-fake-encapsulation/src/**/*.spec.ts'],
	globals: {
		...preset.globals,
		'ts-jest': {
			...preset.globals['ts-jest'],
			tsConfig: '<rootDir>/projects/ngx-fake-encapsulation/tsconfig.spec.json',
			isolatedModules: true,
		},
	},
};
