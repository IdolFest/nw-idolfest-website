import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import { Button, Box } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import { TextField, Select } from 'formik-material-ui'
import { KeyboardDatePicker } from 'formik-material-ui-pickers'
import * as Yup from 'yup'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import { styled } from '@material-ui/styles'
import { navigate } from 'gatsby'

const FormBox = styled(Box)({
  width: '80%',
  paddingBottom: '1em'
})

const RegisterPage = () => {
  let initialValues = {}
  if (process.env.NODE_ENV === 'development') {
    initialValues = { 
      // badgeType: '',
      fullName: 'Foo', 
      badgeName: 'Bar',
      email: 'test@test.com',
      dateOfBirth: new Date('2010', '07', '25'),
      zipCode: '01851',
      emergencyContactName: 'Hewwo',
      emergencyContactPhone: '234567890'
    }
  } else {
    initialValues = { 
      // badgeType: '',
      fullName: '', 
      badgeName: '',
      email: '',
      dateOfBirth: null
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
        //  badgeType: Yup.object().required(),
         fullName: Yup.string()
           .max(80, 'Must be 80 characters or less')
           .required('Required'),
         email: Yup.string().email('Invalid email address').required('Required'),
         dateOfBirth: Yup.date().required('Required'),
       })}
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
       
        <Form>
          {/* <Box margin={1}>
            <FormControl>
              <InputLabel htmlFor="badgeType">Badge Type</InputLabel>
              <Field
                component={Select}
                name="badgeType"
                inputProps={{
                  id: 'badgeType',
                }}
                
              >
                <MenuItem value="" disabled>
                  <em>None</em>
                </MenuItem>
                <MenuItem value="attendee">Attendee</MenuItem>
                <MenuItem value="sponsor">Sponsor</MenuItem>
                <MenuItem value="superSponsor">Super Sponsor</MenuItem>
              </Field>
              <FormHelperText>Select your badge type. See above for what each comes with.</FormHelperText>
            </FormControl>
          </Box> */}

          <Box margin={1}>
            <Field name="fullName" type="text" label="Full Name" component={TextField} fullWidth={true} />
          </Box>
  
          <Box margin={1}>
            <Field name="badgeName" type="text" label="Badge Name (optional)" component={TextField} fullWidth={true} /> 
          </Box>
    
          <Box margin={1}>
            <Field name="email" type="email" label="Email" component={TextField} fullWidth={true} /> 
          </Box>
      
          {/* format="MMM D, YYYY" */}
          {/* placeholder="2010/07/25" */}
          <Box margin={1}>
            <Field 
              name="dateOfBirth" 
              label="Date of Birth" 
              component={KeyboardDatePicker} 
              format="yyyy/mm/D"
              openTo="year"
              fullWidth={true}
              placeholder="yyyy/mm/dd"

            />
          </Box>

          <Box margin={1}>
            <Field name="zipCode" type="text" label="Zip Code" component={TextField} fullWidth={true} />
          </Box>

          <Box margin={1}>
            <Field name="emergencyContactName" type="text" label="Emergency Contact Name" component={TextField} fullWidth={true} />
          </Box>

          <Box margin={1}>
            <Field name="emergencyContactPhone" type="text" label="Emergency Contact Phone" component={TextField} fullWidth={true} />
          </Box>
  
          <Button variant="contained" className="cta" type="submit">
            Proceed to check out
          </Button>
        </Form>
      
    </Formik>
    </FormBox>
    </MuiPickersUtilsProvider>
      
    </PageContent>
  </Layout>
)}

export default RegisterPage
