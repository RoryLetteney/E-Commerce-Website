import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Quantity from "../quantity";
import GreenPriceTag from '../greenPriceTag';

class ShopProduct extends Component {

  handleAddToCart = () => {
    const shopCartClasses = document.getElementById('shop-cart').classList;
    const cartButtonClasses = document.getElementById('cart-button').classList;
    const { _id, title, description, price, belongsTo, imageURL } = this.props;
    if (shopCartClasses.contains('cart-hidden')) {
      shopCartClasses.remove('cart-hidden')
      cartButtonClasses.add('cart-hidden');
    }
    this.props.addCartProduct({ _id, title, description, price, belongsTo, imageURL });
  }

  render() {
    const { _id, title, description, price } = this.props;
    return (
      <div key={_id} className="shop-product">
        <div className="shop-product__front">
          <img className="shop-product__front__image" src="http://via.placeholder.com/220x220"/>
          <div className="shop-product__front__title">{title}</div>
        </div>
        <div className="shop-product__back">
          <div className="shop-product__back__title">{title}</div>
          <div className="shop-product__back__description">{description}</div>
          <GreenPriceTag className="shop-product__back__price" title={price}/>
          <Quantity className="shop-product__back__quantity" quantity={1} />
          <a onClick={() => this.handleAddToCart()} className="shop-product__back__add-to-cart">Add to Cart</a>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(ShopProduct);
