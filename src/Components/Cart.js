import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalContext'
const Cart = () => {
    const {cart , removeFromCart , clearCart } = useContext(GlobalContext)
    const amount = cart.map(p => p.price)
    const totalAmount = amount.reduce((amt,item) => (amt += item) , 0).toFixed(2)

    return (
        <div>
            <div className="amt">
    <span className="total-amt"> <span className="total">Total Amount </span> Rs.{totalAmount}</span>
            </div>
{cart.length === 0 ? (<div className="empty"> Card Empty  </div>) : cart.map((item, i) =>
    <div className='cart-info' key={i}>
            <div>
                <div>
                    <h4>
                        item image
                    </h4>
                    <img src={require(` ${item.image}.jpg`)} style={{width: '60px'}} alt='cart image' />            
                </div>    

                <div>
                    <h4>
                        Item Name
                    </h4>
                    <span className='title'>{item.name}</span>
                </div>
                <div>
                <h4>
                    Price
                </h4>
                <span>Rs.{item.price}</span>
                </div>
                <button className='btn-del' onClick={() => {removeFromCart(item.id) }}>Delete </button>
            </div>
        </div>

)}
   <div className="order">
                {cart.length !== 0 ? <button className="btn-order" onClick={() => clearCart()}>Order</button> : null}
            </div>
        </div>
    )
}

export default Cart
