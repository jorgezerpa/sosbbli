import React from 'react'
import { Banner } from '../components/Banner'
import { MVO } from '../components/MVO'
import { Pricing } from '../components/Pricing'
import { Services } from '../components/Services'
import { Team } from '../components/Team'

const index = () => {
  return (
    <>
      <Banner />
      <MVO />
      <Services />
      <Pricing />
      <Team />
    </>
  )
}

export default index