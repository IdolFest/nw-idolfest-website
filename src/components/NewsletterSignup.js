import React from  'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  mailerliteWrapper: {
    // Make the form look closer to what we normally use.
    margin: "-32px -16px -24px",
    "& div": {
        // Make the huge whitespace around the form not hide anything it overlaps with
      backgroundColor: "transparent !important"
    }
  },
  pHelper: {
    position: "relative",
    zIndex: 1
  }
}))


// Embed code from mailerlite, made to cooperate with our linter
function initMailerlite(w,d,e,u,f,l,n){
  // eslint-disable-next-line
  w[f]=w[f] || function(){(w[f].q=w[f].q || []).push(arguments)},l=d.createElement(e),
  l.async=1,
  l.src=u,
  n=d.getElementsByTagName(e)[0],
  n.parentNode.insertBefore(l,n)
}


export default function NewsletterSignup() {
  const classes = useStyles()

  // Work around some weirdness with prod builds and node
  if (typeof window !== "undefined") {
    initMailerlite(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml')
    window.ml('account', '386801')
  }
  return (
    <div className={classes.mailerliteWrapper}>


      <div className="ml-embedded" data-form="LaMkWp"></div>
    </div>
  )
}
