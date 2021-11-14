import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import { Formik, Form, Field } from 'formik'
import { TextField, CheckboxWithLabel } from 'formik-material-ui'
import { KeyboardDatePicker } from 'formik-material-ui-pickers'
import * as Yup from 'yup'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import {
  Button, 
  Box,
  FormControl,
  FormHelperText,
  Grid,
} from '@material-ui/core'
import { styled } from '@material-ui/styles'
import { navigate, Link } from 'gatsby'
import RegistrationTier from '@components/registrationTier'
import Hero from "@components/hero"
import NewsletterSignup from "@components/NewsletterSignup"

let lambdaUrl

if (process.env.NODE_ENV === 'development') {
  lambdaUrl = 'https://ejnd5apu72.execute-api.us-east-2.amazonaws.com/reg1'
} else {
  lambdaUrl = 'https://ejnd5apu72.execute-api.us-east-2.amazonaws.com/nwif-reg1-prod'
}

const FormBox = styled(Box)({
  width: '80%',
  paddingBottom: '1em'
})

const allBadgeTiers = [
  {
    badgeName: 'Attendee',
    badgeKey: 'attendee',
    hasTax: true,
    price: '$40',
    tierName: 'Silver',
    description: 'This badge grants:',
    perks: [
      'Access to all events at NWIF',
      'NWIF Discord role',
      'Special surprise at registration',
    ]
  },
  {
    badgeName: 'Sponsor',
    badgeKey: 'sponsor',
    hasTax: true,
    price: '$75',
    tierName: 'Gold',
    description: 'Everything in Silver, plus:',
    perks: [
      'Gold-only badge and lanyard',
      'Drawstring bag',
      'Sticker pack',
      'T-shirt',
      'Priority seating',
      'NWIF website special thanks',
    ]
  },
  {
    badgeName: 'Spirit Badge',
    badgeKey: 'spirit',
    hasTax: true,
    price: '$15',
    tierName: 'Dekimasen',
    description: "Can't attend, but want to show your support anyway? Purchase a Dekimasen badge! Please note this does not grant entry to NWIF. Shipping available to US and CA only.",
    perks: [
      'Badge and lanyard mailed to you',
      'NWIF Discord role',
    ]
  }
]

// Move Prism outside of array to stop selling it
// TODO: handle this differently
const prismBadge = {
    badgeName: 'Super Sponsor',
    badgeKey: 'superSponsor',
    hasTax: true,
    price: '<strong>SOLD OUT</strong>',
    tierName: 'Prism',
    description: 'Everything in Gold, plus:',
    perks: [
      'Prism-only badge and lanyard',
      'King bed hotel room for 2 nights (Fri/Sat)',
      'Badge delivery to hotel room',
      'Can badge set',
      'Closing Ceremonies special thanks',
    ]
  }

const badgesRowOne = allBadgeTiers.slice(0, 2)

const badgesRowTwo = [
  {
    badgeName: 'Spirit Badge',
    badgeKey: 'spirit',
    hasTax: true,
    price: '$15',
    tierName: 'Dekimasen',
    description: "Can't attend, but want to show your support anyway? Purchase a Dekimasen badge! Please note this does not grant entry to NWIF. Shipping available to US and CA only.",
    perks: [
      'Badge and lanyard mailed to you',
      'NWIF Discord role',
  ]},
  {
    badgeName: 'Whale',
    price: '???',
    tierName: 'Whale',
    description: "We have dreams. Big dreams, involving a bigger event with more things and visitors from abroad, but going beyond the Pacific is expensive! If you're the sort of aquatic beast that can help out, <a href='/contact'>get in touch</a>.",
    perks: [
      'If you can dream it',
      'We can do it!'
    ]
  }
]

const tshirtSizes = ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL']

