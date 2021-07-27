import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { TextField, Select, CheckboxWithLabel } from 'formik-material-ui'
import { KeyboardDatePicker } from 'formik-material-ui-pickers'
import * as Yup from 'yup'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import {
  Button, 
  Box,
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText
} from '@material-ui/core'
import { styled } from '@material-ui/styles'
import { navigate } from 'gatsby'

const FormBox = styled(Box)({
  width: '80%',
  paddingBottom: '1em'
})

/*
To add:

* spirit badge tier that asks for full shipping address
* Discord username (with help text saying "We'll use this to give you special role")
* Name to credit on website (conditional for sponsor/super sponsor)
* Newsletter opt-in
* Text saying "You'll be able to add a t-shirt to your registration on the next page"
*/

const RegisterPage = () => {
  let initialValues = {}
  if (process.env.NODE_ENV === 'development') {
    initialValues = { 
      badgeType: '',
      fullName: 'Foo', 
      badgeName: 'Bar',
      email: 'test@test.com',
      dateOfBirth: new Date('2010', '07', '25'),
      zipCode: '01851',
      emailSignup: true,
      heard: '',
      city: '',
      state: '',
      country: '',
      // emergencyContactName: 'Hewwo',
      // emergencyContactPhone: '234567890'
    }
  } else {
    initialValues = { 
      badgeType: '',
      fullName: '', 
      badgeName: '',
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
      title="Register" 
    />

    <PageContent>
      <p>
        We're excited to welcome you to NW IdolFest this November! You can buy badges below.
      </p>

      <MuiPickersUtilsProvider utils={MomentUtils}>
      <FormBox>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          badgeType: Yup.string()
            .matches(/(spiritBadge|attendee|sponsor|superSponsor)/)
            .required('Required'),
          fullName: Yup.string()
            .max(80, 'Must be 80 characters or less')
            .required('Required'),
          badgeName: Yup.string()
            .max(30, 'Must be 30 characters or less'),
          email: Yup.string().email('Invalid email address').required('Required'),
          dateOfBirth: Yup.date().nullable().required('Required'),
          address1: Yup.string()
            .when('badgeType', {
              is: 'spiritBadge', 
              then: Yup.string().required('Required') 
            }),
          city: Yup.string()
            .when('badgeType', {
              is: 'spiritBadge', 
              then: Yup.string().required('Required') 
            }),
          state: Yup.string()
            .when('badgeType', {
              is: 'spiritBadge', 
              then: Yup.string().required('Required') 
            }),
          country: Yup.string().required('Required'),
        })}
        // validate={values => {
        //   const errors = {}
        //   if (!values.badgeType) {
        //     errors.badgeType = 'Required'
        //   }
        //   console.log(values, errors)
        //   return errors
        // }}
        onSubmit={ async (values, { setSubmitting }) => {
            console.log(values)
            const response = await fetch(`https://ejnd5apu72.execute-api.us-east-2.amazonaws.com/dev/reg1`, {
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
              response.text().then(data => 
                navigate(`/payment?${data}`)
              )
            }
        }}
      >
      {props => (
        <Form>
          <Box margin={1}>
            <FormControl>
              <InputLabel htmlFor="badgeType">* Badge Type</InputLabel>
              <Field
                component={Select}
                name='badgeType'
                inputProps={{
                  id: 'badgeType',
                }}
                aria-describedby='badgeTypeHelperText'
                fullWidth={true}
              >
                <MenuItem value="spiritBadge" key="spiritBadge">Spirit Badge</MenuItem>
                <MenuItem value="attendee" key="attendee">Attendee</MenuItem>
                <MenuItem value="sponsor" key="sponsor">Sponsor</MenuItem>
                <MenuItem value="superSponsor" key="superSponsor">Super Sponsor</MenuItem>
              </Field>
              <FormHelperText id='badgeTypeHelperText'>Select your badge type. See above for what each comes with.</FormHelperText>
              <div style={{ width: '100%', color: 'red' }}><ErrorMessage name='badgeType' /></div>
            </FormControl>
          </Box>

          <Box margin={1}>
            <Field name="fullName" type="text" label="* Full Name" component={TextField} fullWidth={true} />
          </Box>
  
          <Box margin={1}>
            <Field name="badgeName" type="text" label="Fandom Name" component={TextField} fullWidth={true} />
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
              fullWidth={true}
              variant="inline"
              placeholder="yyyy/mm/dd"
              autoOk={true}
            />
          </Box>

          { props.values.badgeType === 'spiritBadge' && (
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
             
             <Box margin={1}>
              <Field name="country" type="text" label="* Country" component={TextField} fullWidth={true} />
             </Box>
             </>
          )}

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
              checked={true} 
            />
          </Box>

          {/* {values, errors, touched, status, isSubmitting, isValidating, submitCount, initialValues, initialErrors, initialTouched, initialStatus, handleBlur, handleChange, handleReset, handleSubmit, resetForm, setErrors, setFormikState, setFieldTouched, setFieldValue, setFieldError, setStatus, setSubmitting, setTouched, setValues, submitForm, validateForm, validateField, isValid, dirty, unregisterField, registerField, getFieldProps, getFieldMeta, getFieldHelpers, validateOnBlur, validateOnChange, validateOnMount} */}
          {/* {Object.keys(props.errors).map(item => (<p key={item}>{item}</p>))} */}
          {props.submitCount > 0 && !props.isValid ? <div style={{ color: 'red' }}>Please fix errors.</div> : null}
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
