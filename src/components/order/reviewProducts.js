import React, { Component } from "react";
import { connect } from "react-redux";

import ReviewProduct from './reviewProduct';

class ReviewProducts extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={`${className} review-products`}>
        {this.props.cartProducts.map(cartProduct => {
          return <ReviewProduct {...cartProduct} key={cartProduct._id}/>;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { cartProducts } = state.user;
  return {
    cartProducts
  };
}

export default connect(mapStateToProps)(ReviewProducts);
