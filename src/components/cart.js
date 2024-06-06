import React from 'react'
import './cart.css'
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom'

const Cart = ({cart, setCart}) => {
    const incQty = prod => {
        const prodResult = cart.map((check) =>{
         return check.id === prod.id?  {...check, qty: check.qty + 1} : check
        })
        setCart(prodResult)
       }
       const decQty = prod =>{
         const prodResult = cart.map((check) =>{
           return check.id === prod.id?  {...check, qty: check.qty === 1 ? 1 : check.qty - 1} : check
          })
          setCart(prodResult)
       }
       const removeProduct = prod =>{
         const prodResult = cart.filter((check) =>
            check.id !== prod.id
          )
          setCart(prodResult)
       }
       const total = cart.reduce((result, item) => result = result + item.qty * item.price, 0)
  return (
    <>
    <div className='cart'>
        <h3>#Cart</h3>{
            cart.length === 0 &&
            <>
            <div className='empty_cart'>
            <h2>Your shopping cart is empty</h2>
            <Link to='/shop'><button>Shop Now</button></Link>
            </div>
            </>
        }
       <div className='container'>
          {
            cart.map((cartProd) => 
            {
              return(
                <>
                <div className='box'>
                  <div className='img_box'>
                    <img src={cartProd.image} alt=''></img>
                  </div>
                  <div className='detail'>
                    <div className='info'>
                    <h4>{cartProd.cat}</h4>
                    <h3>{cartProd.Name}</h3>
                    <p>Price: ${cartProd.price}</p>
                    <p>Total: ${cartProd.price * cartProd.qty}</p>
                    </div>
                    <div className='quantity'>
                      <button onClick={() => incQty (cartProd)}>+</button>
                      <input type='number' value={cartProd.qty}></input>
                      <button onClick={() => decQty (cartProd)}>-</button>
                    </div>
                    <div className='icon'>
                      <li onClick={() => removeProduct(cartProd)}><AiOutlineClose /></li>
                    </div>
                  </div>
                </div>
                </>
              )
            })
          }
        </div>
        <div className='bottom'>
          {
            cart.length > 0 && 
            <>
            <div className='Total'>
              <h4>Sub Total: ${total}</h4>
            </div>
            <button>checkout</button>
            </>
          }
        </div>
    </div>
    </>
  )
}

export default Cart