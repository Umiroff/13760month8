import React, { memo, useState } from 'react'
import '../../sass/navbar.scss'
import logo from '../../assets/logo.svg'
import { FaListUl, FaRegHeart } from "react-icons/fa";
import { IoSearchOutline,IoCartOutline  } from "react-icons/io5";
import { TbAntennaBars5 } from "react-icons/tb";


function Navbar() {
    
    const [cat, setCat] = useState(false)
  return (
    <>
        <div className='nav'>
            <div className='nav__top'>
                <div className='nav__top__links'>
                    <p>About company</p>
                    <p>Shipping and Payment</p>
                    <p>Return</p>
                    <p>Guarantee</p>
                    <p>Contact</p>
                    <p>Blog</p>
                </div>
                <div className='nav__top__call'>
                    <strong>8 (800) 890-46-56</strong>
                    <p>Request call</p>
                </div>
            </div>

            <div className='nav__mid'>
                <img src={logo} alt="" style={{width: 207, height: 35,marginTop: 12}}/>
                <div className='nav__mid__inps'>
                    <button><FaListUl/>Category</button>
                    <form action="">
                        <input type="text" placeholder='Search for products'/>
                        <div>
                            <IoSearchOutline style={{width:25, height: 25,cursor: "pointer"}}/>
                        </div>
                    </form>
                </div>

                <div className='nav__mid__btns'>
                    <button><FaRegHeart style={{width: 22, height:22}}/> Favorites</button>
                    <button><TbAntennaBars5 style={{width: 25, height:25}}/> Comparison</button>
                    <button><IoCartOutline style={{width: 25, height:25}}/> <br />Cart</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default memo(Navbar)