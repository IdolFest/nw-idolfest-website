import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
     
    <PageHeader 
      title="About" 
    />

    <PageContent>
      <p>
        Northwest IdolFest is a passion project founded by experienced event organizers. Our goal is to create an event space where idol fans of all types can gather and share in the unique joy that idols bring to our lives. Whether you’re a long-time wota or just getting into the scene, NWIF has a place for you!
      </p>
      <p>
        Though our beginnings may be humble, our love for idols knows no bounds. With your help and under the guidance of our dedicated team, we hope to grow into an event that can bring you live guests from overseas. We aim to become the premiere US convention for the idol community!
      </p>

      <h2>The Chair</h2>
      <p>
        <strong>Eliana Summers</strong> (<i>she/her</i>) started out as an anime nerd. After going through an unfortunate 'anime isn't cool' edgy phase, the idol fandom brought her right back! In her ordinary life, she works on project execution for a major firm. In her geek life, she has staffed over 10 conventions across dozens of events, mostly in the My Little Pony fandom. This is her third event as a chair, and the second one she has founded. In her spare time, she enjoys sleeping.
      </p>
      
      <h2>The Co-Chair</h2>
      <p>
        <strong>Shir Goldberg</strong> (<i>they/them</i>) is a long-time con organizer who's passionate about building events with a heart. Their goal at Northwest IdolFest is to support you in creating amazing things. Shir combines a professional background in tech consulting with years of convention experience, and has run multiple events that drew tens of thousands of attendees. In their spare time, Shir enjoys petting dogs. 
      </p>

      <h2>The Staff</h2>
      <p>Our all-volunteer staff is made up of veteran convention runners from all backgrounds and professions. We operate under a policy of transparency and long-term planning to bring the best possible experience to the Pacific Northwest.</p>
      <p>Have questions or want to join up? <a href='mailto:contact@nwidolfest.com' target='_blank' rel='noreferrer'>Email us!</a></p>
    </PageContent>
  </Layout>
)

export default AboutPage
