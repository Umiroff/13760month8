import React from 'react'
import Products from '../../components/products/Products'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

function Allproducts() {
    const allprotitle = 'Products'
    const data = [1,2,3,4,5,6,7,8]
  return (
    <>
    <div>
        <Navbar/>
        <Products proTitle={allprotitle} data={data}/>
        <Footer/>
    </div>
    </>
  )
}

export default Allproducts