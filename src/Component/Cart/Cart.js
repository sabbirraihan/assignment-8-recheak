import React from 'react';
import "./Cart.css"

const Cart = ({ cart, reset, }) => {

    return (
        <div className='cart-container2'>
            <div className='cart-position'>
                <h1>Choice a Phone</h1>
                <div className='cart2'>
                    {
                        cart.map(item => <h3 key={item.id}>{item.name}, <span>price:{item.price}</span> </h3>)
                    }
                </div>


            </div>
            <div className=''>
                <button className='btn-cart' >CHOOSE 1 FOR ME

                </button>
                <button onClick={() => reset()} className='btn-cart2'>CHOOSE AGAIN</button>
            </div>

        </div>
    );
};


export default Cart;