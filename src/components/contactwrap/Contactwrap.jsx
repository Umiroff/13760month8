import React, { memo } from 'react'
import'../../sass/contactwrap.scss'

function Contactwrap() {
  return (
    <>
    <div className='con'>
      <div className='con__title'>
        <p className='con__title__1'>Contact</p>
        <div>
          <strong>8 (800) 890-46-56</strong>
          <p>Mon-Fri: 10:00 to 19:00 <br />Sat-Sun: order via cart
          <br />Phones:</p>
        </div>
      </div>
      <div className='con__map'>
        <div className='con__map__1'>
          <div>
            <strong>Store Address</strong>
            <p>Moscow, Dmitrovskoe highway, 100c2</p>
          </div>
          <div>
            <strong>Mail</strong>
            <p>NORNLIGHT@mail.ru</p>
          </div>
          <div>
            <strong>Phone number</strong>
            <p>8 (800) 890-46-56</p>
          </div>
          <button>Submit your application</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default memo(Contactwrap)