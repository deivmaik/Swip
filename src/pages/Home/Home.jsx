import React from 'react'

import Hero from '../../containers/Hero/Hero'
import Footer from '../../containers/Footer/Footer'
import HIW from '../../containers/HIW/HIW'
import Swips from '../../containers/Swips/Swips'

const Home = () => {
  return (
    <>
      <Hero />
      <HIW id='hiw' />
      <Swips id='swips' />
      <Footer id='contact' />
    </>
  )
}

export default Home
