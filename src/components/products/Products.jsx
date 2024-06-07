import React from 'react'
import '../../sass/products.scss'
import vec from '../../assets/catvec.svg'
import proImg from '../../assets/proImg.svg'
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline  } from "react-icons/io5";

function Products({proTitle, data}) {
    

    let item = data?.map(el => (
        <div className='pro__pros__1'>
            <img src={proImg} alt="" />
            <p>Recessed lamp Novotech</p>
            <div>
                <s style={{color: 'rgba(159, 159, 159, 1)', fontSize: 12}}>7000$</s>
                <br />
                <strong>6399$</strong>
            </div>
            <button className='pro__pros__1__cartbtn' ><IoCartOutline style={{width:20,height:20}}/></button>
            <button className='pro__pros__1__likebtn'><FaRegHeart style={{width:20,height:20}}/></button>
        </div>
    ))
  return (
    <>
    <div className='pro'>
        <div className='pro__title'>
            <p>{proTitle}</p>
            <button>All products <img src={vec} alt="" /></button>
        </div>
        <div className='pro__bar'>
            <p>All</p>
            <p>Chandelier</p>
            <p>Lamps</p>
            <p>Desk Lamp</p>
            <p>Night Lights</p>
            <p>Backlight</p>
            <p>Street lighting</p>
            <p>Furniture installations</p>
        </div>
        <div className='pro__pros'>
            {item}
        </div>
    </div>
    </>
  )
}

export default Products