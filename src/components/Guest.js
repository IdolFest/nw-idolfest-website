import * as React from 'react'
import { styled } from '@material-ui/styles'
import { Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import GuestStar from '@components/guestStar'
import CenteredBox from '@components/CenteredBox'
import { createSocialIcon } from '@components/socialIcon'

const useStyles = makeStyles(theme => ({
  guest: {
    '& .social': {
      padding: '1em',
      fontSize: '.5em',
      '& a': {
        textDecoration: 'none',
        boxShadow: 'none',
        '& :hover': {
          color: theme.palette.light_pink
        },
      },
      '& svg': {
        // color: 'white'
      },
    },
  },
  guestGrid: {
    flexWrap: 'nowrap',
    alignItems: 'center',
    '@media (max-width: 678px)': {
      flexDirection: 'column',
    }
  }
}))

const Biography = styled(Box)({
  paddingLeft: '1em',
  fontSize: '1.25em'
})

function wrapGuestSocial(children) {
    return (
        <Grid item className='social'>
            {children}
        </Grid>
    )
}

export default function Guest({ guestName, guestTitle, guestSocials, children }) {
  const classes = useStyles()

  return (
    <Box className={classes.guest}>
      <Grid container className={classes.guestGrid}>
        <GuestStar guestName={guestName} showName={false} />
        <Biography>{children}</Biography>
      </Grid>
      <Grid container style={{ justifyContent: 'center' }}>
        {guestSocials.map(({ link, icon }) => {
          return <div key={icon}>{wrapGuestSocial(createSocialIcon(link, icon))}</div>
        })}
      </Grid>
      <h3><CenteredBox>{guestTitle}</CenteredBox></h3>
    </Box>
  )
}