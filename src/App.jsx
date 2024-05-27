import { useState } from 'react'
import './App.css'
import Hero from './Component/Hero/Hero'
import ExploreMenu from './Component/ExploreMenu/ExploreMenu'
import Products from './Component/Products/Products'
import BuyNow from './Component/BuyNow/BuyNow'
import FeedBack from './Component/FeedBack/FeedBack'
import Offer from './Component/Offer/Offer'
import Navbar from './Component/Navbar/Navbar'
import Best from './Component/Best/Best'
import Footer from './Component/Footer/Footer'
import Navbar1 from './Component/Navbar1/Navbar1'

function App() {

  return (
    <>
    <Navbar1/>
    <Navbar/>
    <Hero/>
    <ExploreMenu/>
    <Products/>
    <BuyNow/>
    <FeedBack/>
    <Offer/>
    <Best/>
    <Footer/>
    </>
  )
}

export default App
