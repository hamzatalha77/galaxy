import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
// import About from './components/About'
import Footer from './components/Footer'
import Info from './components/Info'
import Products from './components/products'
import CallToAction from './components/CallToAction'
import Collections from './components/Collections'
import Portfolio from './components/Portfolio'
import Categories from './components/Categories'
import Features from './components/Features'

export default function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      {/* <About /> */}
      <Products />
      <Info />
      <Collections />
      <Portfolio />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  )
}
