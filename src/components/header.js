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
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const headersData = [
  /*
  {
    label: "Register",
    href: "/register",
  },
  */
  {
    label: "Hotel",
    href: "/hotel",
  },
  {
    label: "Guests",
    href: "/guests",
    children: [
    {
      label: "All Guests",
      href: "/guests",
    },
    {
      label: "Phoebe",
      href: "/guests/phoebe"
    },
    {
      label: "Megan Shipman",
      href: "/guests/meganshipman"
    },
    {
      label: "Amina du Jean",
      href: "/guests/aminadujean"
    },
    {
      label: "Rintaichou",
      href: "/guests/rintaichou"
    },
    ]
  },
  {
    label: "Events",
    href: "/events",
    children: [
    {
        label: "Events",
        href: "/events"
    },
    {
        label: "Main Auditorium",
        href: "/events/mainauditorium"
    },
    {
        label: "Class A",
        href: "/events/classa"
    },
    {
        label: "Northern Lights",
        href: "/events/northernlights"
    },
    ]
  },
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
      label: "Blog",
      href: "/blog"
    },
    {
      label: "Contact",
      href: "/contact"
    },
    {
      label: "Policies",
      href: "/policies"
    },
    {
      label: "Partners",
      href: "/partners"
    },
    {
      label: "Newsletter Signup",
      href: "/newsletter"
    },
    ]
  },
];

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: theme.palette.primary.main,
    paddingRight: "79px",
    paddingLeft: "118px",
    background: 'radial-gradient(circle, #470932 100%, #470932 100%) bottom no-repeat',
    backgroundSize: '100% 10px',
    position: 'sticky',
    "@media (max-width: 1200px)": {
      paddingLeft: 0,
      paddingRight: 0
    },
    '& .item': {
      fontSize: '1.25em'
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
    '& a': {
      boxShadow: 'none',
      fontSize: '1.5em',
      display: 'block',
      padding: '.75em'
    }
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
  });

  const handleClick = (event) => {
    setState({ [event.currentTarget.id]: true, anchorEl: event.currentTarget })
  };

  const handleClose = (id) => {
    setState({ [id]: false, anchorEl: null })
  };

  const { mobileView, drawerOpen } = state

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
        <header style={{ display: 'flex', flexDirection: 'row', marginLeft: 'auto' }} className={classes.item}>
          { getMenuButtonsDropdown(handleClick, handleClose, state) }
        </header>
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
          <Link
            to={href}
            key={href}
          >
            {label}
          </Link>
          { children ? 
            <> 
            { children.map(({ label, href }) => {
              return (
                <Link
                  to={href}
                  key={href}
                  style={{
                    marginLeft: '1em'
                  }}
                >
                  {label}
                </Link>
              )
            })}
            </>
          : 
            null
          }
          </>
        )
      })
  }

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

  const getMenuButtonsDropdown = (handleClick, handleClose, state) => {
      return headersData.map(({ label, href, children }) => {
        return (
        <Grid item key={label}>
          { children ? 
                <>
                <Button id={label} aria-controls={`idolfest-menu-${label}`} aria-haspopup="true" onMouseOver={handleClick} onClick={handleClick} aria-owns={state[label] ? `idolfest-menu-${label}` : null}>
                  <Link
                    to={href}
                  >
                    {label}
                  </Link>
                  <FontAwesomeIcon icon={['fas', 'caret-down']} style={{ marginLeft: '10px' }} />
                </Button>
                <Menu
                  anchorEl={state.anchorEl}
                  getContentAnchorEl={null}
                  keepMounted
                  disableScrollLock
                  open={state[label] ? state[label] : false}
                  onClose={handleClose.bind(this, label)}
                  id={`idolfest-menu-${label}`}
                  MenuListProps={{ onMouseLeave: handleClose.bind(this, label) }}
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                  transformOrigin={{ vertical: "top", horizontal: "center" }}
                >
                  {children.map(({ label: childLabel, href: childHref }) => {
                    return (
                      <MenuItem onClick={handleClose.bind(this, label)} key={childLabel}>
                        <Button>
                          <Link
                            to={childHref}
                          >
                            {childLabel}
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