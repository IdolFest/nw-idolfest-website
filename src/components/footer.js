import React, { useMemo } from "react"
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import { createSocialIcon } from '@components/socialIcon'
import { useStaticQuery, graphql } from 'gatsby'
// import LogoUrl from '@components/LogoUrl'
// import { StaticImage } from 'gatsby-plugin-image'

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.dark_pink,
        padding: '0 2em',
        '& .social': {
            padding: '1em',
            fontSize: '.5em',
            '& svg': {
                color: 'white'
            },
        },
        '& .copyright': {
            marginLeft: 'auto',
            textTransform: 'uppercase',
            '& a': {
                color: 'white',
                '& :hover': {
                    color: theme.palette.light_pink
                }
            }
        },
        '@media (max-width: 450px)': {
            '& .copyright': {
                marginLeft: '0',
            },
        }
    },
}))

function wrapFooterSocial(children, url) {
    return (
        <Grid component={'a'} className='social' href={url} target='_blank' rel='noreferrer' item>
            {children}
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

    const content = useMemo(() => {
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
                        {wrapFooterSocial(createSocialIcon('facebook'), `https://facebook.com/${socialSites.facebook}`)}
                        {wrapFooterSocial(createSocialIcon('twitter'), `https://twitter.com/${socialSites.twitter}`)}
                        {wrapFooterSocial(createSocialIcon('instagram'), `https://instagram.com/${socialSites.instagram}`)}
                        {wrapFooterSocial(createSocialIcon('discord'), `https://discord.gg/${socialSites.discord}`)}
                        <Grid item className='copyright'>
                            <Typography>
                                &copy; {new Date().getFullYear()} <a href='https://nijiiroevents.com/' target='_blank' rel='noreferrer'>Nijiiro Events LLC</a>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </footer>
        )
    }, [site, classes.footer])

    
    return content
}