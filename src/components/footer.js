import React from "react"
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import LogoUrl from '@components/LogoUrl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const useStyles = makeStyles(theme => ({
    footer: {
      backgroundColor: theme.palette.dark_pink,
      '& .social': {
        padding: '1em'
      }
    },
}))

export default function Footer() {
    const classes = useStyles()
    
    return (
        <footer>
            <Box className={classes.footer}>
                <Grid container direction='row' justify='flex-start' alignItems='center'>
                    <Grid item>
                        <img alt='' src={LogoUrl()} />
                    </Grid>
                    <Grid item className='social'>
                        <FontAwesomeIcon icon={['fab', 'facebook']} size="5x" />
                    </Grid>                    
                    <Grid item className='social'>
                        <FontAwesomeIcon icon={['fab', 'twitter']} size="5x" />
                    </Grid>
                    <Grid item className='social'>
                        <FontAwesomeIcon icon={['fab', 'instagram']} size="5x" />
                    </Grid>
                    <Typography>
                        Last Updated: Now
                    </Typography>
                </Grid>
            </Box>
        </footer>
    )
}