import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  Menu,
  MenuItem,
  Grid
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import { makeStyles } from '@material-ui/styles' // useTheme
import React, { useState, useEffect } from "react"
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from "gatsby"

const headersData = [
  // {
  //   label: "Register",
  //   href: "/register",
  // },
  {
    label: "Hotel",
    href: "/hotel",
  },
  // {
  //   label: "Events",
  //   href: "/events",
  // },
  // {
  //   label: "Guests",
  //   href: "/guests",
  // },
  {
    label: "Artist Alley",
    href: "/artistalley",
  },
  {
    label: "About",
    href: "/about",
    children: [
    {
      label: "The Team",
      href: "/about"
    },
    {
      label: "Contact",
      href: "/contact"
    }
    ]
  },
];

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: theme.palette.primary.main,
    paddingRight: "79px",
    paddingLeft: "118px",
    borderBottomColor: theme.palette.pink,
    background: 'radial-gradient(circle, rgba(250,210,233,1) 0%, rgba(244,165,210,1) 100%) bottom no-repeat',
    backgroundSize: '100% 10px',
    position: 'sticky',
    //height: '15vh',
    "@media (max-width: 1200px)": {
      paddingLeft: 0,
      paddingRight: 0
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerPaper: {
    background: theme.palette.pink
  },
  drawerContainer: {
    padding: "20px 30px",
  },
  dates: {
    flex: '1',
    textTransform: 'uppercase',
    "@media (max-width: 878px)": {
      flex: 'unset',
      fontSize: 'smaller',
      textAlign: 'center',
      alignItems: 'center'
    }
  }
}))

export default function Header() {  
  const classes = useStyles()
  //const theme = useTheme()

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
    anchorEl: null,
    open: false,
  });

  const handleClick = (event) => {
    setState({ open: true, anchorEl: event.currentTarget })
  };

  const handleClose = () => {
    setState({ open: false, anchorEl: null })
  };

  const { mobileView, drawerOpen } = state

  const useDropdown = true

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbar}>
        <Grid container direction='row' justify='flex-start' alignItems='center'>
        <Grid item>
          <Link to="/" style={{ textDecoration: 'none', boxShadow: 'none', fontSize: '1.5em' }}>
            {idolfestLogo}
          </Link>
        </Grid>
        <Grid item className={classes.dates}>
          Nov 13-14, 2021 | Seattle, WA
        </Grid>
        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 'auto' }}>
          { useDropdown ? getMenuButtonsDropdown(handleClick, handleClose, state) : getMenuButtons() }
        </div>
        </Grid>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
          style={{ flex: '0' }}
        >
        <MenuIcon />
      </IconButton>

        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <Link to="/" style={{ textDecoration: 'none', boxShadow: 'none', fontSize: '1.5em' }}>
          {idolfestLogo}
        </Link>
        <div className={classes.dates} style={{ display: 'flex', flexDirection: 'column', marginLeft: 'auto', alignItems: 'flex-end' }}>
          <div>Nov 13-14, 2021</div>
          <div>Seattle, WA</div>
        </div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href, children }) => {
        return (
          <>
          { children ? 
            <> 
            { children.map(({ label, href }) => {
              return (
                <Link
                  to={href}
                  key={href}
                  style={{
                    fontSize: '1.5em',
                    display: 'block',
                    padding: '.75em'
                  }}
                >
                  {label}
                </Link>
              )
            })}
            </>
          : 
            <Link
              to={href}
              key={href}
              style={{
                fontSize: '1.5em',
                display: 'block',
                padding: '.75em'
              }}
            >
              {label}
            </Link>
          }
          </>
        )
      })
  }
/*
  const getDrawerChoices = () => {
    return headersData.map(({ label, href, children }) => {
      { children ?
          { children.map(({ label, href }) => {
            return (<Link
              to={href}
              key={href}
              style={{
                fontSize: '1.5em',
                display: 'block',
                padding: '.75em'
              }}
            >
              {label}
            </Link>)
          })}
          :
          <Link
            to={href}
            key={href}
            style= {{ 
              fontSize: '1.5em',
              display: 'block',
              padding: '.75em'
            }}
          >
            {label}
          </Link>
        }
      )
    })
  }
  */

  const idolfestLogo = (
    <StaticImage
          layout='constrained'
          // This is a presentational image, so the alt should be an empty string
          alt=''
          width={300}
          transformOptions={{fit: "contain"}}
          src='../images/logo/Logo Pink.svg'
          />
  );

  const getMenuButtons = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Grid item key={href}>
            <Button>
              <Link
                to={href} 
                style={{ 
                  fontSize: '1.5em'
                }}
                >
                {label}
              </Link>
            </Button>
          </Grid>
        );
    })
  };

  const getMenuButtonsDropdown = (handleClick, handleClose, state) => {
      return headersData.map(({ label, href, children }) => {
        return (
        <Grid item key={label}>
          { children ? 
                <>
                <Button aria-controls="simple-menu" aria-haspopup="true" onMouseOver={handleClick} onClick={handleClick} aria-owns={state.open ? `idolfest-menu-${label}` : null}>
                  <div style={{
                    fontSize: '1.5em'
                  }}>{label}</div>
                </Button>
                <Menu
                  anchorEl={state.anchorEl}
                  keepMounted
                  open={state.open}
                  onClose={handleClose}
                  onRequestClose={handleClose}
                  id={`idolfest-menu-${label}`}
                  MenuListProps={{ onMouseLeave: handleClose }}
                >
                  {children.map(({ label, href }) => {
                    return (
                      <MenuItem onClick={handleClose}>
                        <Button>
                          <Link
                            to={href} 
                            style={{ 
                              fontSize: '1.5em'
                            }}
                          >
                            {label}
                          </Link>
                        </Button>
                      </MenuItem>
                    );
                  })}
                </Menu>
                </>
            :
            <Button>
              <Link
                to={href}
                style={{
                  fontSize: '1.5em'
                }}
              >
                {label}
              </Link>
            </Button>
          }
          </Grid>
      )
    })
}

  return (
    <header>
      <AppBar className={classes.header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}