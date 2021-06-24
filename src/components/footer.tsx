import React from "react"
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import PrintIcon from '@material-ui/icons/Print'

import { useLightDark } from '@theme/LightDarkContext'

interface Props {
    printButton?: Boolean
}

const Footer: React.FunctionComponent<Props> = ({ children, printButton }) => {
    const { print } = useLightDark()
    return (
        <footer>
            <Box p={printButton ? 0 : 1}>
                <Grid container direction='column' justify='space-between' alignItems='center'>
                    {printButton && (<Grid component={Box} displayPrint='none' item>
                        <IconButton color='secondary' title='Print A Formatted Resumé' onClick={print}>
                            <PrintIcon />
                        </IconButton>
                    </Grid>)}
                    {children}
                    <Grid item>
                        <Typography>
                            Last Updated: Now
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </footer>
    )
}

export default Footer