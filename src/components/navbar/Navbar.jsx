import React, { memo, useState } from 'react'
import '../../sass/navbar.scss'
import logo from '../../assets/logo.svg'
import { FaListUl, FaRegHeart } from "react-icons/fa";
import { IoSearchOutline,IoCartOutline  } from "react-icons/io5";
import { TbAntennaBars5 } from "react-icons/tb";
import { Link } from 'react-router-dom';


function Navbar({data}) {
    
    const [cat, setCat] = useState(false)
    const [svalue, setSvalue] = useState('')

    let handleSearch = () => {
        return data?.filter(title => title.title.toLowerCase().includes(svalue.toLowerCase().trim()))
    }
  return (
    <>
        <div className='nav'>
            <div className='nav__top'>
                <div className='nav__top__links'>
                    <Link className='link' to={'/about'}>
                    <p>About company</p>
                    </Link>
                    <Link className='link' to={'/shipping'}>
                    <p>Shipping and Payment</p>
                    </Link>
                    <Link className='link' to={'/return'}>
                    <p>Return</p>
                    </Link>
                    <Link className='link' to={'/garant'}>
                    <p>Guarantee</p>
                    </Link>
                    <Link className='link' to={'/contact'}>
                    <p>Contact</p>
                    </Link>
                    <Link className='link' to={'/blog'}>
                    <p>Blog</p>
                    </Link>
                </div>
                <div className='nav__top__call'>
                    <strong>8 (800) 890-46-56</strong>
                    <Link className='link' to={'/contact'}>
                    <p>Request call</p>
                    </Link>
                </div>
            </div>

            <div className='nav__mid'>
                <Link to={'/'}>
                <img src={logo} alt="" style={{width: 207, height: 35,marginTop: 12}}/>
                </Link>
                <div className='nav__mid__inps'>
                    <button><FaListUl/>Category</button>
                    <form action="">
                        <input type="text" placeholder='Search for products' value={svalue} onChange={(e) => setSvalue(e.target.value)}/>
                        <div className='nav__mid__inps__btn'>
                            <IoSearchOutline style={{width:25, height: 25,cursor: "pointer"}}/>
                        </div>
                        {
                            svalue.trim() ?
                            <div className='nav__mid__inps__pros'>
                            {
                                handleSearch(data)?.map(pro => (
                                <div key={pro.id}>
                                <p>{pro.title}</p>
                                </div>
                            ))
                            }
                            </div>
                            :
                            <></>
                        }
                    </form>
                </div>

                <div className='nav__mid__btns'>
                    <Link to={'/favourites'}>
                    <button><FaRegHeart style={{width: 22, height:22}}/> Favorites</button>
                    </Link>
                    <Link to={'/about'}>
                    <button className='nav__mid__btns__comp'><TbAntennaBars5 style={{width: 25, height:25}}/> Comparison</button>
                    </Link>
                    <Link to={'/basket'}>
                    <button><IoCartOutline style={{width: 25, height:25}}/> <br />Cart</button>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default memo(Navbar)