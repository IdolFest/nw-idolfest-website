import React, { useState } from  'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { Button, Box } from '@material-ui/core'
import * as Yup from 'yup'

export default function NewsletterSignup() {
  const [msg, setState] = useState(null)

  return (
    <Box>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email address').required('Required'),
        })}
        validate={values => {
          const errors = {}
          if (!values.email) {
            errors.email = 'Please fill out your email to join our list.'
          }
          return errors
        }}
        onSubmit={ async (values, { setSubmitting }) => {
          setState('Submitting...')
          try {
            // add subscriber to the list and our "All Subscribers" group
            const response = await addToMailchimp(values.email, { 'group[55326]': '8' })
            if (response.result !== 'succcess') {
              console.log(response)
              setState(response.msg)
            } else {
              setSubmitting(false)
              setState(response.msg)
              console.log(msg)
            }
          } catch(e) {
            console.error(e)
            setState(e)
            if (e.message === 'Timeout') {
              this.setState({
                warning: 'Looks like your browser is blocking this request. Please disable any tracker/ad-blocking and resubmit.'
              })
            }
          }
        }}
      >

        <Form>
          <Box margin={1}>
            <Field name="email" type="email" label="Email" component={TextField} fullWidth={true} />
          </Box>

          {msg ? <div dangerouslySetInnerHTML={{ __html: msg }}>
          </div> : null }
          <Button variant="contained" className="cta" type="submit">
            Sign up
          </Button>
        </Form>

      </Formik>
      </Box>
  )
}
