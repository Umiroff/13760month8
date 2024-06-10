import React, { memo } from 'react'
import '../../sass/aboutwrap.scss'

function Aboutwrap() {
  return (
    <>
    <div className='about'>
        <div className='about__info'>
            <p className='about__info__title'>About company</p>
            <div>
                <strong>170+</strong>
                <p>Products</p>
            </div>
            <div>
                <strong>1000+</strong>
                <p>Satisfied customers</p>
            </div>
            <div>
                <strong>170+</strong>
                <p>Products</p>
            </div>
        </div>
        <div className='about__text'>
            <p>The NORNLIGHT online store offers a wide range of lamps to illuminate your home or office. Here you will find a variety of lamp models, from modern and stylish to classic and elegant. We offer high-quality and reliable lamps from the best manufacturers that will give you comfort and coziness.<br /><br />By purchasing lamps in our online store, you get excellent value for money. We deliver throughout Russia so that every customer can enjoy the beautiful light and the convenience of buying online. Contact us today and turn your home into an oasis of warmth and light with NORNLIGHT!<br /><br />The NORNLIGHT online store offers a wide range of lamps to illuminate your home or office. Here you will find a variety of lamp models, from modern and stylish to classic and elegant. We offer high-quality and reliable lamps from the best manufacturers that will give you comfort and coziness. <br /><br />By purchasing lamps in our online store, you get excellent value for money. We deliver throughout Russia so that every customer can enjoy the beautiful light and the convenience of buying online. Contact us today and turn your home into an oasis of warmth and light with NORNLIGHT!</p>
        </div>
    </div>
    </>
  )
}

export default memo(Aboutwrap)