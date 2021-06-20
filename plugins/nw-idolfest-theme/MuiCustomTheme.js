import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme,
	ThemeProvider,
	responsiveFontSizes,
	createStyles,
	withStyles } from '@material-ui/core/styles';

const Head = () =>
	<Helmet>
		<meta name="viewpoint" content="minimum-scale=1, initial-scale=1, width=device-width" />
		<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
	</Helmet>;

const mySerif = `"Montserrat", "Noto Serif SC", "Noto Serif", serif`;

const mySans = `"Montserrat", "Source Sans Pro", sans-serif`;
const BLACK = '#000000'
const WHITE = '#ffffff'

const myTheme = isDark => responsiveFontSizes(createMuiTheme({
	palette: {
		type: isDark ? 'dark' : 'light',
		primary: {
            main: isDark ? BLACK : WHITE,
        },
        secondary: {
            main: isDark ? WHITE : BLACK
        }
	},
	typography: {
		fontFamily: mySans,
		h1: {
			fontFamily: mySerif
		},
		h2: {
			fontFamily: mySerif
		},
		h3: {
			fontFamily: mySerif
		},
		h4: {
			fontFamily: mySerif
		},
		body1: {
			fontFamily: mySans
		}
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                html: {
                    height: '100%',
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
				'.dangerous-html p': {
						margin: 0
				},
				'.print-only': {
					display: 'none'
				},
				'@media print': {
					'.dangerous-html > ul > li': {
						listStyleType: 'square',
						listStylePosition: 'outside !important'
					},
					'.dangerous-html > ul': {
						marginBlockStart: '0',
						marginBlockEnd: '0',
					},
					'.no-print': {
						display: 'none'
					},
					'.print-only': {
						display: 'initial'
					},
					'.dangerous-html a': {
						boxShadow: 'none'
					},
					// html: {
					// 	backgroundColor: WHITE,
					// },
					// body: {
					// 	backgroundColor: WHITE,
					// },
					// '#___gatsby': {
					// 	backgroundColor: WHITE,
					// },
					// '#gatsby-focus-wrapper': {
					// 	backgroundColor: WHITE,
					// },
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
	const isLight = theme.palette.type === 'light';
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
				lineHeight: 1.75
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
		<ThemeProvider theme={myTheme(darkMode)} {...props}>
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