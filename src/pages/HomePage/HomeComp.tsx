// import React from 'react'

import Hero from "./Hero"
import Partners from "./Partners"
import Products1 from "./Products1"
import Shipment from "./Shipment"

const HomeComp = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Partners />
      <Shipment />
      <Products1 />
    </div>
  )
}

export default HomeComp