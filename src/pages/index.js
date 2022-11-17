import React from 'react'
import { Banner } from '../components/Banner'
import { MVO } from '../components/MVO'
import { Pricing } from '../components/Pricing'
import { Services } from '../components/Services'
import { Team } from '../components/Team'

const index = () => {
  return (
    <>
      <div id='home'><Banner /></div>
      <div id='mvo'><MVO /></div>
      <div id='services'><Services /></div>
      <div id='pricing'><Pricing /></div>
      <div id='team'><Team /></div>
    </>
  )
}

export default index