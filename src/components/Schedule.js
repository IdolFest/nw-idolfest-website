import React from "react"
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { styled } from '@material-ui/styles'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const EventsTable = styled(TableContainer)({
  margin: '0 auto',
  maxWidth: '100%',
  paddingBottom: '1em'
})

const useStyles = makeStyles(_ => ({
    mobileSchedule: {
        display: 'none'
    },
    panel: {
        textAlign: 'left',
        '& .name': {
            fontSize: 'larger',
            paddingTop: '1em',
        },
        '& .time': {
        },
        '& .panelists': {
            paddingBottom: '.5em',
        },
        '& .description': {
            paddingTop: '.5em',
        },
    },
    '@media (max-width: 499px)': {
        mobileSchedule: {
            display: 'block',
        },
        desktopSchedule: {
            display: 'none'
        }
    }
}))

const Schedule = ({ panels }) => {
  const classes = useStyles()
    
  return (
    <>
        {panels.content.map((dailySchedule) => (
        <div className={classes.mobileSchedule}>
            <h3>{dailySchedule.day}</h3>
            {dailySchedule.panels.map((panel) => (
            <div className={classes.panel} key={panel.title}>
                <div className="name">{panel.title}</div>
                <div className="time">{panel.day}, {panel.startTime} - {panel.endTime}</div>
                <div><span className="panelists">Panelists</span>: {panel.panelists}</div>
                <div className="description">{panel.description}</div>
            </div>
            ))}
        </div>
        ))}
          
        <div className={classes.desktopSchedule}>
            {panels.content.map((dailySchedule) => (
            <>
            <h3>{dailySchedule.day}</h3>
            <EventsTable>
            <Table aria-label="simple table">
                <TableHead style={{ textTransform: 'uppercase' }}>
                <TableRow>
                    <TableCell>Panel</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell>Description</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {dailySchedule.panels.map((panel) => (
                    <TableRow key={panel.title}>
                        <TableCell width="25%" component="th" scope="panel">
                            {panel.isGuestPanel ? <><FontAwesomeIcon icon={['fas', 'star']} /><span>  </span></> : null}
                            {`${panel.title}`}
                        </TableCell>
                        <TableCell width="20%">{panel.startTime}-{panel.endTime}</TableCell>
                        <TableCell>
                            {panel.description}
                            {panel.panelists ? <><br /><br /> <i>Panelists: {panel.panelists}</i></> : null}
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </EventsTable>
            </>
            ))}
          </div>
    </>
  )
}

Schedule.propTypes = {
  panels: PropTypes.node.isRequired,
}

export default Schedule