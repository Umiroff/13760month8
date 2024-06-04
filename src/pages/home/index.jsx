import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Category from '../../components/category/Category'

function Home() {
  return (
    <>
    <div className='home'>
      <Navbar/>
      <Hero/>
      <Category/>
    </div>
    </>
  )
}

export default Home