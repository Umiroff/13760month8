import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Aboutwrap from '../../components/aboutwrap/Aboutwrap'
import Brands from '../../components/brands/Brands'
import Blogwrap from '../../components/blogwrap/Blogwrap'

function About() {
  const blogData = [1]
  return (
    <>
    <div>
      <Navbar/>
      <Aboutwrap/>
      <Brands/>
      <Blogwrap blogData={blogData}/>
      <Footer/>
    </div>
    </>
  )
}

export default About