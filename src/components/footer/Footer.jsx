import React from 'react'
import '../../sass/footer.scss'
import logo from '../../assets/logo.svg'
import footerImg from '../../assets/footerImg.svg'
import footerVec from '../../assets/footerVec.svg'


function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='footer__logo'>
            <img src={logo} alt="" style={{width: 207, height: 35,marginTop: 12}}/>
            <strong>8 (800) 890-46-56</strong>
            <img src={footerImg} alt="" />
            <p>Privacy policy</p>
            <p>Terms of use</p>
            <div>
                <img src={footerVec} alt="" />
                <img src={footerVec} alt="" />
                <img src={footerVec} alt="" />
            </div>
        </div>
        <div className='footer__forbuyers'>
            <strong>For buyers</strong>
            <p>About company</p>
            <p>Shipping and payment</p>
            <p>Return</p>
            <p>Guarantee</p>
            <p>Contacts</p>
            <p>Blog</p>
        </div>
        <div className='footer__pros'>
            <strong>For buyers</strong>
            <div>
                <p>Chandeliers</p>
                <p>Lamps</p>
                <p>Sconce</p>
                <p>Floor lamps</p>
                <p>Accessories</p>
                <p>Desk lamp</p>
                <p>Spotlights</p>
                <p>Track lights</p>
                <p>Street lights</p>
                <p>Technical luminaires</p>
                <p>LED strips</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer