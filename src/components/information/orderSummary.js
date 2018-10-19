import React, { Component } from 'react';
import { connect } from 'react-redux';

import { UnderlinedTitle, InfoTitle } from './infoHelp';

class OrderSummary extends Component {
   render() {
       const { className } = this.props;
       let subtotal = 0.00;
       const tax = 0.07;
       let shipping = 0.00;
       let stickersAmount = 0;
       this.props.cartProducts.map(cartProduct => {
           subtotal += cartProduct.quantity * cartProduct.product.price;
           stickersAmount += cartProduct.quantity;
       })
       let taxShipping = tax * subtotal + shipping;
       let total = subtotal + taxShipping;
       return (
           <div className={`${className} order-summary`}>
               <UnderlinedTitle className="order-summary__title" title="Order Summary"/>
               <InfoTitle className="order-summary__subtotal" title={`${stickersAmount} stickers`} value={`$${subtotal.toFixed(2)}`}/>
               <InfoTitle className="order-summary__tax-shipping" title="Taxes &amp; Shipping" value={`$${taxShipping.toFixed(2)}`}/>
               <InfoTitle className="order-summary__total info-title-green" title="Total" value={`$${total.toFixed(2)}`}/>
           </div>
       )
   }
}

function mapStateToProps(state) {
    const { cartProducts } = state.user;
    return { cartProducts }
}

export default connect(mapStateToProps)(OrderSummary);