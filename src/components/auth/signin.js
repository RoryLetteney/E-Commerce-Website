import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Signin extends Component {
   render() {
       return (
           <div className="sign-in">
            signin
           </div>
       )
   }
}

Signin = reduxForm({
    form: 'Signin'
})(Signin);

export default Signin;