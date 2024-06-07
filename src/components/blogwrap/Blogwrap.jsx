import React from 'react'
import '../../sass/blogwrap.scss'
import vec from '../../assets/catvec.svg'
import blogImg1 from '../../assets/blogImg1.svg'
import blogImg2 from '../../assets/blogImg2.svg'
import blogImg3 from '../../assets/blogImg3.svg'
import blogVec from '../../assets/blogVec.svg'


function Blogwrap({blogData}) {

    let blogItem = blogData?.map(el => (
        <>
        <div className='blog__cards__1'>
            <img src={blogImg1} alt="" />
            <p>How to properly light a house from <br />the outside?</p>
            <p>01.01.2024</p>
            <img className='blog__cards__1__vec' src={blogVec} alt="" />
        </div>
        <div className='blog__cards__1'>
            <img src={blogImg2} alt="" />
            <p>How to properly light a house from <br />the outside?</p>
            <p>01.01.2024</p>
            <img className='blog__cards__1__vec' src={blogVec} alt="" />
        </div>
        <div className='blog__cards__1'>
            <img src={blogImg3} alt="" />
            <p>How to properly light a house from <br />the outside?</p>
            <p>01.01.2024</p>
            <img className='blog__cards__1__vec' src={blogVec} alt="" />
        </div>
        </>
    ))
  return (
    <div className='blog'>
        <div className='blog__title'>
            <p>Blog</p>
            <button>Go to blog <img src={vec} alt="" /></button>
        </div>
        <div className='blog__cards'>
            {blogItem}
        </div>
    </div>
  )
}

export default Blogwrap