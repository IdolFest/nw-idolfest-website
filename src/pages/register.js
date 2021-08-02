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
import { navigate } from 'gatsby'
import RegistrationTier from '@components/registrationTier'

let lambdaUrl

if (process.env.NODE_ENV === 'development') {
  lambdaUrl = 'https://ejnd5apu72.execute-api.us-east-2.amazonaws.com/reg1'
} else {
  lambdaUrl = 'https://ejnd5apu72.execute-api.us-east-2.amazonaws.com/reg1-prod'
}

const FormBox = styled(Box)({
  width: '80%',
  paddingBottom: '1em'
})

/*
To add:

* Name to credit on website (conditional for sponsor/super sponsor)
* Newsletter opt-in
* Text saying "You'll be able to add a t-shirt to your registration on the next page"
*/

const allBadgeTiers = [
  {
    badgeName: 'Attendee',
    badgeKey: 'attendee',
    hasTax: true,
    price: '<strike>$40</strike> $30',
    tierName: 'Silver',
    description: 'Early bird pricing available until Sept 12!',
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
    badgeName: 'Super Sponsor',
    badgeKey: 'superSponsor',
    hasTax: true,
    price: '$420.69',
    tierName: 'Prism',
    description: 'Everything in Gold, plus:',
    perks: [
      'Prism-only badge and lanyard',
      'King bed hotel room for 2 nights',
      'Badge delivery to hotel room',
      'Can badge set',
      'Closing Ceremonies special thanks',
    ]
  },
  {
    badgeName: 'Spirit Badge',
    badgeKey: 'spirit',
    hasTax: true,
    price: '$15',
    tierName: 'Dekimasen',
    description: "Can't attend, but want to show your support anyway? Purchase a Dekimasen badge! <br /><em>Please note this does not grant entry to NWIF.</em>",
    perks: [
      'Badge and lanyard mailed to you',
      'NWIF Discord role',
    ]
  }
]

const badgesRowOne = allBadgeTiers.slice(0, 3)

const badgesRowTwo = [
  {
    badgeName: 'Spirit Badge',
    badgeKey: 'spirit',
    hasTax: true,
    price: '$15',
    tierName: 'Dekimasen',
    description: "Can't attend, but want to show your support anyway? Purchase a Dekimasen badge! Please note this does not grant entry to NWIF.",
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
      country: '',
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
      </Grid>

      <Grid container alignItems='stretch' justify='space-evenly' align-content='space-evenly'>
            {badgesRowTwo.map((badge) => (
              <Grid item key={badge.badgeName}>
                <RegistrationTier badge={badge} />
              </Grid>
            ))}
      </Grid>

      <h2>Register</h2>

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
          websiteName: Yup.string()
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

          { (props.values.badgeType === 'sponsor' || props.values.badgeType === 'superSponsor') && (
          <Box margin={1}>
            <Field name="websiteName" type="text" label="* Name for Website Thank You" component={TextField} fullWidth={true} />
            <FormHelperText id='websiteNameHelperText'>Let us know the name you'd like to go by on our website list of sponsors ("Anonymous" is okay).</FormHelperText>
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
              format="yyyy/MM/DD"
              openTo="year"
              disableFuture={true}
              fullWidth={false}
              //variant="inline"
              placeholder="yyyy/mm/dd"
              autoOk={true}
              //PopperProps={{ anchorEl: null }}
            />
          </Box>

          { props.values.badgeType === 'spirit' && (
             <>
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
              <div>{key} - {props.errors[key]}</div>
          ))}
          </div>
          : null}
          {!props.isValidating && props.isSubmitting ? <div>Submitting your registration, do not refresh the page!</div> : null}
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

export default RegisterPage
