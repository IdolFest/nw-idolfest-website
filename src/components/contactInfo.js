import React from "react"
import { makeStyles } from '@material-ui/styles'
import { useStaticQuery, graphql } from 'gatsby'
import { createSocialIcon } from '@components/socialIcon'

const useStyles = makeStyles(theme => ({
    contact: {
        '& ul': {
            listStyle: 'none'
        },
        '& li.social': {
            padding: '1em',
            fontSize: '.5em',
            '& svg': {
                verticalAlign: 'middle'
            },
            '& a': {
                textDecoration: 'none',
                boxShadow: 'none',
                '& :hover': {
                    color: theme.palette.light_pink
                }
            },
            '& span': {
                fontSize: '3em',
                paddingLeft: '1em',
                verticalAlign: 'middle'
            }
        },
    },
}))

function wrapContactSocial(socialIcon, url) {
    return (
        <a className='social' href={url} target='_blank' rel='noreferrer'>
            <li className='social'>
                {socialIcon}
            </li>
        </a>
    )
}

export default function ContactInfo() {
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
                            email
                        }
                    }
                }            
            }`
    )

    const socialSites = site.siteMetadata.social
    
    return (
        <div className={classes.contact}>
        <ul>
            {wrapContactSocial(createSocialIcon('envelope', 'Email', 'fas'), `mailto:${socialSites.email}`)}
            {wrapContactSocial(createSocialIcon('discord', 'Discord'), `https://discord.gg/${socialSites.discord}`)}
            {wrapContactSocial(createSocialIcon('facebook', 'Facebook'), `https://facebook.com/${socialSites.facebook}`)}
            {wrapContactSocial(createSocialIcon('twitter', 'Twitter'), `https://twitter.com/${socialSites.twitter}`)}
            {wrapContactSocial(createSocialIcon('instagram', 'Instagram'), `https://instagram.com/${socialSites.instagram}`)}
        </ul>
        </div>
    )
}