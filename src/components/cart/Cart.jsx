import React, { useState } from 'react'
import '../../sass/cart.scss'
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBinLine } from "react-icons/ri";
import { incCart,decCart, removeFromCart } from '../../context/cartSlice';

const BOT_TOKEN = '6622199888:AAHqsCKSs5d6awvfxhjAqvQmnBy1_kcCPjI'
const CHAT_ID = '-4108697716'

function Cart() {
    const carts = useSelector(state => state.cart.value)
    let total = useSelector(state => state.cart.total)
    const dispatch = useDispatch()
    for (let i = 0; i < carts?.map(e => e.quantity*e.price).length; i++) { total += carts?.map(e => e.quantity*e.price)[i]; }
    
    let order = carts?.map(e => `${e.title} %0A quantity: ${e.quantity} %0A price: ${e.price} %0A`)

    const [username, setUsername] = useState('')
    const [phone, setPhone] = useState('')
    const [mail, setMail] = useState('')
    const [address, setAddress] = useState('')
    const [comment, setComment] = useState('')

    const handleOrder = (e) => {
        e.preventDefault();
        let text = ''
        text += `${username} `
        text += `wants to buy some things %0A Give call: ${phone} %0A Mail: ${mail} %0A Address: ${address} %0A ${order}  %0A total: ${total} %0A Comment: ${comment}`
        let url =  `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`

        
        let api = new XMLHttpRequest()
        api.open('GET', url, true)
        api.onload = function() {
            if (api.status >= 200 && api.status < 300) {
              const response = JSON.parse(api.responseText);
              console.log(response);
            } else {
              console.error('Request failed with status:', api.status);
            }
          };
          
          api.onerror = function() {
            console.error('Request failed');
          };
          
          api.send();
          dispatch(clearCart())
          handleClose()
    }

    let items = carts?.map((el) => (
        <div key={el.id} className='cart__items__card'>
            <img src={el.image} alt="image" />
            <div className='cart__items__card__pro'>
                <p>{el.title}</p>
                <strong>{el.price}$</strong>
            </div>
            <p className='cart__items__card__desc'>{el.desc}</p>
            <p className='cart__items__card__ven'>RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS</p>
            <div className='cart__items__card__btns'>
                <button disabled={el.quantity === 1} onClick={() => dispatch(decCart(el))}>-</button>
                <p>{el.quantity}</p>
                <button onClick={() => dispatch(incCart(el))}>+</button>
            </div>
            <RiDeleteBinLine className='cart__items__card__delbtn' onClick={() => dispatch(removeFromCart(el))}/>
        </div>
    ))
  return (
    <>
    <div className='cart'>
        <p className='cart__title'>Basket</p>
        <div className='cart__items'>
            <div className='cart__items__titles'>
                <p>Photo</p>
                <p>Product</p>
                <p>Description</p>
                <p>Vender code</p>
                <p>Quantity</p>
            </div>
            {items}
        </div>
        <div className='cart__decor'>
            <div className='cart__decor__dec'>
                <p>Decor</p><br />
                <div className='cart__decor__dec__inps'>
                    <input required type="text" placeholder='Full name' value={username} onChange={((e) => setUsername(e.target.value))}/>
                    <input required type="number" placeholder='Phone number' value={phone} onChange={((e) => setPhone(e.target.value))}/>
                    <input required type="email" name="" id="" placeholder='Email' value={mail} onChange={((e) => setMail(e.target.value))}/>
                </div>
            </div>
            <div className='cart__decor__ship'>
                <p>Shipping</p><br />
                <div className='cart__decor__ship__inps'>
                    <input required type="text" placeholder='Address' value={address} onChange={((e) => setAddress(e.target.value))}/>
                    <br />
                    <textarea name="" id="" placeholder='Comments' value={comment} onChange={((e) => setComment(e.target.value))}></textarea>
                </div>
            </div>
        </div>
        <div className='cart__pay'>
            <p className='cart__pay__title'>Payment</p><br />
            <div className='cart__pay__total'>
                <p>Goods.............................................{total}$</p>
                <p>Delivery..............................................5$</p>
            </div>
            <br />
            <br />
            <p className='cart__pay__title'>{total}$</p><br />
            <div className='cart__pay__buy'>
                <button onClick={handleOrder}>Buy</button>
                <p>I agree to the processing of my personal data</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cart