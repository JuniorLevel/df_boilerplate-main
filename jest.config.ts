/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
	testEnvironment: 'jsdom',
	transform: {
		'^.+.tsx?$': ['ts-jest', {}],
	},
	testMatch: ['<rootDir>/src/**/*.test.(ts|tsx)'],
	setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
	testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/github-pages/'],
	moduleNameMapper: {
		'^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': '<rootDir>/__mocks__/fileMock.ts',
		'^@/(.*)$': '<rootDir>/src/$1',
	},
	coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/github-pages/'],
};
