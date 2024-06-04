import React, { memo } from 'react'
import "../../sass/hero.scss"
import heroImg from "../../assets/heroImg.svg"

function Hero() {
  return (
    <>
    <div className='hero'>
        <div className='hero__text'>
            <p>15% discount <br /> on all pendant lamps</p>
            <p style={{background: 'rgba(69, 69, 69, 1)',width: 535,height: 86,color: 'white',borderRadius: 50,paddingLeft: 20}}>Until February 5</p>
        </div>
        <img src={heroImg} alt="" />
    </div>
    </>
  )
}

export default memo(Hero)