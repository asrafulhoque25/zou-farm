import React from 'react'
import Header from '../components/header/Header'
import Banner from '../components/banner/Banner'
import NewOpportunities from '../components/newOpportunities/NewOpportunities'
import Invest from '../components/invest/Invest'
import Workprocess from '../components/workprocess/Workprocess'
const Home = () => {
  return (
    <div>
          <Header />
          <Banner />
          <NewOpportunities />
          <Invest />
          <Workprocess />
    </div>
  )
}

export default Home