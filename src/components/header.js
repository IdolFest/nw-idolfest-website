import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import { makeStyles } from '@material-ui/styles' // useTheme
import React, { useState, useEffect } from "react"
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from "gatsby"

const headersData = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "Hotel",
    href: "/hotel",
  },
  {
    label: "Register",
    href: "/register",
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
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  }
}))

export default function Header() {  
  const classes = useStyles()
  //const theme = useTheme()

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

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
        <Link to="/" style={{ textDecoration: 'none', boxShadow: 'none', fontSize: '1.5em' }}>{idolfestLogo}</Link>
        <div>{getMenuButtons()}</div>
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
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <Link to="/" style={{ textDecoration: 'none', boxShadow: 'none', fontSize: '1.5em' }}>{idolfestLogo}</Link>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
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
      );
    });
  };

  const idolfestLogo = (
    <StaticImage
          layout='fixed'
          // This is a presentational image, so the alt should be an empty string
          height={150}
          alt=''
          src='../images/logo/Logo Pink.svg'
          />
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button key={href}>
            <Link
              to={href} 
              style={{ 
                textDecoration: 'none',
                boxShadow: 'none',
                fontSize: '1.5em'
              }}
            >
            {label}
          </Link>
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={classes.header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}