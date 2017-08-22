import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        name="Zeemail"
        description="5$ for 5 email credits!"
      >
        <button className="btn">ADD CREDITS</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
