import React from  'react'
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import NewsletterSignup from '@components/NewsletterSignup'
import PageHeader from '@components/PageHeader'
import { graphql, useStaticQuery } from 'gatsby'
import ImageMarquee from '../components/ImageMarquee'
import Carousel from '../components/Carousel'


const IndexPage = () => {

  const query = useStaticQuery(graphql`
  query { 
    images: allFile (filter: {sourceInstanceName: {eq: "images"}, relativePath: {glob: "public-photo-carousel/*.jpg"}}) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(
            height: 64
          )
        }
      }
    },
    carouselImages: allFile (filter: {sourceInstanceName: {eq: "images"}, relativePath: {glob: "public-photo-carousel/*.jpg"}}) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(
            height: 512
          )
        }
      }
    }
  }`)
  
  const imageFiles = query.images.nodes;
  const carouselImages = query.carouselImages.nodes;
  return (
    <Layout>
      <Seo title="Home" />

      <PageContent>

        <Carousel images={carouselImages} />
      </PageContent>

      <PageHeader 
        title="Announcing NW IdolFest 2023!" 
      />

      <PageContent>
        <br />
        <p>Get ready for NW IdolFest 2023!</p><br />
        <p>Sign up for our email list below to get notifications for future announcements.</p>
        <NewsletterSignup />
        <div style={{marginTop: "16px", marginBottom: "-18px"}}>
          <ImageMarquee images={imageFiles} animationDuration="60s" />
        </div>
      </PageContent>
    </Layout>
  )
}

export default IndexPage
