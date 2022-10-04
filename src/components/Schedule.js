import React from "react"
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { styled } from '@material-ui/styles'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Toggle from "@components/toggle"
import scheduleData from "../../static/schedules/schedule.json"

const EventsTable = styled(TableContainer)({
    margin: '0 auto',
    maxWidth: '100%',
    paddingBottom: '1em',
    fontSize: '1rem !important'
})

const useStyles = makeStyles(_ => ({
    mobileSchedule: {
        display: 'none'
    },
    panel: {
        textAlign: 'left',
        '& .name': {
            fontSize: 'larger',
            marginTop: '7px',
            fontWeight: '600'
        },
        '& .time': {
        },
        '& .panelists': {
            paddingBottom: '.5em',
        }
    },
    description: {
        paddingTop: '.5em',
        whiteSpace: 'pre-line'
    },
    desktopPanel: {
        fontSize: '1rem'
    },
    '@media (max-width: 799px)': {
        mobileSchedule: {
            display: 'block',
            '& h3': {
                margin: '8px 0 0 0'
            }
        },
        desktopSchedule: {
            display: 'none'
        }
    }
}))

// 2022-10-21T11:00:00-7:00 => 11:00 AM
function formatTime(datetime) {
    return new Date(datetime).toLocaleTimeString([], {timeStyle: 'short'})
}

const Schedule = ({ day }) => {
  const classes = useStyles()

  return (
    <>
        <FontAwesomeIcon icon={['fas', 'star']} /> = special guest panel
        {Object.entries(scheduleData.times).map(([time, panelArray]) => {
            if (time.split("T")[0] !== day) { return null }
            return <div className={classes.mobileSchedule}>
                <h3>{formatTime(time)}</h3>
                {panelArray.map((panel) => (
                <div className={classes.panel} key={panel.id}>
                    <div className="name">{panel.isGuest ? <><FontAwesomeIcon icon={['fas', 'star']} /><span>  </span></> : null} {panel.title}</div>
                    <div className="room">Room: {panel.room}</div>
                    <div className="time">Time: {formatTime(panel.startTime)} – {formatTime(panel.endTime)}</div>
                    {panel.panelists ? <div><span className="panelists">Panelists</span>: {panel.panelists}</div> : null }
                    {panel.description ?
                    <div className={classes.description}>
                        <span>
                            <Toggle 
                            title={`${panel.description.substring(0, panel.description.lastIndexOf(" ", 50))}…`} 
                            content={panel.description} />
                        </span>
                    </div>
                    : null}
                </div>
                ))}
                <hr />
            </div>
        })}
          
        <div className={classes.desktopSchedule}>
            <>
            <EventsTable>
            <Table aria-label="simple table">
                <TableHead style={{ textTransform: 'uppercase' }}>
                <TableRow>
                    <TableCell>Time</TableCell>
                    <TableCell>Room</TableCell>
                    <TableCell>Panel</TableCell>
                    <TableCell>Description</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {Object.entries(scheduleData.times).map(([time, panelArray]) => {
                    if (time.split("T")[0] !== day) { return null }
                    return panelArray.map((panel) => (
                        <TableRow key={panel.title}>
                            <TableCell className={classes.desktopPanel} width="10%" style={{ minWidth: '100px', whiteSpace: 'nowrap' }}>{formatTime(panel.startTime)}-{formatTime(panel.endTime)}</TableCell>
                            <TableCell className={classes.desktopPanel} width="10%">{panel.room}</TableCell>
                            <TableCell className={classes.desktopPanel} width="25%" component="th" scope="panel">
                                {panel.isGuest ? <><FontAwesomeIcon icon={['fas', 'star']} /><span>  </span></> : null}
                                {`${panel.title}`}
                            </TableCell>
                            <TableCell className={classes.desktopPanel}>
                                <div className={classes.description}>{panel.description}</div>
                                {panel.panelists ? <><br /><br /> <i>Panelists: {panel.panelists}</i></> : null}
                            </TableCell>
                        </TableRow>
                    ))
                })}
                </TableBody>
            </Table>
            </EventsTable>
            </>
        </div>
    </>
  )
}

Schedule.propTypes = {
  day: PropTypes.string.isRequired,
}

export default Schedule