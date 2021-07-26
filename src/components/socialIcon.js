import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function createSocialIcon(url, iconName, siteName, iconLibrary = 'fab', size='5') {
    return (
        <a href={url} target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={[iconLibrary, iconName]} size={`${size}x`} />
            {siteName ? <span>{siteName}</span> : null}
        </a>
    )
}