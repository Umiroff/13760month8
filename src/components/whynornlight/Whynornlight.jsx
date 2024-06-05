import React from 'react'
import '../../sass/whynornlight.scss'
import vec from '../../assets/catvec.svg'
import whyBrand from '../../assets/whyBrands.svg'
import whyPrice from '../../assets/whyPrice.svg'
import whyDel from '../../assets/whyDel.svg'
import whyBig from '../../assets/whyBig.svg'

function Whynornlight() {
  return (
    <>
    <div className='why'>
        <div className='why__title'>
            <p>Why NORNLIGHT?</p>
            <button>About company <img src={vec} alt="" /></button>
        </div>
        <div className='why__parts'>
            <div className='why__parts__1'>
                <img src={whyBrand} alt="" /> <br /><br /><br /><br /><br />
                <p className='why__parts__1__title'>Only proven <br />brands</p>
                <br />
                <p className='why__parts__1__text'>Brands proven by <br />time and quality</p>
            </div>
            <div className='why__parts__1'>
                <img src={whyPrice} alt="" style={{background: 'rgba(69, 69, 69, 1)', width: 80,height: 80,padding: 5,borderRadius: 10}}/> <br /><br /><br /><br /><br />
                <p className='why__parts__1__title'>Lowest prices</p>
                <br />
                <br />
                <p className='why__parts__1__text'>There won't be <br />anywhere below</p>
            </div>
            <div className='why__parts__1'>
            <img src={whyDel} alt="" style={{background: 'rgba(69, 69, 69, 1)', width: 80,height: 80,padding: 5,borderRadius: 10}}/> <br /><br /><br /><br /><br />
                <p className='why__parts__1__title'>Fast delivery</p>
                <br />
                <br />
                <p className='why__parts__1__text'>We deliver throughout the <br />Russian Federation in 1-10 days</p>
            </div>
            <div className='why__parts__1'>
                <img src={whyBig} alt="" /> <br /><br /><br /><br /><br />
                <p className='why__parts__1__title'>A large assortment</p>
                <br />
                <br />
                <p className='why__parts__1__text'>More than 1000 products</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Whynornlight