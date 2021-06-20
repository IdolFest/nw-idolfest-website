import React from 'react';
import PropTypes from 'prop-types';
import ThemeTopLevelProvider from './ThemeTopLevelProvider';

export const wrapRootElement = ({ element }) =>
	<ThemeTopLevelProvider initTheme='dark'>
		{element}
	</ThemeTopLevelProvider>;

wrapRootElement.propTypes = {
	element: PropTypes.node
};