import React, { useState } from  'react'
import Hero from '@components/hero'
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { Button, Box } from '@material-ui/core'
import * as Yup from 'yup'
import { Link } from 'gatsby'

const IndexPage = () => {
  const [msg, setState] = useState(null)

  return (
    <Layout>
      <Seo title="Home" />

      <Hero 
        header="Announcing NW IdolFest!"
      />
      
      <PageHeader 
        title="Welcome to Northwest IdolFest!" 
      />

      <PageContent>
        <p>Northwest Idol Festival is a two day event featuring idols, anisong, and everything in between. Join us in Seattle on November 13-14, 2021 for an exciting weekend of guests, concerts, panels, cosplay, and more. Get ready for a whole new idol experience!</p>
        <p>Ready to find out more? <Link to="/hotel">Book your hotel room today</Link>, and sign up for our email list below to find out when badges go on sale.</p>
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
                const response = await addToMailchimp(values.email, {})
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
      </PageContent>
    </Layout>
  )
}

export default IndexPage
