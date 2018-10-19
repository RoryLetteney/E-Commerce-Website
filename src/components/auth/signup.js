import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import SignupForm from './signupForm';
import PageTitle from '../pageTitle';

class Signup extends Component {

    componentDidMount() {
        this.props.setHeaderLinks([]),
        this.props.setNavbarLinks([])
    }
    
    onSubmit = (fields) => {
        this.props.history.push('/account');
    }

   render() {
       return (
           <div className="sign-up">
                <PageTitle className="sign-up__page-title" title="Register"/>
                <SignupForm onSubmit={this.onSubmit} className="sign-up__form"/>
           </div>
       )
   }
}

export default connect(null, actions)(Signup);