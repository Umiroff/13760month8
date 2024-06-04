import React, { memo } from 'react'
import '../../sass/category.scss'
import vec from '../../assets/catvec.svg'
import cat1 from '../../assets/cat1.svg'
import cat2 from '../../assets/cat2.svg'
import cat3 from '../../assets/cat3.svg'
import cat4 from '../../assets/cat4.svg'
import cat5 from '../../assets/cat5.svg'
import cat6 from '../../assets/cat6.svg'

function Category() {
  return (
    <>
        <div className='cat'>
            <div className='cat__title'>
                <p>Category</p>
                <button>All categories <img src={vec} alt="" /></button>
            </div>
            <div className='cat__cats'>
                <div className='cat__cats__1'>
                    <div>
                        <p>Chandeliers</p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <p>From 540$ <img src={vec} alt="" /></p>
                    </div>
                    <img src={cat1} alt="" />
                </div>
                <div className='cat__cats__1'>
                    <div>
                        <p>Lamps</p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <p>From 540$ <img src={vec} alt="" /></p>
                    </div>
                    <img src={cat2} alt="" />
                </div>
                <div className='cat__cats__1'>
                    <div>
                        <p>Sconce</p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <p style={{width:100}}>From 540$ <img src={vec} alt="" /></p>
                    </div>
                    <img src={cat3} alt="" />
                </div>
                <div className='cat__cats__1'>
                    <div>
                        <p>Floor lamps</p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <p>From 540$ <img src={vec} alt="" /></p>
                    </div>
                    <img src={cat4} alt="" />
                </div>
                <div className='cat__cats__1'>
                    <div>
                        <p>Desk lamp</p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <p>From 540$ <img src={vec} alt="" /></p>
                    </div>
                    <img src={cat5} alt="" />
                </div>
                <div className='cat__cats__1'>
                    <div>
                        <p>Spotlights</p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <p style={{width:100}}>From 540$ <img src={vec} alt="" /></p>
                    </div>
                    <img style={{width: 230}} src={cat6} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default memo(Category)