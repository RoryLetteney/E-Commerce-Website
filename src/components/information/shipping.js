import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import ShippingForm from './shippingForm';
import PageTitle from '../pageTitle';

class Shipping extends Component {

    componentDidMount() {
        this.props.setHeaderLinks([]),
        this.props.setNavbarLinks([])
    }

    onSubmit = (fields) => {
        
    }

   render() {
       return (
           <div className="shipping">
                <PageTitle className="shipping__page-title" title="Shipping Address"/>
                <ShippingForm onSubmit={this.onSubmit} className="shipping__form"/>
           </div>
       )
   }
}

export default connect(null, actions)(Shipping);