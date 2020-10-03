import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { firestore } from '../../firebase/firebase.utils';
const CollectionPage = ({collection})=>{
    /**
     * example . not need this component.Irts for study 
     * useEffect for unsubscribe demo like in componentDidUnmount() in class
     */
    useEffect(()=>{
        const unsubscribeCollection  = firestore
        .collection('collection')
        .onSnapshot(snapshot => console.log("subscribe",snapshot))
        return ()=>{
            console.log("Unsubscribe")
            unsubscribeCollection()
        }
    },[])
    const {title,items}=collection;
    return (
    <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className="items">
        {
            items.map(item=>(
                <CollectionItem key={item.id} item={item} />
            ))
        }
        </div>

    </div>
)}
const mapStateToProps = (state,ownProps)=>({
    collection:selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);