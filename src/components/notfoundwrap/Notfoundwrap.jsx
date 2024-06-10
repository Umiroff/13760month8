import React, { memo } from 'react'
import '../../sass/notfoundwrap.scss'
import { Link } from 'react-router-dom'

function Notfoundwrap() {
  return (
    <>
    <div className='notfound'>
        <p className='notfound__err'>404</p>
        <p className='notfound__text'>Looks like nothing was found</p><br /><br />
        <Link to={'/'}>
        <button>Go home</button>
        </Link>
    </div>
    </>
  )
}

export default memo(Notfoundwrap)