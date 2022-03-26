import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import Cart from '../Cart/Cart';
import "./Shop.css"
const Shop = () => {
    const [phones, setPhone] = useState([])
const [cart,setCart]=useState([])
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setPhone(data))
    }
        , [])
    const handelAddToCart = (mobile) => {
        const newCart = [...cart, mobile]
        // console.log(newCart)
        setCart(newCart)
    }
    const reset = () => {
        setCart([])
    }


    return (
        <div className='shop-container'>
            <div className="phone-container">
                {
                    phones.map(phone => <Product
                        key={phone.id}
                        phone={phone}
                        handelAddToCart={handelAddToCart}>

                    </Product>)
                }
            </div>
            <div className="cart-container">
                <h1 >This is cart </h1>
                <div >
                        <div className='cart-container'>
                              <Cart cart={cart} reset={reset}></Cart>
                        </div>
                  </div>

            </div>
        </div>
    );
};

export default Shop;