import React from 'react'
import Header from '../components/header/Header'
import Banner from '../components/banner/Banner'
import NewOpportunities from '../components/newOpportunities/NewOpportunities'
import Invest from '../components/invest/Invest'
const Home = () => {
  return (
    <div>
          <Header />
          <Banner />
          <NewOpportunities />
          <Invest />
    </div>
  )
}

export default Home