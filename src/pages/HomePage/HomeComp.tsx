// import React from 'react'

import Hero from "./Hero"
import Partners from "./Partners"
import Products1 from "./Products1"
import Products2 from "./Products2"
import Shipment from "./Shipment"
import Testimonies from "./Testimonies"

const HomeComp = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Partners />
      <Shipment />
      <Products1 />
      <Products2 />
      <Testimonies />
    </div>
  )
}

export default HomeComp