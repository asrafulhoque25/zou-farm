import React from 'react'
import Header from '../components/header/Header'
import Banner from '../components/banner/Banner'
import NewOpportunities from '../components/newOpportunities/NewOpportunities'
import Invest from '../components/invest/Invest'
import Workprocess from '../components/workprocess/Workprocess'
import Testimonial from '../components/testimonial/Testimonial'
import CallToAction from '../components/callToAction/CallToAction'
const Home = () => {
  return (
    <div>
          <Header />
          <Banner />
          <NewOpportunities />
          <Invest />
          <Workprocess />
          <Testimonial />
          <CallToAction />
    </div>
  )
}

export default Home