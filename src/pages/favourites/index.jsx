import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Products from '../../components/products/Products'
import { useSelector } from 'react-redux'
import Empty from '../../components/empty/Empty'

function Favourites() {
  const wishes = useSelector(state => state.wishlist.value)
  return (
    <>
    <div>
      <Navbar/>
      {
        wishes.length ? 
        <Products data={wishes} proTitle={"Favorites"}/>
        :
        <Empty/>
      }
      <Footer/>
    </div>
    </>
  )
}

export default Favourites