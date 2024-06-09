import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Blogwrap from '../../components/blogwrap/Blogwrap'
import Footer from '../../components/footer/Footer'

function Blog() {
  const blogData = [1,2,3,4,5,6]
  return (
    <>
    <div>
      <Navbar/>
      <Blogwrap blogData={blogData}/>
      <Footer/>
    </div>
    </>
  )
}

export default Blog