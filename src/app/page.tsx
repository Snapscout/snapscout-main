'use client'

import Hero from '@/components/hero'
import AboutUs from '@/components/hero/about-us'
import Clients from '@/components/hero/clients'
import ContactUs from '@/components/hero/contact-us'
import Help from '@/components/hero/help'
import LandingContainer from '@/components/landing-container'
import NavigationBar from '@/components/nav-bar'

export default function Landing() {
  return (
    <LandingContainer>
      <NavigationBar />
      <Hero />
      <AboutUs />
      <ContactUs />
      <Clients />
      <Help />
    </LandingContainer>
  )
}
