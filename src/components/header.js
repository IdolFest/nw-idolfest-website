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
import { useStaticQuery, graphql } from 'gatsby'
import HeaderData from './HeaderData.json'

const headersData = HeaderData.headersData
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
  },
  menuButton: {
    backgroundColor: 'transparent !important'
  }
}))

export default function Header() {  
  const classes = useStyles()
const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        shortDates,
                        longDates,
                        location
                    }
                }            
            }`
    )

const dates = site.siteMetadata.shortDates
const longDates = site.siteMetadata.shortDates
const location = site.siteMetadata.location


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

  const handleMenuButtonClick = (label, event) => {
    // If you click outside the button, move that click onto said button
    const relevantChild = event.currentTarget?.querySelector("a[href]")
    if (relevantChild) {
      relevantChild.click();
    }
    handleClose(label);
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
          {dates} | {location}
        </Grid>
        <header style={{ display: 'flex', flexDirection: 'row', marginLeft: 'auto' }} className={classes.item}>
          { getMenuButtonsDropdown(handleClick, handleClose, handleMenuButtonClick, state) }
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
          <div>{longDates}</div>
          <div>{location}</div>
        </div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.filter(h => !h.disabled).map(({ label, href, external, children }) => {
        children = children?.filter(c => !c.disabled)
        const link = external ? (
          <a 
            href={href} 
            key={href} 
            target="_blank" 
            rel="noreferrer"
          >
            {label}
          </a>) : (
          <Link
            to={href}
            key={href}
          >
            {label}
          </Link>)
        return (
          <React.Fragment key={`${href}-wrapper`}>
          {link}
          { children && children.length ? 
            <React.Fragment key={`${href}-children`}> 
            { children.map(({ label, href, external }) => {
              if (external) {
                return (
                  <a
                    href={href}
                    key={href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      marginLeft: '1em'
                    }}
                  >
                    {label}
                  </a>
                )
              } else {
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
              }
            })}
            </React.Fragment>
          : 
            null
          }
          </React.Fragment>
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
          placeholder='none'
          backgroundColor='transparent'
          />
  );

  const getMenuButtonsDropdown = (handleClick, handleClose, handleMenuButtonClick, state) => {
    return headersData.filter(h => !h.disabled).map(({ label, href, external, children }) => {
      children = children?.filter(c => !c.disabled)
      const link = external ? 
        (<a href={href} target="_blank" rel="noreferrer">
          {label}
        </a>) : (<Link to={href}>
          {label}
        </Link>);
      return (
      <Grid item key={label}>
        { children && children.length ? 
              <>
              <Button id={label} aria-controls={`idolfest-menu-${label}`} aria-haspopup="true" onMouseOver={handleClick} onClick={handleClick} aria-owns={state[label] ? `idolfest-menu-${label}` : null}>
                {link}
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
                {children.map(({ label: childLabel, href: childHref, external: childExternal }) => {
                  const childLink = childExternal ? 
                    (<a href={href} target="_blank" rel="noreferrer">
                      {childLabel}
                    </a>) :
                    (<Link to={childHref}>
                      {childLabel}
                    </Link>)
                  return (
                    <MenuItem onClick={handleMenuButtonClick.bind(this, label)} key={childLabel}>
                      <Button className={classes.menuButton}>
                        {childLink}
                      </Button>
                    </MenuItem>
                  );
                })}
              </Menu>
              </>
          :
          <Button>
            {link}
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