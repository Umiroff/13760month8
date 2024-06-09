import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Cart from '../../components/cart/Cart'
import { useSelector } from 'react-redux'
import Empty from '../../components/empty/Empty'

function Basket() {
  const carts = useSelector(state => state.cart.value)
  return (
    <>
    <div>
      <Navbar/>
      {
        carts.length ? 
        <Cart/>
        :
        <Empty/>
      }
      <Footer/>
    </div>
    </>
  )
}

export default Basket