import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Category from '../../components/category/Category'
import Whynornlight from '../../components/whynornlight/Whynornlight'
import Products from '../../components/products/Products'

function Home() {
  return (
    <>
    <div className='home'>
      <Navbar/>
      <Hero/>
      <Category/>
      <Whynornlight/>
      <Products/>
    </div>
    </>
  )
}

export default Home