import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import PageTitle from '../pageTitle';

class Review extends Component {

    componentDidMount() {
        this.props.setNavbarLinks([]);
    }

   render() {
       return (
           <div className="review">
               <PageTitle className="review__page-title" title="Order Review" />
           </div>
       )
   }
}

export default connect(null, actions)(Review);