import React, { Component } from 'react';

import Quantity from '../quantity';
import GreenPriceTag from '../greenPriceTag';

class ShopCartProduct extends Component {    
    render() {
        const { className, product, quantity } = this.props;
        const { title, price } = product;
        return (
           <div className={`${className} shop-cart-product`}>
               <img className="shop-cart-product__image" src="http://via.placeholder.com/130x130"/>
               <div className="shop-cart-product__title">{title}</div>
               <Quantity className="shop-cart-product__quantity" quantity={quantity}/>
               <a className="shop-cart-product__remove">Remove</a>
               <GreenPriceTag className="shop-cart-product__price" title={price * quantity}/>
           </div>
        )
    }
}

export default ShopCartProduct;