function badgeDropdownText(badge) {
  // remove the <strike> tags from our early bird reg
  const badgePrice = badge.price.split("</strike> ").slice(-1)[0]
  if (badge.tierName) {
    if (badge.hasTax) {
      return `${badge.tierName} - ${badge.badgeName} (${badgePrice} + tax)`
    } else {
      return `${badge.tierName} - ${badge.badgeName} (${badgePrice})`
    }
  } else {
    return badge.badgeName
  }
}

function isUnder18(date) {
    if (!date || !date._isValid) { return false }
    let year = date.year()
    let month = date.month()
    let day = date.date()
    return new Date(year+18, month, day) >= new Date()
}

const RegisterPage = () => {
  let initialValues = {}
  if (process.env.NODE_ENV === 'development') {
    initialValues = { 
      badgeType: '',
      fullName: 'Foo', 
      discordHandle: 'abcd#1234',
      email: 'test@test.com',
      dateOfBirth: new Date('2010', '07', '25'),
      zipCode: '01851',
      emailSignup: true,
      heard: '',
      city: '',
      state: '',
      country: 'United States',
    }
  } else {
    initialValues = { 
      badgeType: '',
      fullName: '', 
      discordHandle: '',
      email: '',
      dateOfBirth: null,
      emailSignup: true,
      heard: '',
      city: '',
      state: '',
      country: '',
    } 
  }

  return (
  <Layout>
    <Seo title="Register" />
     
    <PageHeader 
      title="Attend" 
    />

    <PageContent>
      <Grid container alignItems='stretch' justify='space-evenly' align-content='space-evenly'>
            {badgesRowOne.map((badge) => (
              <Grid item key={badge.badgeName}>
                <RegistrationTier badge={badge} />
              </Grid>
            ))}
            <Grid item key="Prism">
                <RegistrationTier badge={prismBadge} />
            </Grid>
      </Grid>

      <Grid container alignItems='stretch' justify='space-evenly' align-content='space-evenly'>
            {badgesRowTwo.map((badge) => (
              <Grid item key={badge.badgeName}>
                <RegistrationTier badge={badge} />
              </Grid>
            ))}
      </Grid>

      <h2>Register</h2>
      <i>Are you a Canadian resident? Claim your badge <a href="https://airtable.com/shrWG66Cvd1abmCH6" target="_blank" rel="noreferrer">here</a>!</i>

      <MuiPickersUtilsProvider utils={MomentUtils}>
      <FormBox>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          badgeType: Yup.string()
            .matches(/(spirit|attendee|sponsor|superSponsor)/)
            .required('Required'),
          fullName: Yup.string()
            .max(80, 'Must be 80 characters or less')
            .required('Required'),
          badgeName: Yup.string()
           .max(30, 'Must be 30 characters or less')
           .required('Required'),
          badgePronouns: Yup.string()
           .max(30, 'Must be 30 characters or less'),
          websiteName: Yup.string()
            .when('badgeType', {
              is: (value) => ['sponsor', 'superSponsor'].indexOf(value)  > -1,
              then: Yup.string().required('Required') 
            }),
          tshirtSize: Yup.string()
            .matches(/(S|M|L|XL|2XL|3XL|4XL)/)
            .when('badgeType', {
              is: (value) => ['sponsor', 'superSponsor'].indexOf(value)  > -1,
              then: Yup.string().required('Required') 
            }),
          discordHandle: Yup.string().matches(/^.+#\d{4}$/, 'Please provide your full handle, including tag.'),
          email: Yup.string().email('Invalid email address').required('Required'),
          dateOfBirth: Yup.date().nullable().required('Required'),
          address1: Yup.string()
            .when('badgeType', {
              is: 'spirit', 
              then: Yup.string().required('Required') 
            }),
          city: Yup.string()
            .when('badgeType', {
              is: 'spirit', 
              then: Yup.string().required('Required') 
            }),
          state: Yup.string()
            .when('badgeType', {
              is: 'spirit', 
              then: Yup.string().required('Required') 
            }),
          country: Yup.string().required('Required'),
        })}
        // validate={values => {
        //   console.log(values)
        // }}
        onSubmit={ async (values, { setSubmitting }) => {
            console.log('Submitting form...')
            console.log(values)
            const response = await fetch(lambdaUrl, {
              method: 'POST',
              mode: 'cors',
              body: JSON.stringify(values),
              headers: {
                  'Content-Type': 'application/json'
            }})
            if (!response.ok) {
              //console.log(response)
              alert('Sorry, something went wrong. Please try resubmitting your registration.')
              throw new Error(`HTTP error! status: ${response.status}`)
            } else {
              //console.log(response)
              setSubmitting(false)
              response.json().then(data =>
                navigate(`/payment?guid=${data.guid}&amount=${data.amount}&tax=${data.tax}&badge_type=${data.badge_type}`)
              )
            }
        }}
      >
      {props => (
        <Form>
          <Box margin={1}>
            <FormControl>
              <label htmlFor='badgeType'>* Badge Type</label>
              <Field
                as="select"
                name='badgeType'
                id='badgeType'
                aria-describedby='badgeTypeHelperText'
                style={{
                  height: '50px',
                  background: '#f3a5d2',
                  borderRadius: '0',
                  padding: '10px',
                  fontSize: '1em',
                  WebkitAppearance: 'none',
                  border: 'grey solid 1.5px',
                }}
              >
                <option value="" label='Select a badge type'>Select a badge type</option>
                {allBadgeTiers.map((badge) => (
                  <option
                    value={badge.badgeKey} 
                    key={badge.badgeKey}
                    label={badgeDropdownText(badge)}
                  >
                    {badgeDropdownText(badge)}
                  </option>
                ))}
              </Field>
            </FormControl>
          </Box>

          <Box margin={1}>
            <Field name="fullName" type="text" label="* Full Name" component={TextField} fullWidth={true} />
          </Box>

          <Box margin={1}>
            <Field name="badgeName" type="text" label="* Badge Name" component={TextField} fullWidth={true} />
            <FormHelperText id='badgeNameHelperText'>The name printed on your badge.</FormHelperText>
          </Box>

          <Box margin={1}>
            <Field name="badgePronouns" type="text" label="Badge Pronouns (optional)" component={TextField} fullWidth={true} />
            <FormHelperText id='badgePronounsHelperText'>The pronouns printed on your badge.</FormHelperText>
          </Box>

          { (props.values.badgeType === 'sponsor' || props.values.badgeType === 'superSponsor') && (
          <Box margin={1}>
            <Field name="websiteName" type="text" label="* Name for Website Thank You" component={TextField} fullWidth={true} />
            <FormHelperText id='websiteNameHelperText'>Let us know the name you'd like to go by on our website list of sponsors ("Anonymous" is okay).</FormHelperText>
          </Box>
          )}

          { (props.values.badgeType === 'sponsor' || props.values.badgeType === 'superSponsor') && (
          <Box margin={1}>
            <FormControl>
              <label htmlFor='tshirtSize'>* T-Shirt Size</label>
              <Field
                as="select"
                name='tshirtSize'
                id='tshirtSize'
                aria-describedby='tshirtSizeHelperText'
                style={{
                  height: '50px',
                  background: '#f3a5d2',
                  borderRadius: '0',
                  padding: '10px',
                  fontSize: '1em',
                  WebkitAppearance: 'none',
                  border: 'grey solid 1.5px',
                }}
              >
                <option value="" label='Select a t-shirt size'>Select a t-shirt size</option>
                {tshirtSizes.map((size) => (
                  <option
                    value={size} 
                    key={size}
                    label={size}
                  >
                    {size}
                  </option>
                ))}
              </Field>
            </FormControl>
          </Box>
          )}

          <Box margin={1}>
            <Field name="discordHandle" type="text" label="Discord Handle (optional)" component={TextField} fullWidth={true} aria-describedby='discordHandleHelperText' />
            <FormHelperText id='discordHandleHelperText'>If you provide your Discord handle and join our server, we'll give you a special role!</FormHelperText>
          </Box>
    
          <Box margin={1}>
            <Field name="email" type="email" label="* Email" component={TextField} fullWidth={true} /> 
          </Box>
      
          <Box margin={1}>
            <Field 
              name="dateOfBirth" 
              label="* Date of Birth" 
              component={KeyboardDatePicker}
              //InputAdornmentProps={{ position: "start", variant: 'outlined' }}
              format="MM/DD/yyyy"
              openTo="year"
              disableFuture={true}
              fullWidth={false}
              //variant="inline"
              placeholder="MM/DD/yyyy"
              autoOk={true}
              //PopperProps={{ anchorEl: null }}
            />
          </Box>

            { (isUnder18(props.values.dateOfBirth) && props.values.badgeType !== 'spirit') && (
                <>All attendees under 18 must bring a <a href="/Parental%20Consent%20Form.pdf" target="_blank">signed Parental Consent form</a>. <br />Please review our full <a href="/policies" target="_blank">Minor Policy</a> before proceeding.</> 
            )
            }

          { props.values.badgeType === 'spirit' && (
             <>
            <em>Please note we are only able to ship to addresses in the US and Canada.</em>
              
             <Box margin={1}>
              <Field name="address1" type="text" label="* Address (Line 1)" component={TextField} fullWidth={true} />
             </Box>
             
             <Box margin={1}>
              <Field name="address2" type="text" label="Address (Line 2)" component={TextField} fullWidth={true} />
             </Box>
             
             <Box margin={1}>
              <Field name="city" type="text" label="* City" component={TextField} fullWidth={true} />
             </Box>
             
             
             <Box margin={1}>
              <Field name="state" type="text" label="* State/Province" component={TextField} fullWidth={true} />
             </Box>
             </>
          )}
                  
          <Box margin={1}>
            <Field name="country" type="text" label="* Country" component={TextField} fullWidth={true} />
          </Box>

          <Box margin={1}>
            <Field name="zipCode" type="text" label="* Zip/Postal Code" component={TextField} fullWidth={true} />
          </Box>

          <Box margin={1}>
            <Field 
              name="heard" 
              type="text" 
              label="How did you hear about us?"
              component={TextField} 
              fullWidth={true} 
            />
          </Box>

          <Box margin={1}>
            <Field 
              name="emailSignup" 
              type="checkbox" 
              Label={{ label: 'Sign up for email announcements' }} 
              component={CheckboxWithLabel} 
            />
          </Box>

          {props.submitCount > 0 && !props.isValid ? <div style={{ color: 'red' }}>Please fix errors: 
          {Object.keys(props.errors).map((key) => (
              <div>{key.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })} - {props.errors[key]}</div>
          ))}
          </div>
          : null}
          {!props.isValidating && props.isSubmitting ? <div>Submitting your registration, do not refresh the page!</div> : null}
          <i>By registering for a badge, you agree to comply with all <a href='/policies' target='_blank'>NWIF policies</a>. <br />
          Proof of COVID vaccination is required to attend.</i>
          {props.values.badgeType === 'superSponsor' && (<><br /><br /><i>A credit card matching the name on your registration will be required for incidentals when checking into your Prism hotel room. The primary guest on the room must be over 18. Up to 2 additional guests may be added to the room by <Link to='/contact'>contacting us</Link>.</i></>) }
          <Button variant="contained" className="cta" type="submit">
            Proceed to check out
          </Button>
        </Form>
    )}
    </Formik>
    </FormBox>
    </MuiPickersUtilsProvider>
      
    </PageContent>
  </Layout>
)}

const ClosedRegisterPage = () => {
  return (
    <Layout>
      <Seo title="Register" />

      <Hero header="Thank you for attending NW IdolFest 2021!" />

      <PageContent>
        <p>
          Registration is closed because Northwest Idol Festival 2021 is now
          over. Sign up for our email list below to get notified when our next
          convention will be!
        </p>
        <NewsletterSignup />
      </PageContent>
    </Layout>
  )
}

export default ClosedRegisterPage
