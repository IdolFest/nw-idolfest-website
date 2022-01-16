import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import { StaticImage } from 'gatsby-plugin-image'
import { styled } from '@material-ui/styles'
import { Container, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import CenteredBox from '@components/CenteredBox'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

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
  createData('Standard King', '$129'),
  createData('Double Queen', '$129'),
]


const HotelPage = () => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        longDates
                    }
                }            
            }`
    )

    const dates = site.siteMetadata.longDates
    
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
        Northwest IdolFest will be held on {dates}, at the DoubleTree by Hilton Hotel Seattle Airport. Access the venue by complimentary shuttle from Sea-Tac Airport, or by light rail from downtown Seattle.
          <br /><br />
          {/* 
          Online hotel booking is now closed. Please <Link to="/contact">contact us</Link> if you would like assistance booking a room at our discounted rates. 
          <br /><br />
          */}
        We offer a discounted $15/day parking rate to all attendees. This discount will be automatically applied if you book a hotel room in our block and charge parking to your room. If you do not have a hotel room, we will have vouchers available at registration.
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
        <Button variant="contained" className="cta" href='https://book.passkey.com/go/NWIDF22'>
          Book online
        </Button>
        <div>If you prefer to book by phone, you can call the hotel toll-free at 1-800-222-8733 and reference the group name "NW IdolFest".</div>
      </CenteredBox>
      <CenteredBox>
        <ResponsiveMap>
          <iframe title="Hotel map" maxwidth="600" height="450" style={{ border: 0}} loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJK3JMX6dckFQR7lXNagC5B9Q&key=AIzaSyDk8pOuoUbrYKocNBn6QzLe9j-bUAx7GvA"></iframe>
        </ResponsiveMap>

        <h2>How to Get Here</h2> 
      </CenteredBox>
      <h3>Light Rail</h3>
      <p>Link Light Rail operates every 6-15 minutes from Downtown Seattle to SeaTac station. Travel time is approximately 31 minutes from International District-Chinatown station and 38 minutes from  Westlake station.</p>

      <p>From the light rail station, go down the stairs or elevator and cross 176th Street. Follow 176th for 0.6 of a mile, and the DoubleTree will be on your left. You can also cross the skybridge from the light rail station and take the complimentary shuttle.</p>

      <h3>Sea-Tac Airport</h3>
        <p>Complimentary shuttles to the DoubleTree Hotel Seattle Airport leave every 15 minutes during the day. Call (206) 246-8600 to check when the next shuttle will be available.</p>

        <p>There are two DoubleTree shuttles available at the hotel. Make sure to get on the one bound for DoubleTree Hotel Seattle Airport. Do NOT get on the shuttle for DoubleTree Suites by Hilton Hotel Seattle Airport - Southcenter. That is a different hotel. If you are unsure about the destination of the shuttle you are boarding, please confirm with the driver.</p>
      
      <h3>Driving</h3>
      <p>Take I-5 to exit 152 and follow 188th St. The DoubleTree is located on the corner of 188th St. and Pacific Hwy.</p>
    </PageContent>
  </Layout>
)}

export default HotelPage
