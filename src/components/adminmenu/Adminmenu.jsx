import React from 'react'
import '../../sass/adminmenu.scss'
import { Link } from 'react-router-dom'
import { useCreateProductMutation } from '../../context/productApi'

function Adminmenu() {
    let [createProduct] = useCreateProductMutation()

    const handleCreate = (el) => {
        createProduct(el)
    }
  return (
    <>
    <div className='adm'>
        <div className='adm__bar'>
            <strong>Admin Dashboard</strong>
            <br />
            <br /><br />
            <p>Create product</p>
            <br />
            <p>Manage product</p>
            <br />
            <p>Create category</p>
            <br />
            <p>Manage category</p><br /><br />
            <Link to={'/'}>
                <button>Log out</button>
            </Link>
        </div>

        <div className='adm__main'>
            <form action="">
                <label htmlFor="">Title</label><br />
                <input type="text" /><br />
                <label htmlFor="">Price</label><br />
                <input type="text" /><br />
                <label htmlFor="">Image-url</label><br />
                <input type="text" /><br />
                <label htmlFor="">Category</label><br />
                <select name="" id="">
                    <option value="Choice">Choose</option>
                    <option value="NightLights">Night lights</option>
                </select><br />
                <label htmlFor="">Title</label><br />
                <textarea name="" id=""></textarea><br />
                <button>Create</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Adminmenu