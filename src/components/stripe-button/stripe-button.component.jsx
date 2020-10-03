import React from 'react';
import SripeCheckout from'react-stripe-checkout';

const StripeCheckoutButton =({price}) =>{
    const priceForStripe = price * 100;
    const publishableKey = '';
    const onToken = token =>{
    }
    return (
        <SripeCheckout 
            label='Pay Now'
            name="React Shopping"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}
export default StripeCheckoutButton;