// beforeAll(() => {
// 	Object.defineProperty(window, 'matchMedia', {
// 		value: jest.fn().mockImplementation((query) => ({
// 			matches: false,
// 			media: query,
// 			onchange: null,
// 			addListener: jest.fn(),
// 			removeListener: jest.fn(),
// 			addEventListener: jest.fn(),
// 			removeEventListener: jest.fn(),
// 			dispatchEvent: jest.fn(),
// 		})),
// 	});
// });

// eslint-disable-next-line @typescript-eslint/no-require-imports
require('@testing-library/jest-dom');

// eslint-disable-next-line no-undef
beforeAll(() => {
	window.matchMedia =
		window.matchMedia ||
		function mockMatchMedia() {
			return {
				matches: false,
				addListener() {},
				removeListener() {},
			};
		};
});
