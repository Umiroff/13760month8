import React, { memo } from 'react'
import '../../sass/shippay.scss'
import shipMap from '../../assets/shipMap.svg'

function Shippay() {
  return (
    <>
    <div className='shippay'>
        <div className='shippay__info'>
            <p className='shippay__info__title'>Shipping and payment</p>
        </div>
        <div className='shippay__text'>
            <strong>Shipping</strong>
            <br />
            <br />
            <p>We deliver from our warehouse in Moscow and the Moscow region using our own courier service. We deliver our products through transport companies throughout the Russian Federation, as well as throughout the CIS countries. Delivery time: 4-6 weeks</p>
            <br />
            <br />
            <strong>Express delivery</strong>
            <br />
            <br />
            <p>We will deliver any order over RUB 5,000 within the Moscow Ring Road for FREE.Orders over RUB 30,000 have free delivery, including 15 km from the Moscow Ring Road</p>
            <br />
            <br />
            <strong>Pickup</strong>
            <br />
            <br />
            <p>Any order can be picked up yourself at the address: Moscow, Dmitrovskoe highway, 100c2</p>
        </div>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191757.505580995!2d69.29678025605018!3d41.326024408251214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b9cdd04953d%3A0xf8109d550917a88e!2sChorsu%20Bazaar!5e0!3m2!1sen!2s!4v1717849573020!5m2!1sen!2s" style={{width: 1300, height:600, borderRadius: 15,border: 0}} ></iframe>
    </>
  )
}

export default memo(Shippay)