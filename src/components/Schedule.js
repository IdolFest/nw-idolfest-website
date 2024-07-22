import React, { useEffect, useState } from "react"
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { styled } from '@material-ui/styles'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Toggle from "@components/toggle"
import { useStaticQuery, graphql } from 'gatsby'
import moment from 'moment'
import remark from 'remark'
import mdastToHast from 'mdast-util-to-hast'
import { toHtml as hastToHtml } from 'hast-util-to-html'

const remarker = new remark()

const EventsTable = styled(TableContainer)({
    margin: '0 auto',
    maxWidth: '1366px',
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
        '& p': {
          fontSize: '1em'
        }
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
    },
    prohibitList: {
      margin: "0 0 4px",
      paddingLeft: "16px",
      '& li': {
        fontSize: 'inherit'
      }
    }
}))

// 2022-10-21T11:00:00-7:00 => 11:00 AM
function formatTime(datetime) {
    return new Date(datetime).toLocaleTimeString([], {timeStyle: 'short', timeZone: 'America/Los_Angeles'})
}

function mdToHtml(txt) {
  const markdownAst = remarker.parse(txt)
  const htmlAst = mdastToHast(markdownAst, {allowDangerousHtml: true})
  return hastToHtml(htmlAst, {allowDangerousHtml: true})
}

function getProhibitedList(panel, classes) {
  let list = []

  switch (panel.callMix.toLowerCase()) {
    case 'all':
      // Nothing!
      break
    case 'calls only':
      list.push('Mix (calls are okay!)')
      break
    case 'none':
      list.push('Calls and mix')
      break
  }

  switch (panel.recording.toLowerCase()) {
    case 'all':
      // Nothing!
      break
    case 'photos':
      list.push('Recorded video (pictures are okay!)')
      break
    case 'videos': 
      // ... really?
      list.push('Recorded photos (video okay)')
      break
    case 'none':
      list.push('Video recording and photos')
      break
  }

  if (list.length > 0) {
    return <>
      <strong>Prohibited:</strong>
      <ul className={classes.prohibitList}>
        {list.map(a => (<li key={a}>{a}</li>))}
      </ul>
    </>
  }

}

const Schedule = ({ dayOfWeek }) => {

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            shortDates
          }
        }      
      }
    `
  )
  const shortDates = site.siteMetadata.shortDates
  const firstDay = shortDates.substring(0, shortDates.indexOf('-')) + shortDates.substring(shortDates.indexOf(', ') + 1)
  const momentFirstDay = moment(firstDay, "MMM D, YYYY")
  if (dayOfWeek.toLowerCase() === 'sunday') {
    // Sunday is technically the start of the week, so this would reset us to the sunday before.
    // Work around that...
    dayOfWeek = 7
  }
  momentFirstDay.day(dayOfWeek)
  const day = momentFirstDay.format('YYYY-MM-DD')
  const classes = useStyles()

  const [scheduleData, setScheduleData] = useState({loading: true})

  useEffect(() => {
    const url = `https://nw-idolfest-webstuff.s3.amazonaws.com/schedule/schedule.json`

    
    const getSchedule = async () => {
      try {
        const response = await fetch(url)
        const res = await response.json()
        setScheduleData(res)

      } catch (e) {
        setScheduleData({error: true})
      }
    }

    if (scheduleData.loading) {
      getSchedule()
    }
  })

  if (scheduleData.loading) {
    return <h3><em>Loading...</em></h3>
  } else if (scheduleData.error) {
    return <h3><em>Loading schedule failed. Please refresh the page!</em></h3>
  }

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
                    <div className="prohibited">{getProhibitedList(panel, classes)}</div>
                    {panel.panelists ? <div><span className="panelists">Panelists</span>: {panel.panelists}</div> : null }
                    {panel.description ?
                    <div className={classes.description}>
                        <span>
                            <Toggle 
                            title={`${panel.description.substring(0, panel.description.lastIndexOf(" ", 50))}…`} 
                            content={<div dangerouslySetInnerHTML={{__html: mdToHtml(panel.description)}} />} />
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
                                <div className={classes.description} dangerouslySetInnerHTML={{__html: mdToHtml(panel.description)}}></div>
                                <div className="prohibited">{getProhibitedList(panel, classes)}</div>
                                {panel.panelists ? <><i>Panelists: {panel.panelists}</i></> : null}
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