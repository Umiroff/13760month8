import React from 'react'
import Products from '../../components/products/Products'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { useGetProductQuery } from '../../context/productApi'

function Allproducts() {
    const allprotitle = 'Products'
    const {data} = useGetProductQuery()
    console.log(data);
    const loadName = 'cards_loader'
  return (
    <>
    <div>
        <Navbar/>
        <Products proTitle={allprotitle} data={data} loadName={loadName}/>
        <Footer/>
    </div>
    </>
  )
}

export default Allproducts