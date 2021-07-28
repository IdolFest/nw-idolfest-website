import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function createSocialIcon(iconName, siteName, iconLibrary = 'fab', size='5') {
    return (
        <div>
            <FontAwesomeIcon icon={[iconLibrary, iconName]} size={`${size}x`} />
            {siteName ? <span>{siteName}</span> : null}
        </div>
    )
}