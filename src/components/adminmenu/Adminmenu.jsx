import React, { useState } from 'react'
import '../../sass/adminmenu.scss'
import { Link } from 'react-router-dom'
import { useCreateProductMutation } from '../../context/productApi'

function Adminmenu() {
    let [createProduct] = useCreateProductMutation()

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [url, setUrl] = useState('')
    const [category, setCategory] = useState('')
    const [desc, setDesc] = useState('')

    const handleCreate = el => {
        el.preventDefault()
        let product = {
            title: title.current.value,
            price: price.current.value,
            image: url.current.value,
            category: category.current.value,
            desc: desc.current.value
        }
        createProduct(product)
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
            <Link to={'/login'}>
                <button>Log out</button>
            </Link>
        </div>

        <div className='adm__main'>
            <form action="" onSubmit={handleCreate}>
                <label htmlFor="">Title</label><br />
                <input required type="text" value={title} onChange={((e)=> setTitle(e.target.value))}/><br />
                <label htmlFor="">Price</label><br />
                <input required type="number" value={price} onChange={((e)=> setPrice(e.target.value))}/><br />
                <label htmlFor="">Image-url</label><br />
                <input required type="text" value={url} onChange={((e)=> setUrl(e.target.value))}/><br />
                <label htmlFor="">Category</label><br />
                <select required name="" id="" value={category} onChange={((e)=> setCategory(e.target.value))}>
                    <option value="Choice">Choose</option>
                    <option value="NightLights">Night lights</option>
                </select><br />
                <label htmlFor="">Title</label><br />
                <textarea required name="" id="" value={desc} onChange={((e)=> setDesc(e.target.value))}></textarea><br />
                <button>Create</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Adminmenu