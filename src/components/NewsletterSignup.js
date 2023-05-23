import React from  'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  formWrapper: {
    // Make the form look closer to what we normally use.
    margin: "-32px -16px -24px",
    "& iframe": {
        // Make the huge whitespace around the form not hide anything it overlaps with
      backgroundColor: "transparent !important",
      width: "100%",
      height: "300px",
      border: "none"
    }

  }
}))


export default function NewsletterSignup() {
  const classes = useStyles()

  return (
    <div className={classes.formWrapper}>
      <iframe title="newsletter signup" src="https://cdn.forms-content.sg-form.com/5a148981-d952-11ed-a113-4e969da5ff55"/>
    </div>
  )
}
