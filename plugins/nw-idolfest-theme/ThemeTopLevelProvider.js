import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import MuiCustomTheme from './MuiCustomTheme';
import { LightDarkProvider } from './LightDarkContext';

function ThemeTopLevelProvider({ children, initTheme }) {
	const [mode, setMode] = useState(initTheme);

	const switchToLightForPrint = useCallback(async (e) => {
		const isDark = e.type === 'afterprint'
		const val = isDark ? 'dark' : 'light';
		localStorage.setItem('theme', val);
		if (isDark) {
			addListeners()
		} else {
			removeListeners()
		}
		setMode(val);
	}, [setMode])

	const removeListeners = useCallback(async () => {
		if (typeof window !== 'undefined') {
			window.removeEventListener("beforeprint", switchToLightForPrint);
			window.removeEventListener("afterprint", switchToLightForPrint);
		}
	}, [switchToLightForPrint])

	const addListeners = useCallback(async () => {
		if (typeof window !== 'undefined') {
			window.addEventListener("beforeprint", switchToLightForPrint);
			window.addEventListener("afterprint", switchToLightForPrint);
		}
	}, [switchToLightForPrint])

	const setTheme = useCallback((isDark) => {
		const val = isDark ? 'dark' : 'light';
		localStorage.setItem('theme', val);
		if (isDark) {
			addListeners()
		} else {
			removeListeners()
		}
		setMode(val);
	}, [setMode, addListeners, removeListeners]);

	const print = useCallback(() => {
		if (typeof window !== 'undefined') {
			setTheme(false, true)
			setTimeout(() => {
				window.print()
				setTheme(true, true)
			}, 100)
		}
	}, [setTheme])

	useEffect(() => {
		if (initTheme === 'dark') {
			addListeners()
		}
	}, [])

	return (
		<MuiCustomTheme darkMode={mode === 'dark'}>
			<LightDarkProvider theme={mode}
				changeTheme={setTheme}
				print={print}
			>
				{children}
			</LightDarkProvider>
		</MuiCustomTheme>
	);
}

ThemeTopLevelProvider.propTypes = {
	children: PropTypes.node,
	initTheme: PropTypes.string.isRequired
};

export default ThemeTopLevelProvider;