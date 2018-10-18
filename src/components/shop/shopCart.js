import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../../actions';

import ShopCartProduct from '../shop/shopCartProduct';
import CartButton from './cartButton';

function closeCart() {
    const shopCartClasses = document.getElementById('shop-cart').classList;
    const cartButtonClasses = document.getElementById('cart-button').classList;
    shopCartClasses.add('cart-hidden')
    cartButtonClasses.remove('cart-hidden');
}

function CartContent({className, products}) {
    let count = products.length;
    let productsJSX = products.map(product => <ShopCartProduct {...product} key={product._id} />);
    return (
        <div className={`${className} cart-content`}>
            <div className="cart-content__title">
                Cart ({count})
            </div>
            <div className="cart-content__products">
                {productsJSX}
            </div>
            <CartFooter className="cart-content__footer" products={products}/>
        </div>
    )
}

function CartFooter({className, products}) {
    const price = 7.96;
    return (
        <div className={`${className} cart-footer`}>
            <a className="cart-footer__checkout">
                Checkout
            </a>
            <div className="cart-footer__subtotal">
                Subtotal
            </div>
            <div className="cart-footer__price">
                ${price}
            </div>
        </div>
    )
}

class ShopCart extends Component {

    componentDidMount() {
        this.props.fetchCartProducts();
    }

  render() {
    const { className } = this.props;
    return (
        <div id="shop-cart" className={`${className} shop-cart cart-hidden`}>
            <CartButton className="shop-cart__toggle" icon="fas fa-times" onClick={closeCart}/>
            <CartContent className="shop-cart__content" products={this.props.cartProducts}/>
        </div>
    )
  }
}

function mapStateToProps(state) {
    const { cartProducts } = state.user;
    return {
        cartProducts
    }
}

export default connect(mapStateToProps, actions)(ShopCart);