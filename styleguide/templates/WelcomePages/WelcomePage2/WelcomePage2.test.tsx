import React from 'react';
import { Context as ResponsiveContext } from 'react-responsive';
import { render } from '@testing-library/react';
import { WelcomePage2 } from './WelcomePage2';

describe('WelcomePage2', () => {
	test('should render WelcomePage2 component without crashing', () => {
		const { container } = render(<WelcomePage2 />);
		expect(container).toBeInTheDocument();
	});
	test('matches the snapshot desktop', () => {
		const { container: desktop } = render(
			<ResponsiveContext.Provider value={{ width: 1920 }}>
				<WelcomePage2 />
			</ResponsiveContext.Provider>
		);
		expect(desktop).toMatchSnapshot();
	});
	test('matches the snapshot laptop', () => {
		const { container: laptop } = render(
			<ResponsiveContext.Provider value={{ width: 1024 }}>
				<WelcomePage2 />
			</ResponsiveContext.Provider>
		);
		expect(laptop).toMatchSnapshot();
	});
	test('matches the snapshot mobile', () => {
		const { container: mobile } = render(
			<ResponsiveContext.Provider value={{ width: 360 }}>
				<WelcomePage2 />
			</ResponsiveContext.Provider>
		);
		expect(mobile).toMatchSnapshot();
	});
});
