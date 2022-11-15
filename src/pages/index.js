import React from 'react'
import { Banner } from '../components/Banner'
import { MVO } from '../components/MVO'
import { Pricing } from '../components/Pricing'
import { Services } from '../components/Services'

const index = () => {
  return (
    <>
      <Banner />
      <MVO />
      <Services />
      <Pricing />
    </>
  )
}

export default index