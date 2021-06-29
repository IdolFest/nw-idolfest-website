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
        Northwest IdolFest is a passion project founded by long-time idol fans and event organizers. Our goal is to create an event space where friends can gather to celebrate the unique fulfillment we all share as we watch our favorite girls perform on stage.
      </p>
      <p>
        We want to offer a place for fans to meet other fans, see major community figures and VIP guests, listen to live music, and of course, buy and trade merch! We hope to grow into an event that can bring you live guests from overseas. With your help, we can do it together! We love idols!
      </p>

      <h2>The Chair</h2>
      <p>
        <strong>Eliana Summers</strong> (<i>she/her</i>) started out as an anime nerd. After going through an unfortunate 'anime isn't cool' edgy phase, the idol fandom brought her right back! In her ordinary life, she works on project execution for a major firm. In her geek life, she has staffed over 10 conventions across dozens of events, mostly in the My Little Pony fandom. This is her third event as a chair, and the second one she has founded. In her spare time, she enjoys sleeping.
      </p>
      
      <h2>The Co-Chair</h2>
      <p>
        <strong>Shir Goldberg</strong> (<i>they/them</i>) is a long-time con organizer who's passionate about building events with a heart. Their goal at Northwest IdolFest is to support you in creating amazing things. Shir combines a professional background in consulting with years of convention experience, and has run multiple events that drew tens of thousands of attendees. In their spare time, Shir enjoys petting dogs. 
      </p>

      <h2>The Staff</h2>
      <p>NW IdolFest is comprised of experienced convention staff from all backgrounds and professions. We are a small team with big dream and big love for idols. As the premiere US convention for idol content, we want to work for and with other idol fans to bring the best possible experience to the Pacific Northwest. Though we are starting small, we have the talent and experience to grow our event into something special!</p>
    </PageContent>
  </Layout>
)

export default AboutPage
