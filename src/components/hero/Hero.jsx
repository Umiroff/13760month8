import React, { memo } from 'react'
import "../../sass/hero.scss"
import heroImg from "../../assets/heroImg.svg"

function Hero() {
  return (
    <>
    <div className='hero'>
        <div className='hero__text'>
            <p className='hero__text__t'>15% discount <br /> on all pendant lamps</p>
            <p className='hero__text__h'>Until February 5</p>
        </div>
        <img src={heroImg} alt="" />
    </div>
    </>
  )
}

export default memo(Hero)