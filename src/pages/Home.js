import React from 'react'
import Header from '../components/header/Header'
import Banner from '../components/banner/Banner'
import NewOpportunities from '../components/newOpportunities/NewOpportunities'
import Invest from '../components/invest/Invest'
import Workprocess from '../components/workprocess/Workprocess'
import Testimonial from '../components/testimonial/Testimonial'
import Footer from '../components/footer/Footer'
const Home = () => {
  return (
    <div>
          <Header />
          <Banner />
          <NewOpportunities />
          <Invest />
          <Workprocess />
          <Testimonial />
          <Footer />
    </div>
  )
}

export default Home