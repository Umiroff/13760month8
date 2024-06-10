import React, { memo } from 'react'
import '../../sass/whynornlight.scss'
import vec from '../../assets/catvec.svg'
import whyBrand from '../../assets/whyBrands.svg'
import whyPrice from '../../assets/whyPrice.svg'
import whyDel from '../../assets/whyDel.svg'
import whyBig from '../../assets/whyBig.svg'
import { Link } from 'react-router-dom'

function Whynornlight() {
  return (
    <>
    <div className='why'>
        <div className='why__title'>
            <h2>Why NORNLIGHT?</h2>
            <Link to={'/about'}>
            <button>About company <img src={vec} alt="" /></button>
            </Link>
        </div>
        <div className='why__parts'>
            <div className='why__parts__1'>
                <img src={whyBrand} alt="" /> 
                <p className='why__parts__1__title'>Only proven <br />brands</p>
                <br />
                <p className='why__parts__1__text'>Brands proven by <br />time and quality</p>
            </div>
            <div className='why__parts__1'>
                <img src={whyPrice} alt="" /> 
                <p className='why__parts__1__title'>Lowest prices</p>
                <br />
                
                <p className='why__parts__1__text'>There won't be <br />anywhere below</p>
            </div>
            <div className='why__parts__1'>
            <img src={whyDel} alt="" /> 
                <p className='why__parts__1__title'>Fast delivery</p>
                <br />
                
                <p className='why__parts__1__text'>We deliver throughout the <br />Russian Federation in 1-10 days</p>
            </div>
            <div className='why__parts__1'>
                <img src={whyBig} alt="" /> 
                <p className='why__parts__1__title'>A large assortment</p>
                <br />
                
                <p className='why__parts__1__text'>More than 1000 products</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default memo(Whynornlight)