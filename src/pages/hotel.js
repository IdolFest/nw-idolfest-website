import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import { StaticImage } from 'gatsby-plugin-image'
import { styled } from '@material-ui/styles'
import { Container, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'

const CenteredBox = styled(Box)({
  textAlign: 'center',
  paddingBottom: '1em'
})

const RoomRateTable = styled(TableContainer)({
  margin: '0 auto',
  //width: '70%',
  paddingBottom: '1em'
})

const ResponsiveMap = styled(Container)({
    overflow: 'hidden',
    paddingBottom: '56.25%',
    position: 'relative',
    height: '0',
    '& iframe': {
      left: '0',
      top: '0',
      height: '100%',
      width: '100%',
      position: 'absolute'
    }
})

function createData(roomType, price) {
  return { roomType, price };
}

const rows = [
  createData('Standard King', '$119'),
  createData('Double Queen', '$139'),
]

const HotelPage = () => {
  return (
  <Layout>
    <Seo title="Hotel" />
     
    <PageHeader 
      title="Hotel" 
    />

    <PageContent>
      <StaticImage 
        src="../images/Hotel.jpeg"
        // This is a presentational image, so the alt should be an empty string
        alt=''
      />
      <p>
        Northwest IdolFest will be held on November 13-14, 2021, at the DoubleTree by Hilton Hotel Seattle Airport. The hotel is easily accessible by complimentary shuttle from SeaTac Airport, or by light rail from downtown Seattle.
      </p>
      <CenteredBox>
        <RoomRateTable>
          <Table aria-label="simple table">
            <TableHead style={{ textTransform: 'uppercase' }}>
              <TableRow>
                <TableCell>Room Type</TableCell>
                <TableCell>Price Per Night<sup>†</sup></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={row.roomType}>
                  <TableCell component="th" scope="row">
                    {row.roomType}
                  </TableCell>
                  <TableCell>{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </RoomRateTable>
        
        <div>
          <sup>†</sup>Taxes and fees not included in price.
        </div>
        <Button variant="contained" className="cta">
          Booking link coming soon!
        </Button>
      
      </CenteredBox>
      <CenteredBox>
        <ResponsiveMap>
          <iframe title="Hotel map" maxWidth="600" height="450" style={{ border: 0}} loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJK3JMX6dckFQR7lXNagC5B9Q&key=AIzaSyDk8pOuoUbrYKocNBn6QzLe9j-bUAx7GvA"></iframe>
        </ResponsiveMap>

        <h2>How to Get Here</h2> 
      </CenteredBox>
      <h3>Light Rail</h3>
      <p>Link Light Rail operates every 6-15 minutes from Downtown Seattle to SeaTac station. Travel time is approximately 31 minutes from International District-Chinatown station and 38 minutes from  Westlake station.</p>

      <p>From the light rail station, go down the stairs or elevator and cross 176th Street. Follow 176th for 0.6 of a mile, and the DoubleTree will be on your left. You can also cross the skybridge from the light rail station and take the complimentary shuttle.</p>

      <h3>Sea-Tac Airport</h3>
      <p>Head to the shuttle pick up area. The shuttle to the DoubleTree Hotel Seattle Airport comes every 15 minutes during the day. Flag down the driver of the shuttle that you need. To see when the next shuttle will be arriving, call (206) 246-8600.</p> 

      <p>Be sure to get on the shuttle for the DoubleTree Hotel Seattle Airport, and not the one for the DoubleTree Suites by Hilton Hotel Seattle Airport – Southcenter. Yes, there are two DoubleTree shuttles. Both will say DoubleTree on the side (the O is a giant cookie!), and will both have the location they are going. If you’re not sure if it’s the right shuttle, feel free to flag down the driver and ask.</p>
      
      <h3>Driving</h3>
      <p>Take I-5 to exit 152. Follow 188th St and it will take you right by the hotel.</p>
    </PageContent>
  </Layout>
)}

export default HotelPage
