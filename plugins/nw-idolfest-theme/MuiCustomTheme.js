import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme,
	ThemeProvider,
	responsiveFontSizes,
	createStyles,
	withStyles } from '@material-ui/core/styles';
import './assets/fonts/fonts.css'

const Head = () =>
	<Helmet>
	<meta
		name="viewport"
		content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1"
	/>		
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
	</Helmet>;


const headerFont = `"Junegull", serif`;
const mySans = `"Open Sans", "Source Sans Pro", sans-serif`;
const BLACK = '#000000'
const WHITE = '#ffffff'
const LIGHT_PINK = '#f4a5d2'
const DARK_PINK = '#e83e9f'

const nwIdolfestTheme = isDark => responsiveFontSizes(createMuiTheme({
	palette: {
		type: isDark ? 'dark' : 'light',
		primary: {
            main: isDark ? BLACK : WHITE,
        },
        secondary: {
            main: isDark ? WHITE : BLACK
        },
		light_pink: LIGHT_PINK,
		dark_pink: DARK_PINK,
	},
	typography: {
		fontFamily: mySans,
		h1: {
			fontFamily: headerFont
		},
		h2: {
			fontFamily: headerFont
		},
		h3: {
			fontFamily: headerFont
		},
		h4: {
			fontFamily: headerFont
		},
		body1: {
			fontFamily: mySans
		}
    },
    overrides: {
		MuiPickersCalendarHeader: {
			// fix display on reg page
			iconButton: {
				flex: 1
			}
		},
        MuiCssBaseline: {
            '@global': {
				'@font-face': [mySans],
                html: {
                    height: '100%',
					overflowX: 'hidden',
                    backgroundColor: isDark ? BLACK : WHITE,
                },
                body: {
                    height: '100%',
                    backgroundColor: isDark ? BLACK : WHITE,
                },
                '#___gatsby': {
                    height: '100%',
                    backgroundColor: isDark ? BLACK : WHITE,
                },
                '#gatsby-focus-wrapper': {
                    height: '100%',
                    backgroundColor: isDark ? BLACK : WHITE,
				},
				'button a': {
					textDecoration: 'none !important',
					boxShadow: 'none !important'
				},
				'button.cta, a.MuiButton-contained': {
					backgroundColor: DARK_PINK,
					padding: '1em',
					marginTop: '1em',
				},
				'button.cta:hover, a.MuiButton-contained:hover': {
					backgroundColor: LIGHT_PINK,
				},
				footer: {
					color: isDark ? BLACK : WHITE,
				}
            },
		},
		MuiGrid: {
			container: {
			  width: "100% !important",
			  margin: "0 !important"
			}
		  },
    }
}));

// TODO: The style is changing, but something above it is more important and static
const GlobalStyles = withStyles(theme => {
    const modeColor = theme.palette.secondary.main
	return createStyles({
		'@global': {
			body: {
                transition: theme.transitions.create('background'),
				'& a': {
					color: modeColor,
					textDecoration: 'none',
					boxShadow: `inset 0px -1px 0px 0px ${modeColor}`,
					transition: theme.transitions.create('box-shadow'),
					'&:hover': {
						boxShadow: `inset 0px 0px 0px 0px ${modeColor}`
					}
				}
			},
			h1: {
				...theme.typography.h2,
				margin: theme.spacing(1, 0)
			},
			h2: {
				...theme.typography.h3,
				margin: theme.spacing(1, 0)
			},
			h3: {
				...theme.typography.h4,
				margin: theme.spacing(1, 0)
			},
			h4: {
				...theme.typography.h5,
				margin: theme.spacing(1, 0)
			},
			h5: {
				...theme.typography.h6,
				margin: theme.spacing(1, 0)
			},
			// don't use h6
			p: {
				...theme.typography.body1,
				margin: theme.spacing(1, 0),
				lineHeight: 1.25,
				fontSize: '1.5em',
				paddingBottom: '.5em'
			},
			li: {
				...theme.typography.body1
			},
			img: {
				maxWidth: '100%'
			},
			blockquote: {
				position: 'relative',
				paddingLeft: theme.spacing(2),
				borderLeft: `0.2em solid ${modeColor}`
			},
			'a.social' : {
				textDecoration: 'none',
                boxShadow: 'none',
                '& :hover': {
                    color: theme.palette.light_pink
                }
			}
		}
	});
})(() => null);

const ChildrenWithGlobalStyle = ({ children }) => {
	return <> <GlobalStyles /> {children} </>;
};

export default function MuiCustomTheme({ darkMode, children, ...props }) {
	// take away SSR rendered mode;
	useEffect(() => {
		document.body.className = '';
	}, []);
	return (
		<ThemeProvider theme={nwIdolfestTheme(darkMode)} {...props}>
            <Head />
			<CssBaseline />
			<ChildrenWithGlobalStyle>
				{children}
			</ChildrenWithGlobalStyle>
		</ThemeProvider>
	);
}

ChildrenWithGlobalStyle.propTypes = {
	children: PropTypes.node
};

MuiCustomTheme.propTypes = {
	darkMode: PropTypes.bool.isRequired,
	children: PropTypes.node
};