import React from "react";
import {connect} from 'react-redux'

import {addItem} from '../../redux/cart/cart.actions'
import { CollectionItemContainer , BackgroundImage ,CollectionFooterContainer,NameContainer,PriceContainer,AddButton } from "./collection-item.styles.jsx";
const CollectionItem = ({item,addItem}) =>{
  const {name,price,imageUrl} = item;
  return (
    <CollectionItemContainer>
       <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton  className='addButton' onClick={()=>addItem(item)} inverted >Add to cart</AddButton>
    </CollectionItemContainer>
)}
const mapToDispatchToProps = dispatch =>({
  addItem:item=>dispatch(addItem(item))
})
export default connect(null,mapToDispatchToProps)(CollectionItem);