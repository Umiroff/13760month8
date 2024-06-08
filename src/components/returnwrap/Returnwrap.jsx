import React from 'react'
import '../../sass/returnwrap.scss'

function Returnwrap() {
  return (
    <>
    <div className='return'>
        <div className='return__info'>
          <p className='return__info__title'>Return</p>
        </div>
        <div className='return__text'>
            <strong>Exchange and return at the request of the buyer</strong>
            <br />
            <br />
            <p>If for some reason the product does not suit you, you have the right to return it or exchange it for another within 7 days* from the date of purchase, subject to the following conditions:</p>
            <br />
            <ul>
              <li><a href="">The product is in its original appearance and in marketable condition;</a></li>
              <li><a href="">The product is fully equipped, including packaging materials;</a></li>
              <li><a href="">The product has no traces of being connected and has no signs of installation;</a></li>
              <li><a href="">The packaging of the goods is not damaged, the original presentation is present;</a></li>
              <li><a href="">There is a document confirming the purchase in our online store.</a></li>
              <li><a href="">To return an item, you must bring it to our office.</a></li>
              <li><a href="">Goods from other cities can be sent to us by a transport company, and the services of the transport company are paid by the client.</a></li>
              <li><a href="">*Within 14 days for selected brands. When placing an order, check with the manager</a></li>
            </ul>
            <br />
            <br />
            <strong>Exchange and return due to seller error</strong>
            <br />
            <br />
            <p>Reasons for exchange or return due to seller error:</p>
            <br />
            <ul>
            <li><a href="">Incomplete product set</a></li>
            <li><a href="">Product defect or defect</a></li>
            <li><a href="">If you have identified a defect, defect or incomplete product, you must take a photo of the defect and send it to mail@at-svet.ru, indicating a brief description of the nature of the defect/</a></li>
            <li><a href="">We will replace defective goods or deliver missing parts. Delivery will be free</a></li>
            </ul>
            <br />
            <br />
            <strong>A refund</strong>
            <br />
            <br />
            <p>Refunds are made by transfer to the buyer's bank details if there is an application from the buyer.</p>
        </div>
    </div>
    </>
  )
}

export default Returnwrap