import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Category from '../../components/category/Category'
import Whynornlight from '../../components/whynornlight/Whynornlight'
import Products from '../../components/products/Products'
import Brands from '../../components/brands/Brands'
import Blogwrap from '../../components/blogwrap/Blogwrap'
import Production from '../../components/production/Production'
import Footer from '../../components/footer/Footer'
import { useGetProductQuery } from '../../context/productApi'

function Home() {
  const proTitle = "Popular products"
  const blogData = [1,2,3]
  let {data} = useGetProductQuery()
  const loadName = 'cards_loader'
  return (
    <>
    <div className='home'>
      
      <Navbar data={data}/>
      <Hero/>
      <Category/>
      <Whynornlight/>
      <Products proTitle={proTitle} data={data} loadName={loadName}/>
      <Brands/>
      <Blogwrap blogData={blogData}/>
      <Production/>
      <Footer/>
    </div>
    </>
  )
}

export default Home