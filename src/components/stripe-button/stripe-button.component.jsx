import React from 'react';
import SripeCheckout from'react-stripe-checkout';

const StripeCheckoutButton =({price}) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HWjZXAuTBO9LeKXcLG93G59FJJeRNiZ0e2N3lZuK2xzYAyQDd9hIZiYVXv5zbzXrBvTZYM0eU4VxV5jMUapTUDY00pvpt0lRz';
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