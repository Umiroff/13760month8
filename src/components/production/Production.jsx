import React, { memo } from 'react'
import '../../sass/production.scss'

function Production() {
  return (
    <>
        <div className='prod'>
            <h3>Production <br />of lamps</h3>
            <p>The NORNLIGHT online store offers a wide range of lamps to illuminate your home or office. Here you will find a variety of lamp models, from modern and stylish to classic and elegant. We offer high-quality and reliable lamps from the best manufacturers that will give you comfort and coziness. <br /><br />By purchasing lamps in our online store, you get excellent value for money. We deliver throughout Russia so that every customer can enjoy the beautiful light and the convenience of buying online. Contact us today and turn your home into an oasis of warmth and light with NORNLIGHT!</p>
        </div>
    </>
  )
}

export default memo(Production)