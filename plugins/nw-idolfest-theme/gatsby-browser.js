import React from 'react';
import PropTypes from 'prop-types';
import ThemeTopLevelProvider from './ThemeTopLevelProvider';

let theme = localStorage.getItem('theme');
if ((theme === 'null' || theme === 'undefined') && typeof window !== `undefined`) {
    if (window.matchMedia('prefers-color-scheme: light').matches) {
        theme = 'light'
    } else {
        theme = 'dark'
    }
}
const initTheme = theme === 'light' || theme === 'dark' ? theme : 'dark';

export const wrapRootElement = ({ element }) =>
	<ThemeTopLevelProvider initTheme={initTheme}>
		{element}
	</ThemeTopLevelProvider>;

wrapRootElement.propTypes = {
	element: PropTypes.node
};