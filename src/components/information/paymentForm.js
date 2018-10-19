import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import history from '../../history';

import { FormInput, FormButton } from "../formFields";
import OrderSummary from './orderSummary';

class PaymentForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={`${className} payment-form`}>
        <Field
            className="payment-form__name"
            type="name"
            title="Name on Credit Card"
            placeholder="Name"
            name="name"
            component={FormInput}
        />
        <Field
          className="payment-form__credit-card"
          type="card"
          title="Credit Card Number"
          placeholder="____-____-____-____"
          name="creditcard"
          component={FormInput}
        />
        <Field
          className="payment-form__expiration"
          type="expiration"
          title="Expiration Date"
          placeholder="MM/YYYY"
          name="expiration"
          component={FormInput}
        />
        <Field
          className="payment-form__ccv"
          type="ccv"
          title="CCV"
          placeholder="CCV"
          name="ccv"
          component={FormInput}
        />
        <div className="payment-form__line"></div>
        <Field
          className="payment-form__payment-complete"
          // onClick={() => history.push('/')}
          type="submit"
          title="Pay &amp; Complete"
          name="payment-complete"
          component={FormButton}
        />
        <Field
          className="payment-form__back"
          onClick={() => history.push('/information/shipping')}
          type="button"
          title="Back"
          name="back"
          short={true}
          component={FormButton}
        />
        <OrderSummary className="payment-form__order-summary"/>
      </form>
    );
  }
}

PaymentForm = reduxForm({
  form: "PaymentForm"
})(PaymentForm);

export default PaymentForm;
