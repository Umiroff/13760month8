import React from 'react'
import '../../sass/empty.scss'
import { Link } from 'react-router-dom'

function Empty() {
  return (
    <>
    <div className='empty'>
        <p>There is nothing added. Go <Link to={'/'}>Home</Link> to add.</p>
    </div>
    </>
  )
}

export default Empty