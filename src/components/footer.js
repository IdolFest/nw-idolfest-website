import React from "react"
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useStaticQuery, graphql } from "gatsby"
// import LogoUrl from '@components/LogoUrl'
// import { StaticImage } from 'gatsby-plugin-image'

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.dark_pink,
        padding: '0 2em',
        '& .social': {
            padding: '1em',
            fontSize: '.5em',
            '& a': {
                textDecoration: 'none',
                boxShadow: 'none',
                '& :hover': {
                    color: theme.palette.light_pink
                }
            },
        },
        '& .copyright': {
            marginLeft: 'auto',
            textTransform: 'uppercase'
        },
        '@media (max-width: 400px)': {
            '& .copyright': {
                marginLeft: '0',
            },
        }
    },
}))

function footerSocial(url, siteName) {
    return (
        <Grid item className='social'>
            <a href={url} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={['fab', siteName]} size="5x" />
            </a>
        </Grid>
    )
}

export default function Footer() {
    const classes = useStyles()

    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        social {
                            facebook
                            twitter
                            instagram
                            discord
                        }
                    }
                }            
            }`
    )

    const socialSites = site.siteMetadata.social
    
    return (
        <footer>
            <Box className={classes.footer}>
                <Grid container direction='row' justify='flex-start' alignItems='center'>
                    {/* <Grid item>
                        <StaticImage
                            layout='constrained'
                            // This is a presentational image, so the alt should be an empty string
                            alt=''
                            height={50}
                            transformOptions={{ fit: "contain" }}
                            src='../images/icon/Icon-Pink.png'
                        />
                    </Grid> */}
                    {footerSocial(`https://facebook.com/${socialSites.facebook}`, 'facebook')}
                    {footerSocial(`https://twitter.com/${socialSites.twitter}`, 'twitter')}
                    {footerSocial(`https://instagram.com/${socialSites.instagram}`, 'instagram')}
                    {footerSocial(`https://discord.gg/${socialSites.discord}`, 'discord')}
                    <Grid item className='copyright'>
                        <Typography>
                            &copy; {new Date().getFullYear()} <a href='https://nijiiroevents.com/' target='_blank' rel='noreferrer'>Nijiiro Events LLC</a>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </footer>
    )
}