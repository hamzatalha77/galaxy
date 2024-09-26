import React from 'react'
import Hero from './components/Hero'
import Info from './components/Info'
import Products from './components/products'
import CallToAction from './components/CallToAction'
import Collections from './components/Collections'
import Portfolio from './components/Portfolio'
import Categories from './components/Categories'
import Features from './components/Features'
import NewsLetter from './components/NewsLetter'

export default function page() {
  return (
    <div>
      <Hero />
      <Categories />
      <Products />
      <Info />
      <Collections />
      <CallToAction />
      <Features />
      <Portfolio />
      <NewsLetter />
    </div>
  )
}
