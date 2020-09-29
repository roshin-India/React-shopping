import React from 'react';
import {connect} from'react-redux';
import {createStructuredSelector} from 'reselect';
import './checkout.styles.scss';
import { selectCartItems, selectCartItemsTotal } from "../../redux/cart/cart.selectors";
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';


const CheckoutPage = ({cartItems,total}) =>(
    <div className="checkout-page">
       <div className="checkout-header">
        <div className="header-block">
            <span >Product</span>
        </div>
        <div className="header-block">
            <span >Description</span>
        </div>
        <div className="header-block">
            <span >Quantity</span>
        </div>
        <div className="header-block">
            <span >Price</span>
        </div>
        <div className="header-block">
            <span >Remove</span>
        </div>
       </div>
       {
           cartItems.map(cartItem=>(
               <CheckoutItem key={cartItem.id} cartItems={cartItem}/>
           ))
       }
       <div className="total">
        <span>TOTAL:Rs:{total}</span>
       </div>
       <StripeCheckoutButton disabled price={total} />

    </div>
)
const mapStateToProps  =createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartItemsTotal
});

export default connect(mapStateToProps)(CheckoutPage);