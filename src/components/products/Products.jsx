import React from 'react'
import '../../sass/products.scss'
import vec from '../../assets/catvec.svg'
import proImg from '../../assets/proImg.svg'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoCartOutline  } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleToWishes } from '../../context/wishlistSlice';
import { useGetProductQuery } from '../../context/productApi';
import { addToCart } from '../../context/cartSlice';

function Products({proTitle, data,loadName}) {
    let {isLoading} = useGetProductQuery()
    const i = useSelector(reducer => reducer.wishlist.value)
    const dispatch = useDispatch()
    
    
    let item = data?.map((el) => (
        <div className='pro__pros__1' key={el.id}>
            <Link to={`/product/${el.id}`}>
            <img src={proImg} alt="" />
            </Link>
            <p>{el.title}</p>
            <div>
                <s style={{color: 'rgba(159, 159, 159, 1)', fontSize: 12}}>{el.price+100}$</s>
                <br />
                <strong>{el.price}$</strong>
            </div>
            <button className='pro__pros__1__cartbtn' ><IoCartOutline style={{width:20,height:20}} onClick={() => dispatch(addToCart(el))}/></button>
            <button className='pro__pros__1__likebtn' onClick={() => dispatch(toggleToWishes(el))}>
                {

                    i.some(l => l.id === el.id) ? 
                    <FaHeart className='like_icon' style={{width:20,height:20}}/>
                    : <FaRegHeart className='like_icon' style={{width:20,height:20}}/>
                }
            </button>
        </div>
    ))
  return (
    <>
    <div className='pro'>
        <div className='pro__title'>
            <p>{proTitle}</p>
            <Link to={'/products'}>
                <button>All products <img src={vec} alt="" /></button>
            </Link>
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
            {isLoading ? <div className={`${loadName}`}></div> : <></>}
            {item}
        </div>
    </div>
    </>
  )
}

export default Products