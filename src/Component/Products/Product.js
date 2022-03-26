import React from 'react';
import "./Product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    console.log(props)
    const { name, img, price } = props.phone
    return (
        <div className='product'>

            <img src={img} alt="" />
            <div className='product-info'>
                <h1> Name:{name}</h1>
                <h3>Price:{price}</h3>
            </div>



            <button className='btn' onClick={() => props.handelAddToCart(props.phone)}>
                <p className='btn-cart'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;