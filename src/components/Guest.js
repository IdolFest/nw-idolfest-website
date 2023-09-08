import * as React from 'react'
import { styled } from '@material-ui/styles'
import { Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Avatar from '@components/avatar'
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

export default function Guest({ personName, guestTitle, guestSocials, children, year, image}) {
  const classes = useStyles()

  return (
    <Box className={classes.guest}>
      <Grid container className={classes.guestGrid}>
        <Grid item xs={3}>
          <Avatar personName={personName} year={year} showName={false} />
        </Grid>
        <Grid item xs={9}>
          <Biography>{children}</Biography>
        </Grid>
      </Grid>
      <Grid container style={{ justifyContent: 'center' }}>
        {guestSocials.map(({ link, icon, iconLibrary='fab' }) => {
          return <div key={icon}>{wrapGuestSocial(createSocialIcon(link, icon, null, iconLibrary))}</div>
        })}
      </Grid>
      <h3><CenteredBox>{guestTitle}</CenteredBox></h3>
    </Box>
  )
}

export function slugifyGuestName(string) {
  // Approach borrowed from here: https://mhagemann.medium.com/the-ultimate-way-to-slugify-a-url-string-in-javascript-b8e4a0d849e1

  const a =
    "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;"
  const b =
    "aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz-"
  const p = new RegExp(a.split("").join("|"), "g")

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "") // Replace spaces with dash
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, "") // Trim - from end of text
}

