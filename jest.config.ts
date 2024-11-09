/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
	testEnvironment: 'jsdom',
	transform: {
		'^.+.tsx?$': ['ts-jest', {}],
	},
	setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
	moduleNameMapper: {
		'^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': '<rootDir>/__mocks__/fileMock.ts',
		'^@/(.*)$': '<rootDir>/src/$1',
	},
	coverageDirectory: 'coverage',
	coveragePathIgnorePatterns: ['/node_modules/'],
};
