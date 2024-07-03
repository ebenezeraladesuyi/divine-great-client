// import React from 'react'

import { Helmet } from "react-helmet-async"
import Hero from "./Hero"
import Partners from "./Partners"
import Products1 from "./Products1"
import Products2 from "./Products2"
import Shipment from "./Shipment"
import Testimonies from "./Testimonies"

const HomeComp = () => {
  return (<>

      <Helmet>
        <title>Welcome to Divine Great Electrical & Electronics Nig.</title>
        <meta name="description" content="Shop the best electrical and electronics appliances, such as generators, furnitures, wires and cables, kitchen and household appliances, interior decor etc. in Ado-Ekiti" />
        <link rel="canonical" href="/" />
      </Helmet>

      <p className="overflow-hidden">
        <Hero />
        <Partners />
        <Shipment />
        <Products1 />
        <Products2 />
        <Testimonies />
      </p>
    </>
  )
}

export default HomeComp