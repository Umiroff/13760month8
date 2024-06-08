import React from 'react'
import '../../sass/guarantee.scss'

function Guarantee() {
  return (
    <>
    <div className='grnt'>
        <div className='grnt__info'>
          <p className='grnt__info__title'>Guarantee</p>
        </div>
        <div className='grnt__text'>
            <strong>Exchange and return at the request of the buyer</strong>
            <br />
            <br />
            <p>All products in the NornLight store have a guarantee. It is declared by the manufacturer and has a certain validity period for various groups of goods.
            If your product fails during the warranty period, you can contact us and get a free repair. To do this you need:</p>
            <br />
            <ul>
              <li><a href="">Provide a receipt, invoice, or provide the email or phone number specified when placing the order.</a></li>
              <li><a href="">Bring the goods to our warehouse or send it by transport company.</a></li>
              <li><a href="">Afterwards the goods are sent for examination and repair. If repair is not possible, we will exchange the product for a similar one or refund the purchase price.</a></li>
            </ul>
            <p>Please note that “A-Svet” is not a service center, but acts as an intermediary between the client and the supplier.
            Therefore, repair times may vary for products of different brands.</p>
        </div>
    </div>
    </>
  )
}

export default Guarantee