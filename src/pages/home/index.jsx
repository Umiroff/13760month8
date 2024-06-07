import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Category from '../../components/category/Category'
import Whynornlight from '../../components/whynornlight/Whynornlight'
import Products from '../../components/products/Products'
import Brands from '../../components/brands/Brands'
import Blogwrap from '../../components/blogwrap/Blogwrap'
import Production from '../../components/production/Production'
import Footer from '../../components/footer/Footer'

function Home() {
  const proTitle = "Popular products"
  const data = [1,2,3,4,5,6,7,8]
  const blogData = [1]
  return (
    <>
    <div className='home'>
      <Navbar/>
      <Hero/>
      <Category/>
      <Whynornlight/>
      <Products proTitle={proTitle} data={data}/>
      <Brands/>
      <Blogwrap blogData={blogData}/>
      <Production/>
      <Footer/>
    </div>
    </>
  )
}

export default Home