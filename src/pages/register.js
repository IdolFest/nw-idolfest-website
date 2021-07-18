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

const FormBox = styled(Box)({
  width: '80%',
  paddingBottom: '1em'
})

const RegisterPage = () => {
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
       initialValues={{ 
          
          fullName: '', 
          badgeName: '', 
          email: '',
          dateOfBirth: new Date('2010', '07', '25')
        }}
       validationSchema={Yup.object({
         fullName: Yup.string()
           .max(80, 'Must be 80 characters or less')
           .required('Required'),
         email: Yup.string().email('Invalid email address').required('Required'),
         dateOfBirth: Yup.date().required('Required'),
       })}
       onSubmit={ async (values, { setSubmitting }) => {
         console.log(values)
        const res = await fetch(`https://uk4u1v0jp3.execute-api.us-east-2.amazonaws.com/default/nwif-reg1`, {
            method: 'POST',
            // TODO: fix this
            mode: 'no-cors',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }}).then(response => response.json());
        console.log(res);
        setSubmitting(false);
        //props.myCallbackFunction(res);
      }}
     >
       
        <Form>
          

          <Box margin={1}>
            <Field name="fullName" type="text" label="Full Name" component={TextField} fullWidth={true} />
          </Box>
  
          <Box margin={1}>
            <Field name="badgeName" type="text" label="Badge Name (optional)" component={TextField} fullWidth={true} /> 
          </Box>
    
          <Box margin={1}>
            <Field name="email" type="email" label="Email" component={TextField} fullWidth={true} /> 
          </Box>
      
          <Box margin={1}>
            <Field name="dateOfBirth" label="Date of Birth" component={KeyboardDatePicker} format="MMM D, YYYY" openTo="year" fullWidth={true} />
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
