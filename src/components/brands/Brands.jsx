import React from 'react'
import '../../sass/brands.scss'
import vec from '../../assets/catvec.svg'
import brandImg from '../../assets/brandImg.svg'
import brandImg2 from '../../assets/brandImg2.svg'
import brandImg3 from '../../assets/brandImg3.svg'

function Brands() {
  return (
    <>
    <div className='brands'>
        <div className='brands__title'>
            <p>Only proven brands</p>
            <div>
                <button><img src={vec} alt="" /></button>
                <button><img src={vec} alt="" /></button>
            </div>
        </div>
        <div className='brands__logos'>
            <img src={brandImg} alt="" />
            <img src={brandImg2} alt="" />
            <img src={brandImg3} alt="" />
            <img src={brandImg} alt="" />
        </div>
    </div>
    </>
  )
}

export default Brands