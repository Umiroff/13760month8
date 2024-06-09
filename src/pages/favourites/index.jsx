import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Products from '../../components/products/Products'
import { useSelector } from 'react-redux'

function Favourites() {
  const wishes = useSelector(state => state.wishlist.value)
  return (
    <>
    <div>
      <Navbar/>
      <Products data={wishes} proTitle={"Favorites"}/>
      <Footer/>
    </div>
    </>
  )
}

export default Favourites